module.exports = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart, expression: peg$parseexpression },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = [],
        peg$c1 = peg$FAILED,
        peg$c2 = void 0,
        peg$c3 = function(characters) {
            return {
                type: 'text',
                value: characters
            }
          },
        peg$c4 = function(e) { return e; },
        peg$c5 = function(main, args, truthy, falsy) {
            return {
              type: 'expression',
              path: main.value,
              args: args,
              truthy: truthy || null,
              falsy: falsy || null
            }
          },
        peg$c6 = function(a) { return a; },
        peg$c7 = "?",
        peg$c8 = { type: "literal", value: "?", description: "\"?\"" },
        peg$c9 = function(arg) { return arg; },
        peg$c10 = "",
        peg$c11 = ":",
        peg$c12 = { type: "literal", value: ":", description: "\":\"" },
        peg$c13 = ".",
        peg$c14 = { type: "literal", value: ".", description: "\".\"" },
        peg$c15 = function(s) { return s; },
        peg$c16 = function(first, rest) {
            return {
              type: 'path',
              value: [first].concat(rest)
            };
          },
        peg$c17 = { type: "other", description: "string" },
        peg$c18 = function(text) {
            return { type: 'string', value: text.join('') };
          },
        peg$c19 = function(c) { return c; },
        peg$c20 = { type: "other", description: "escape sequence" },
        peg$c21 = "\\",
        peg$c22 = { type: "literal", value: "\\", description: "\"\\\\\"" },
        peg$c23 = "/",
        peg$c24 = { type: "literal", value: "/", description: "\"/\"" },
        peg$c25 = "b",
        peg$c26 = { type: "literal", value: "b", description: "\"b\"" },
        peg$c27 = function() { return "\b"; },
        peg$c28 = "f",
        peg$c29 = { type: "literal", value: "f", description: "\"f\"" },
        peg$c30 = function() { return "\f"; },
        peg$c31 = "n",
        peg$c32 = { type: "literal", value: "n", description: "\"n\"" },
        peg$c33 = function() { return "\n"; },
        peg$c34 = "r",
        peg$c35 = { type: "literal", value: "r", description: "\"r\"" },
        peg$c36 = function() { return "\r"; },
        peg$c37 = "t",
        peg$c38 = { type: "literal", value: "t", description: "\"t\"" },
        peg$c39 = function() { return "\t"; },
        peg$c40 = "u",
        peg$c41 = { type: "literal", value: "u", description: "\"u\"" },
        peg$c42 = function(digits) {
               return String.fromCharCode(parseInt(digits, 16));
             },
        peg$c43 = function(sequence) { return sequence; },
        peg$c44 = "{{",
        peg$c45 = { type: "literal", value: "{{", description: "\"{{\"" },
        peg$c46 = "}}",
        peg$c47 = { type: "literal", value: "}}", description: "\"}}\"" },
        peg$c48 = /^[0-9a-zA-Z_$]/,
        peg$c49 = { type: "class", value: "[0-9a-zA-Z_$]", description: "[0-9a-zA-Z_$]" },
        peg$c50 = { type: "any", description: "any character" },
        peg$c51 = { type: "other", description: "double quote" },
        peg$c52 = "\"",
        peg$c53 = { type: "literal", value: "\"", description: "\"\\\"\"" },
        peg$c54 = { type: "other", description: "single quote" },
        peg$c55 = "'",
        peg$c56 = { type: "literal", value: "'", description: "\"'\"" },
        peg$c57 = /^[ -!#-[\]-\u10FFFF]/,
        peg$c58 = { type: "class", value: "[ -!#-[\\]-\\u10FFFF]", description: "[ -!#-[\\]-\\u10FFFF]" },
        peg$c59 = /^[0-9a-f]/i,
        peg$c60 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
        peg$c61 = { type: "other", description: "whitespace" },
        peg$c62 = /^[ \t]/,
        peg$c63 = { type: "class", value: "[ \\t]", description: "[ \\t]" },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsestart() {
      var s0, s1;

      s0 = [];
      s1 = peg$parsetext();
      if (s1 === peg$FAILED) {
        s1 = peg$parseenclosedexpression();
      }
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parsetext();
        if (s1 === peg$FAILED) {
          s1 = peg$parseenclosedexpression();
        }
      }

      return s0;
    }

    function peg$parsetext() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$parseopen();
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = peg$c2;
      } else {
        peg$currPos = s4;
        s4 = peg$c1;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseany();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$c1;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$c1;
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parseopen();
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = peg$c2;
          } else {
            peg$currPos = s4;
            s4 = peg$c1;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseany();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$c1;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c1;
          }
        }
      } else {
        s2 = peg$c1;
      }
      if (s2 !== peg$FAILED) {
        s2 = input.substring(s1, peg$currPos);
      }
      s1 = s2;
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c3(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseenclosedexpression() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseopen();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsews();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsews();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexpression();
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parsews();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsews();
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseclose();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c4(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c1;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c1;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseexpression() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parsepath();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseparameter();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseparameter();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsetruthy();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsefalsy();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c5(s1, s2, s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c1;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseparameter() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsews();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsews();
        }
      } else {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseargument();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c6(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parsetruthy() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsews();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsews();
        }
      } else {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 63) {
          s2 = peg$c7;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c8); }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsews();
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parsews();
            }
          } else {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseargument();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c9(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c1;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$c10;
      }

      return s0;
    }

    function peg$parsefalsy() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsews();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsews();
        }
      } else {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 58) {
          s2 = peg$c11;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c12); }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsews();
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parsews();
            }
          } else {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseargument();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c9(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c1;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$c10;
      }

      return s0;
    }

    function peg$parsepath() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parsevariable();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 46) {
          s4 = peg$c13;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c14); }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsevariable();
          if (s5 !== peg$FAILED) {
            peg$reportedPos = s3;
            s4 = peg$c15(s5);
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$c1;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c1;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 46) {
            s4 = peg$c13;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c14); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsevariable();
            if (s5 !== peg$FAILED) {
              peg$reportedPos = s3;
              s4 = peg$c15(s5);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$c1;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c1;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c16(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseargument() {
      var s0;

      s0 = peg$parsepath();
      if (s0 === peg$FAILED) {
        s0 = peg$parsestring();
      }

      return s0;
    }

    function peg$parsestring() {
      var s0, s1, s2, s3;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parsedoublequote();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsedoublequote_character();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsedoublequote_character();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsedoublequote();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c18(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsesinglequote();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parsesinglequote_character();
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parsesinglequote_character();
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parsesinglequote();
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c18(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c1;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c17); }
      }

      return s0;
    }

    function peg$parsedoublequote_character() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parsedoublequote();
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = peg$c2;
      } else {
        peg$currPos = s1;
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsecharacter();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c19(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parsesinglequote_character() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parsesinglequote();
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = peg$c2;
      } else {
        peg$currPos = s1;
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsecharacter();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c19(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parsecharacter() {
      var s0;

      s0 = peg$parseunescaped();
      if (s0 === peg$FAILED) {
        s0 = peg$parseescape_sequence();
      }

      return s0;
    }

    function peg$parseescape_sequence() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseescape_character();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsedoublequote();
        if (s2 === peg$FAILED) {
          s2 = peg$parsesinglequote();
          if (s2 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 92) {
              s2 = peg$c21;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c22); }
            }
            if (s2 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 47) {
                s2 = peg$c23;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c24); }
              }
              if (s2 === peg$FAILED) {
                s2 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 98) {
                  s3 = peg$c25;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c26); }
                }
                if (s3 !== peg$FAILED) {
                  peg$reportedPos = s2;
                  s3 = peg$c27();
                }
                s2 = s3;
                if (s2 === peg$FAILED) {
                  s2 = peg$currPos;
                  if (input.charCodeAt(peg$currPos) === 102) {
                    s3 = peg$c28;
                    peg$currPos++;
                  } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c29); }
                  }
                  if (s3 !== peg$FAILED) {
                    peg$reportedPos = s2;
                    s3 = peg$c30();
                  }
                  s2 = s3;
                  if (s2 === peg$FAILED) {
                    s2 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 110) {
                      s3 = peg$c31;
                      peg$currPos++;
                    } else {
                      s3 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c32); }
                    }
                    if (s3 !== peg$FAILED) {
                      peg$reportedPos = s2;
                      s3 = peg$c33();
                    }
                    s2 = s3;
                    if (s2 === peg$FAILED) {
                      s2 = peg$currPos;
                      if (input.charCodeAt(peg$currPos) === 114) {
                        s3 = peg$c34;
                        peg$currPos++;
                      } else {
                        s3 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c35); }
                      }
                      if (s3 !== peg$FAILED) {
                        peg$reportedPos = s2;
                        s3 = peg$c36();
                      }
                      s2 = s3;
                      if (s2 === peg$FAILED) {
                        s2 = peg$currPos;
                        if (input.charCodeAt(peg$currPos) === 116) {
                          s3 = peg$c37;
                          peg$currPos++;
                        } else {
                          s3 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c38); }
                        }
                        if (s3 !== peg$FAILED) {
                          peg$reportedPos = s2;
                          s3 = peg$c39();
                        }
                        s2 = s3;
                        if (s2 === peg$FAILED) {
                          s2 = peg$currPos;
                          if (input.charCodeAt(peg$currPos) === 117) {
                            s3 = peg$c40;
                            peg$currPos++;
                          } else {
                            s3 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c41); }
                          }
                          if (s3 !== peg$FAILED) {
                            s4 = peg$currPos;
                            s5 = peg$currPos;
                            s6 = peg$parseHEXDIG();
                            if (s6 !== peg$FAILED) {
                              s7 = peg$parseHEXDIG();
                              if (s7 !== peg$FAILED) {
                                s8 = peg$parseHEXDIG();
                                if (s8 !== peg$FAILED) {
                                  s9 = peg$parseHEXDIG();
                                  if (s9 !== peg$FAILED) {
                                    s6 = [s6, s7, s8, s9];
                                    s5 = s6;
                                  } else {
                                    peg$currPos = s5;
                                    s5 = peg$c1;
                                  }
                                } else {
                                  peg$currPos = s5;
                                  s5 = peg$c1;
                                }
                              } else {
                                peg$currPos = s5;
                                s5 = peg$c1;
                              }
                            } else {
                              peg$currPos = s5;
                              s5 = peg$c1;
                            }
                            if (s5 !== peg$FAILED) {
                              s5 = input.substring(s4, peg$currPos);
                            }
                            s4 = s5;
                            if (s4 !== peg$FAILED) {
                              peg$reportedPos = s2;
                              s3 = peg$c42(s4);
                              s2 = s3;
                            } else {
                              peg$currPos = s2;
                              s2 = peg$c1;
                            }
                          } else {
                            peg$currPos = s2;
                            s2 = peg$c1;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c43(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }

      return s0;
    }

    function peg$parseescape_character() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 92) {
        s0 = peg$c21;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c22); }
      }

      return s0;
    }

    function peg$parseopen() {
      var s0;

      if (input.substr(peg$currPos, 2) === peg$c44) {
        s0 = peg$c44;
        peg$currPos += 2;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c45); }
      }

      return s0;
    }

    function peg$parseclose() {
      var s0;

      if (input.substr(peg$currPos, 2) === peg$c46) {
        s0 = peg$c46;
        peg$currPos += 2;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c47); }
      }

      return s0;
    }

    function peg$parsevariable() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c48.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c48.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c49); }
          }
        }
      } else {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseany() {
      var s0;

      if (input.length > peg$currPos) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c50); }
      }

      return s0;
    }

    function peg$parsedoublequote() {
      var s0, s1;

      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 34) {
        s0 = peg$c52;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c53); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c51); }
      }

      return s0;
    }

    function peg$parsesinglequote() {
      var s0, s1;

      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 39) {
        s0 = peg$c55;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c56); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c54); }
      }

      return s0;
    }

    function peg$parseunescaped() {
      var s0;

      if (peg$c57.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c58); }
      }

      return s0;
    }

    function peg$parseHEXDIG() {
      var s0;

      if (peg$c59.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c60); }
      }

      return s0;
    }

    function peg$parsews() {
      var s0, s1;

      peg$silentFails++;
      if (peg$c62.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c63); }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c61); }
      }

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();