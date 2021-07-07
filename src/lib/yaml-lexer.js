import moo from "moo";


const digit = `[0-9]`;
const digit19 = `[1-9]`;
const hexdig = `[0-9a-fA-F]`;

// String
const doubleQuoteChar = `(?:\\\\["\\/\\\\brfnt]|\\\\u${hexdig}{4}|[^"\\\\])`;
const singleQuoteChar = `(?:\\\\['\\/\\\\brfnt]|\\\\u${hexdig}{4}|[^'\\\\])`;
const string = `(?:"${doubleQuoteChar}*"|'${singleQuoteChar}*')`;

// Property
const property = `(?<=^\\s*)[^"'][^:\\n]*(?=\\s*:)`;
const propertySeparator = `(?<=^\\s*[^:]+):`;

// Number
const int = `(?:0|${digit19}${digit}*)`;
const frac = `\\.${digit}+`;
const e = `[eE]`;
const exp = `${e}[-+]${digit}+`;
const number = `-?${int}(?:${frac})?(?:${exp})?`;

// Array syntax
const arrayItemMarker = `(?<=^\\s*)-`;

// Whitespace
const whitespace = `(?:(?:\r?\n)|[ \t])+`;

// Comment
const comment = `#[^\n]*`;

export default moo.compile({
  WS: { match: new RegExp(whitespace), lineBreaks: true },
  comment: new RegExp(comment),
  accent3: ["{", "}", "[", "]", new RegExp(propertySeparator)],
  accent1: new RegExp(arrayItemMarker),
  accent6: new RegExp(property),
  accent7: ["true", "false", "null", new RegExp(string), new RegExp(number)],
  other: /./
});
