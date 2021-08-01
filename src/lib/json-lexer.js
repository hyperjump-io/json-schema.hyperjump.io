import moo from "moo";


const digit = `[0-9]`;
const digit19 = `[1-9]`;
const hexdig = `[0-9a-fA-F]`;

// String
const char = `(?:\\\\["\\/\\\\brfnt]|\\\\u${hexdig}{4}|[^"\\\\])`;
const propertyStart = `"(?=[^"]*"\\s*:)`;

// Number
const int = `(?:0|${digit19}${digit}*)`;
const frac = `\\.${digit}+`;
const e = `[eE]`;
const exp = `${e}[-+]?${digit}+`;
const number = `-?${int}(?:${frac})?(?:${exp})?`;

// Whitespace
const whitespace = `(?:(?:\r?\n)|[ \t])+`;

export default moo.states({
  main: {
    WS: { match: new RegExp(whitespace), lineBreaks: true },
    accent7: new RegExp(`true|false|${number}`),
    accent3: ["{", "}", "[", "]"],
    accent6: "null",
    stringProperty: { match: new RegExp(propertyStart), push: "property" },
    stringStart: { match: "\"", push: "string" },
    other: /./
  },
  string: {
    accent7: { match: new RegExp(`${char}+`), lineBreaks: true },
    stringEnd: { match: "\"", pop: true },
    other: /./
  },
  property: {
    accent1: { match: new RegExp(`${char}+`), lineBreaks: true },
    propertyEnd: { match: "\"", pop: true },
    other: /./
  }
});
