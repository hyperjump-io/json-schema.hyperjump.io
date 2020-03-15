import moo from "moo";


const digit = `[0-9]`;
const digit19 = `[1-9]`;
const hexdig = `[0-9a-fA-F]`;

// String
const unescaped = `[^\\"]`;
const char = `(?:${unescaped}|\\(?:["/\\bfnrt]|u${hexdig}{4})`;
const string = `"${char}*"`;
const property = `"${char}*"(?=:)`;

// Number
const int = `(?:0|${digit19}${digit}*)`;
const frac = `\\.${digit}+`;
const e = `[eE]`;
const exp = `${e}[-+]${digit}+`;
const number = `-?${int}(?:${frac})?(?:${exp})?`;

export default moo.compile({
  WS: { match: /(?:(?:\r?\n)|[ \t])+/, lineBreaks: true },
  punctuation: /[:,]/,
  number: new RegExp(number),
  property: new RegExp(property),
  string: new RegExp(string),
  grouping: ["{", "}", "[", "]"],
  keyword: ["null", "true", "false"],
  other: /./
});
