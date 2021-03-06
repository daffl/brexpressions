/**
 * Breezy text parsing grammar
 * ===========================
 *
 * A grammar for parsing text like `some content {{helpers.eq first "test" ? 'active' : 'inactive'}}`
 * into plain text and expressions using [PEGjs](http://pegjs.org).
 * Will generate `lib/expression/parser.js`
 *
 */

// Matches any number of text or expressions enclosed with `{{` and `}}`
start = (text / enclosedexpression)*

// Any text that does not contain an expression matcher (`{{`)
text =
  characters:$((!open) c:any)+ {
    return {
        type: 'text',
        value: characters
    }
  }

// Expressions in enclosed tags e.g. {{helpers.eq first "test" ? 'active' : 'inactive'}}
enclosedexpression =
  open ws* e:expression ws* close { return e; }

// Main expression e.g. `helpers.eq first "test" ? 'active' : 'inactive'`
expression =
  main:path args:parameter* truthy:truthy falsy:falsy {
    return {
      type: 'expression',
      path: main.value,
      args: args,
      truthy: truthy || null,
      falsy: falsy || null
    }
  }

parameter = ws+ a:argument { return a; }

// Result for truthy expression e.g. `? "something"`
truthy =
  ws+ "?" ws+ arg:argument { return arg; }
  / ""

// Result for falsy expression e.g. `: "something"`
falsy =
  ws+ ":" ws+ arg:argument { return arg; }
  / ""

// Dot separated paths like `single` or `path.to.value` will be split into an array
path =
  first:variable rest:("." s:variable { return s; })* {
    return {
      type: 'path',
      value: [first].concat(rest)
    };
  }

// A method call argument can either be a path or a string
argument = path / string

// String literals with either single or double quotes
string "string" =
  doublequote text:(doublequote_character*) doublequote {
    return { type: 'string', value: text.join('') };
  }
  / singlequote text:(singlequote_character*) singlequote {
    return { type: 'string', value: text.join('') };
  }

doublequote_character =
  (!doublequote) c:character { return c; }

singlequote_character =
  (!singlequote) c:character { return c; }

// String characters with escaping (JSON rules)
character =
  unescaped
  / escape_sequence

// Escape sequences (\n, \", \' etc.)
escape_sequence "escape sequence" = escape_character sequence:(
     doublequote
   / singlequote
   / "\\"
   / "/"
   / "b" { return "\b"; }
   / "f" { return "\f"; }
   / "n" { return "\n"; }
   / "r" { return "\r"; }
   / "t" { return "\t"; }
   / "u" digits:$(HEXDIG HEXDIG HEXDIG HEXDIG) {
       return String.fromCharCode(parseInt(digits, 16));
     }
  )
  { return sequence; }

escape_character = "\\"
open = "{{"
close = "}}"
// Valid variable names
variable = $([0-9a-zA-Z_\$]+)
any = .
doublequote "double quote" = '"'
singlequote "single quote" = "'"
unescaped = [\x20-\x21\x23-\x5B\x5D-\u10FFFF]
HEXDIG = [0-9a-f]i
ws "whitespace" = [ \t]
