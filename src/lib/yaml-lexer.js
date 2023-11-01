import moo from "moo";


const digit = `[0-9]`;
const digit19 = `[1-9]`;
const hexdig = `[0-9a-fA-F]`;

// Whitespace
const endline = `(?:\r?\n)+`;
const whitespace = `[ \\t]`;

// Comment
const comment = `#[^\n]*`;

// String
const doubleQuoteChar = `(?:\\\\["\\/\\\\brfnt]|\\\\u${hexdig}{4}|[^"\\\\])`;
const singleQuoteChar = `(?:\\\\['\\/\\\\brfnt]|\\\\u${hexdig}{4}|[^'\\\\])`;
const string = `(?:"${doubleQuoteChar}*"|'${singleQuoteChar}*')`;

// Property
const propertySeparator = `${whitespace}*:(?:${whitespace}+|$)`;
const property = `[^\\n#>-]+?(?=${propertySeparator})`;

// Array
const arrayItemMarker = `-(?=${whitespace})`;

// Number
const int = `(?:0|${digit19}${digit}*)`;
const frac = `\\.${digit}+`;
const e = `[eE]`;
const exp = `${e}[-+]?${digit}+`;
const number = `-?${int}(?:${frac})?(?:${exp})?`;

// Other
const other = `[^{}[\\],#\\n]+(?<!${whitespace}+)`;

export default moo.states({
  main: {
    WS: { match: new RegExp(`(?:${whitespace}|${endline})+`), lineBreaks: true },
    comma: [","],
    accent3: ["{", "}", "[", "]", ":"],
    accent1: new RegExp(arrayItemMarker),
    accent7: { match: [new RegExp(string), new RegExp(number), "true", "false", "null"] },
    accent6: { match: new RegExp(property) },
    comment: new RegExp(comment),
    other: new RegExp(other)
  }
});
