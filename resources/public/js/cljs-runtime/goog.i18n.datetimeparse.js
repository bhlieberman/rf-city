goog.provide("goog.i18n.DateTimeParse");
goog.require("goog.asserts");
goog.require("goog.date");
goog.require("goog.i18n.DateTimeFormat.Format");
goog.require("goog.i18n.DateTimeSymbols");
goog.require("goog.i18n.DayPeriods");
goog.require("goog.object");
goog.requireType("goog.i18n.DateTimeSymbolsType");
goog.scope(function() {
  const DayPeriods = goog.module.get("goog.i18n.DayPeriods");
  goog.i18n.DateTimeParse.PatternPart;
  const horizontalWhiteSpacePrefixRegex = /^[ \t\xA0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000]/;
  const skipWhiteSpacePrefixRegex = /^[\s\xA0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000]+/;
  goog.i18n.DateTimeParse = function(pattern, opt_dateTimeSymbols) {
    goog.asserts.assert(opt_dateTimeSymbols !== undefined || goog.i18n.DateTimeSymbols !== undefined, "goog.i18n.DateTimeSymbols or explicit symbols must be defined");
    this.patternParts_ = [];
    this.dateTimeSymbols_ = opt_dateTimeSymbols || goog.i18n.DateTimeSymbols;
    if (typeof pattern == "number") {
      this.applyStandardPattern_(pattern);
    } else {
      this.applyPattern_(pattern);
    }
  };
  goog.i18n.DateTimeParse.ambiguousYearCenturyStart = 80;
  goog.i18n.DateTimeParse.PATTERN_CHARS_ = "GyMdkHmsSEDabBhKzZvQL";
  goog.i18n.DateTimeParse.NUMERIC_FORMAT_CHARS_ = "MydhHmsSDkK";
  goog.i18n.DateTimeParse.PREDICTIVE_FORMAT_CHARS_ = "abBhHkKm";
  goog.i18n.DateTimeParse.prototype.applyPattern_ = function(pattern) {
    let inQuote = false;
    let buf = "";
    for (let i = 0; i < pattern.length; i++) {
      const ch = pattern.charAt(i);
      if (ch == " ") {
        if (buf.length > 0) {
          this.patternParts_.push({text:buf, count:0, abutStart:false, numeric:false});
          buf = "";
        }
        this.patternParts_.push({text:" ", count:0, abutStart:false, numeric:false});
        while (i < pattern.length - 1 && pattern.charAt(i + 1) == " ") {
          i++;
        }
      } else if (inQuote) {
        if (ch == "'") {
          if (i + 1 < pattern.length && pattern.charAt(i + 1) == "'") {
            buf += "'";
            i++;
          } else {
            inQuote = false;
          }
        } else {
          buf += ch;
        }
      } else if (goog.i18n.DateTimeParse.PATTERN_CHARS_.indexOf(ch) >= 0) {
        if (buf.length > 0) {
          this.patternParts_.push({text:buf, count:0, abutStart:false, numeric:false});
          buf = "";
        }
        const count = this.getNextCharCount_(pattern, i);
        const numeric = this.isNumericField_(ch, count);
        this.patternParts_.push({text:ch, count:count, abutStart:false, numeric:numeric});
        i += count - 1;
      } else if (ch == "'") {
        if (i + 1 < pattern.length && pattern.charAt(i + 1) == "'") {
          buf += "'";
          i++;
        } else {
          inQuote = true;
        }
      } else {
        buf += ch;
      }
    }
    if (buf.length > 0) {
      this.patternParts_.push({text:buf, count:0, abutStart:false, numeric:false});
    }
    this.markAbutStart_();
  };
  goog.i18n.DateTimeParse.prototype.applyStandardPattern_ = function(formatType) {
    let pattern;
    if (formatType > goog.i18n.DateTimeFormat.Format.SHORT_DATETIME) {
      formatType = goog.i18n.DateTimeFormat.Format.MEDIUM_DATETIME;
    }
    if (formatType < 4) {
      pattern = this.dateTimeSymbols_.DATEFORMATS[formatType];
    } else if (formatType < 8) {
      pattern = this.dateTimeSymbols_.TIMEFORMATS[formatType - 4];
    } else {
      pattern = this.dateTimeSymbols_.DATETIMEFORMATS[formatType - 8];
      pattern = pattern.replace("{1}", this.dateTimeSymbols_.DATEFORMATS[formatType - 8]);
      pattern = pattern.replace("{0}", this.dateTimeSymbols_.TIMEFORMATS[formatType - 8]);
    }
    this.applyPattern_(pattern);
  };
  goog.i18n.DateTimeParse.prototype.getNextCharCount_ = function(pattern, start) {
    const ch = pattern.charAt(start);
    let next = start + 1;
    while (next < pattern.length && pattern.charAt(next) == ch) {
      next++;
    }
    return next - start;
  };
  goog.i18n.DateTimeParse.prototype.markAbutStart_ = function() {
    let abut = false;
    for (let i = 0; i < this.patternParts_.length; i++) {
      if (this.patternParts_[i].numeric) {
        if (!abut && i + 1 < this.patternParts_.length && this.patternParts_[i + 1].numeric) {
          abut = true;
          this.patternParts_[i].abutStart = true;
        }
      } else {
        abut = false;
      }
    }
  };
  goog.i18n.DateTimeParse.prototype.isNumericField_ = function(ch, count) {
    if (count <= 0) {
      return false;
    }
    const i = goog.i18n.DateTimeParse.NUMERIC_FORMAT_CHARS_.indexOf(ch);
    return i > 0 || i == 0 && count < 3;
  };
  goog.i18n.DateTimeParse.prototype.assertPatternSupportsPredictive_ = function() {
    for (let i = 0; i < this.patternParts_.length; i++) {
      const part = this.patternParts_[i];
      if (part.count > 0 && (goog.i18n.DateTimeParse.PREDICTIVE_FORMAT_CHARS_.indexOf(part.text.charAt(0)) < 0 || part.count > 2 || part.abutStart)) {
        throw new Error(`'predictive' parsing is not supported for symbol ` + `'${part.text.charAt(0)}'.`);
      }
    }
  };
  goog.i18n.DateTimeParse.prototype.parse = function(text, date, options) {
    let predictive = false;
    let validate = false;
    if (options) {
      predictive = options.predictive || false;
      validate = options.validate || false;
    }
    if (predictive) {
      this.assertPatternSupportsPredictive_();
    }
    const cal = new goog.i18n.DateTimeParse.MyDate_();
    const parsePos = [0];
    cal.dayPeriodIndex = -1;
    for (let i = 0; i < this.patternParts_.length; i++) {
      if (predictive && parsePos[0] >= text.length) {
        break;
      }
      if (this.patternParts_[i].count == 0) {
        if (this.subParseLiteral_(text, parsePos, this.patternParts_[i], predictive)) {
          continue;
        }
        return 0;
      }
      if (this.patternParts_[i].abutStart) {
        const partsParsed = this.subParseAbut_(text, parsePos, i, cal);
        if (partsParsed <= 0) {
          return 0;
        }
        i += partsParsed - 1;
        continue;
      }
      if (!this.subParse_(text, parsePos, this.patternParts_[i], 0, cal, predictive)) {
        return 0;
      }
    }
    return cal.calcDate_(date, validate) ? parsePos[0] : 0;
  };
  goog.i18n.DateTimeParse.prototype.subParseAbut_ = function(text, pos, abutStart, cal) {
    const start = pos[0];
    let abutPass = 0;
    let i;
    for (i = abutStart; i < this.patternParts_.length; i++) {
      const part = this.patternParts_[i];
      let count = part.count;
      if (count === 0) {
        break;
      }
      if (i == abutStart) {
        count -= abutPass;
        abutPass++;
        if (count == 0) {
          return 0;
        }
      }
      const requireLength = i > abutStart && part.numeric;
      const partStart = pos[0];
      const subParsed = this.subParse_(text, pos, part, count, cal, false);
      if (!subParsed || requireLength && pos[0] - partStart < count) {
        i = abutStart - 1;
        pos[0] = start;
        continue;
      }
    }
    return i - abutStart;
  };
  goog.i18n.DateTimeParse.prototype.subParse_ = function(text, pos, part, digitCount, cal, predictive) {
    this.skipSpace_(text, pos);
    if (part.numeric && digitCount > 0) {
      if (pos[0] + digitCount > text.length) {
        return false;
      }
    }
    switch(part.text.charAt(0)) {
      case "G":
        this.subParseString_(text, pos, [this.dateTimeSymbols_.ERAS], value => cal.era = value);
        return true;
      case "M":
      case "L":
        return this.subParseMonth_(text, pos, digitCount, part, cal);
      case "E":
        const weekdays = [this.dateTimeSymbols_.WEEKDAYS, this.dateTimeSymbols_.SHORTWEEKDAYS];
        return this.subParseString_(text, pos, weekdays, value => cal.dayOfWeek = value);
      case "B":
      case "b":
        const localePeriods = DayPeriods.getDayPeriods();
        let periodNames = [];
        let expectedValues = [];
        if (localePeriods) {
          for (const name of goog.object.getKeys(localePeriods)) {
            periodNames.push(localePeriods[name].periodName);
            expectedValues.push(localePeriods[name].formatNames[0]);
          }
        }
        const periodsData = [expectedValues.concat(this.dateTimeSymbols_.AMPMS)];
        periodNames.push("isAm");
        periodNames.push("isPm");
        const foundPeriod = this.subParseString_(text, pos, periodsData, value => cal.dayPeriodIndex = value, predictive);
        cal.dayPeriodName = periodNames[cal.dayPeriodIndex];
        return predictive ? foundPeriod : true;
      case "a":
        const success = this.subParseString_(text, pos, [this.dateTimeSymbols_.AMPMS], value => cal.ampm = value, predictive);
        return predictive ? success : true;
      case "y":
        return this.subParseYear_(text, pos, part, digitCount, cal);
      case "Q":
        const quarters = [this.dateTimeSymbols_.QUARTERS, this.dateTimeSymbols_.SHORTQUARTERS];
        return this.subParseString_(text, pos, quarters, function(value) {
          cal.month = value * 3;
          cal.day = 1;
        });
      case "d":
        this.subParseInt_(text, pos, part, digitCount, function(value) {
          cal.day = value;
        });
        return true;
      case "S":
        return this.subParseFractionalSeconds_(text, pos, digitCount, cal);
      case "h":
      case "K":
      case "H":
      case "k":
        {
          const success = this.subParseInt_(text, pos, part, digitCount, function(value) {
            cal.hours = part.text.charAt(0) === "h" && value === 12 ? 0 : value;
          }, predictive);
          return predictive ? success : true;
        }
      case "m":
        {
          const success = this.subParseInt_(text, pos, part, digitCount, function(value) {
            cal.minutes = value;
          }, predictive);
          return predictive ? success : true;
        }
      case "s":
        this.subParseInt_(text, pos, part, digitCount, function(value) {
          cal.seconds = value;
        });
        return true;
      case "z":
      case "Z":
      case "v":
        return this.subParseTimeZoneInGMT_(text, pos, cal);
      default:
        return false;
    }
  };
  goog.i18n.DateTimeParse.prototype.subParseYear_ = function(text, pos, part, digitCount, cal) {
    const start = pos[0];
    let value = this.parseInt_(text, pos, digitCount);
    if (value === null) {
      value = this.parseInt_(text, pos, 0, true);
    }
    if (value === null) {
      return false;
    }
    if (value >= 0 && pos[0] - start == 2 && part.count == 2) {
      cal.setTwoDigitYear_(value);
    } else {
      cal.year = value;
    }
    return true;
  };
  goog.i18n.DateTimeParse.prototype.subParseMonth_ = function(text, pos, digitCount, part, cal) {
    if (part.numeric && this.subParseInt_(text, pos, part, digitCount, function(value) {
      cal.month = value - 1;
    })) {
      return true;
    }
    const months = [this.dateTimeSymbols_.MONTHS, this.dateTimeSymbols_.STANDALONEMONTHS, this.dateTimeSymbols_.SHORTMONTHS, this.dateTimeSymbols_.STANDALONESHORTMONTHS];
    return this.subParseString_(text, pos, months, function(value) {
      cal.month = value;
    });
  };
  goog.i18n.DateTimeParse.prototype.subParseFractionalSeconds_ = function(text, pos, digitCount, cal) {
    const start = pos[0];
    const value = this.parseInt_(text, pos, digitCount);
    if (value === null) {
      return false;
    }
    const len = pos[0] - start;
    cal.milliseconds = len < 3 ? value * Math.pow(10, 3 - len) : Math.round(value / Math.pow(10, len - 3));
    return true;
  };
  goog.i18n.DateTimeParse.prototype.subParseTimeZoneInGMT_ = function(text, pos, cal) {
    if (text.indexOf("GMT", pos[0]) == pos[0]) {
      pos[0] += 3;
    }
    if (pos[0] >= text.length) {
      cal.tzOffset = 0;
      return true;
    }
    const start = pos[0];
    let value = this.parseInt_(text, pos, 0, true);
    if (value === null) {
      return false;
    }
    let offset;
    if (pos[0] < text.length && text.charAt(pos[0]) == ":") {
      offset = value * 60;
      pos[0]++;
      value = this.parseInt_(text, pos, 0);
      if (value === null) {
        return false;
      }
      offset += value;
    } else {
      offset = value;
      if (offset < 24 && pos[0] - start <= 3) {
        offset *= 60;
      } else {
        offset = offset % 100 + offset / 100 * 60;
      }
    }
    cal.tzOffset = -offset;
    return true;
  };
  goog.i18n.DateTimeParse.prototype.subParseInt_ = function(text, pos, part, maxChars, callback, predictive) {
    predictive = predictive || false;
    const start = pos[0];
    let value = this.parseInt_(text, pos, maxChars);
    if (value === null) {
      return false;
    } else if (predictive && pos[0] - start < part.count) {
      if (pos[0] < text.length) {
        return false;
      }
      value *= Math.pow(10, part.count - (pos[0] - start));
    }
    callback(value);
    return true;
  };
  goog.i18n.DateTimeParse.prototype.subParseString_ = function(text, pos, data, callback, predictive) {
    predictive = predictive || false;
    let value = null;
    for (let i = 0; i < data.length; i++) {
      value = this.matchString_(text, pos, data[i], predictive);
      if (value !== null) {
        callback(value);
        return true;
      }
    }
    return false;
  };
  goog.i18n.DateTimeParse.prototype.subParseLiteral_ = function(text, pos, part, predictive) {
    const white_space_match = part.text.match(horizontalWhiteSpacePrefixRegex);
    if (white_space_match != null) {
      const start = pos[0];
      this.skipSpace_(text, pos);
      if (pos[0] > start) {
        return true;
      }
    } else if (text.indexOf(part.text, pos[0]) == pos[0]) {
      pos[0] += part.text.length;
      return true;
    } else if (predictive && part.text.indexOf(text.substring(pos[0])) == 0) {
      pos[0] += text.length - pos[0];
      return true;
    }
    return false;
  };
  goog.i18n.DateTimeParse.prototype.skipSpace_ = function(text, pos) {
    const m = text.substring(pos[0]).match(skipWhiteSpacePrefixRegex);
    if (m) {
      pos[0] += m[0].length;
    }
  };
  goog.i18n.DateTimeParse.prototype.parseInt_ = function(text, pos, maxChars, allowSigned) {
    text = maxChars > 0 ? text.substring(0, pos[0] + maxChars) : text;
    allowSigned = allowSigned || false;
    if (this.dateTimeSymbols_.ZERODIGIT) {
      const parts = [];
      for (let i = pos[0]; i < text.length; i++) {
        const c = text.charCodeAt(i) - this.dateTimeSymbols_.ZERODIGIT;
        parts.push(0 <= c && c <= 9 ? String.fromCharCode(c + 48) : text.charAt(i));
      }
      text = parts.join("");
    } else {
      text = text.substring(pos[0]);
    }
    const signRe = allowSigned ? "[+-]?" : "";
    const re = new RegExp(`^${signRe}\\d+`);
    const m = text.match(re);
    if (!m) {
      return null;
    }
    pos[0] += m[0].length;
    return parseInt(m[0], 10);
  };
  goog.i18n.DateTimeParse.prototype.matchString_ = function(text, pos, data, predictive) {
    let bestMatchLength = 0;
    let bestMatchIndex = null;
    const lowerText = text.substring(pos[0]).toLowerCase();
    for (let i = 0; i < data.length; i++) {
      const lowerData = data[i].toLowerCase();
      if (predictive && lowerData.indexOf(lowerText) == 0) {
        bestMatchLength = lowerText.length;
        bestMatchIndex = i;
        break;
      }
      if (data[i].length > bestMatchLength && lowerText.indexOf(lowerData) == 0) {
        bestMatchLength = data[i].length;
        bestMatchIndex = i;
      }
    }
    if (bestMatchIndex !== null) {
      pos[0] += bestMatchLength;
    }
    return bestMatchIndex;
  };
  goog.i18n.DateTimeParse.ParseOptions = function() {
    this.predictive;
    this.validate;
  };
  goog.i18n.DateTimeParse.MyDate_ = function() {
  };
  goog.i18n.DateTimeParse.MyDate_.prototype.era;
  goog.i18n.DateTimeParse.MyDate_.prototype.year;
  goog.i18n.DateTimeParse.MyDate_.prototype.month;
  goog.i18n.DateTimeParse.MyDate_.prototype.day;
  goog.i18n.DateTimeParse.MyDate_.prototype.hours;
  goog.i18n.DateTimeParse.MyDate_.prototype.ampm;
  goog.i18n.DateTimeParse.MyDate_.prototype.dayPeriodIndex;
  goog.i18n.DateTimeParse.MyDate_.prototype.dayPeriodName;
  goog.i18n.DateTimeParse.MyDate_.prototype.minutes;
  goog.i18n.DateTimeParse.MyDate_.prototype.seconds;
  goog.i18n.DateTimeParse.MyDate_.prototype.milliseconds;
  goog.i18n.DateTimeParse.MyDate_.prototype.tzOffset;
  goog.i18n.DateTimeParse.MyDate_.prototype.dayOfWeek;
  goog.i18n.DateTimeParse.MyDate_.prototype.ambiguousYear = false;
  goog.i18n.DateTimeParse.MyDate_.prototype.setTwoDigitYear_ = function(year) {
    const now = new Date();
    const defaultCenturyStartYear = now.getFullYear() - goog.i18n.DateTimeParse.ambiguousYearCenturyStart;
    const ambiguousTwoDigitYear = defaultCenturyStartYear % 100;
    this.ambiguousYear = year == ambiguousTwoDigitYear;
    year += Math.floor(defaultCenturyStartYear / 100) * 100 + (year < ambiguousTwoDigitYear ? 100 : 0);
    return this.year = year;
  };
  goog.i18n.DateTimeParse.MyDate_.prototype.calcDate_ = function(date, validation) {
    if (date == null) {
      throw new Error("Parameter 'date' should not be null.");
    }
    if (this.era != undefined && this.year != undefined && this.era == 0 && this.year > 0) {
      this.year = -(this.year - 1);
    }
    if (this.year != undefined) {
      date.setFullYear(this.year);
    }
    const orgDate = date.getDate();
    date.setDate(1);
    if (this.month != undefined) {
      date.setMonth(this.month);
    }
    if (this.day != undefined) {
      date.setDate(this.day);
    } else {
      const maxDate = goog.date.getNumberOfDaysInMonth(date.getFullYear(), date.getMonth());
      date.setDate(orgDate > maxDate ? maxDate : orgDate);
    }
    if (typeof date.setHours === "function") {
      if (this.hours == undefined) {
        this.hours = date.getHours();
      }
      if (this.hours < 12) {
        if (this.ampm != undefined && this.ampm > 0) {
          this.hours += 12;
        } else {
          if (this.dayPeriodName !== undefined) {
            const pmPeriods = ["isPm", "noon", "afternoon1", "afternoon2", "evening1", "evening2"];
            if (pmPeriods.includes(this.dayPeriodName) || ["night1", "night2"].includes(this.dayPeriodName) && this.hours >= 6) {
              this.hours += 12;
            }
          }
        }
      }
      date.setHours(this.hours);
    }
    if (typeof date.setMinutes === "function" && this.minutes != undefined) {
      date.setMinutes(this.minutes);
    }
    if (typeof date.setSeconds === "function" && this.seconds != undefined) {
      date.setSeconds(this.seconds);
    }
    if (typeof date.setMilliseconds === "function" && this.milliseconds != undefined) {
      date.setMilliseconds(this.milliseconds);
    }
    if (validation && (this.year && this.year != date.getFullYear() || this.month && this.month != date.getMonth() || this.day && this.day != date.getDate() || this.hours && this.hours >= 24 || this.minutes && this.minutes >= 60 || this.seconds && this.seconds >= 60 || this.milliseconds && this.milliseconds >= 1000)) {
      return false;
    }
    if (this.tzOffset != undefined) {
      const offset = date.getTimezoneOffset();
      date.setTime(date.getTime() + (this.tzOffset - offset) * 60 * 1000);
    }
    if (this.ambiguousYear) {
      const defaultCenturyStart = new Date();
      defaultCenturyStart.setFullYear(defaultCenturyStart.getFullYear() - goog.i18n.DateTimeParse.ambiguousYearCenturyStart);
      if (date.getTime() < defaultCenturyStart.getTime()) {
        date.setFullYear(defaultCenturyStart.getFullYear() + 100);
      }
    }
    if (this.dayOfWeek != undefined) {
      if (this.day == undefined) {
        let adjustment = (7 + this.dayOfWeek - date.getDay()) % 7;
        if (adjustment > 3) {
          adjustment -= 7;
        }
        const orgMonth = date.getMonth();
        date.setDate(date.getDate() + adjustment);
        if (date.getMonth() != orgMonth) {
          date.setDate(date.getDate() + (adjustment > 0 ? -7 : 7));
        }
      } else if (this.dayOfWeek != date.getDay()) {
        return false;
      }
    }
    return true;
  };
});

//# sourceMappingURL=goog.i18n.datetimeparse.js.map
