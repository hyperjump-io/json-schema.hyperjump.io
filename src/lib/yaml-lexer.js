import moo from "moo";


const digit = `[0-9]`;
const digit19 = `[1-9]`;
const hexdig = `[0-9a-fA-F]`;

// Whitespace
const endline = `(?:\r?\n)+`;
const whitespace = `[ \\t]`;
const indent = `^${whitespace}+`;

// String
const doubleQuoteChar = `(?:\\\\["\\/\\\\brfnt]|\\\\u${hexdig}{4}|[^"\\\\])`;
const singleQuoteChar = `(?:\\\\['\\/\\\\brfnt]|\\\\u${hexdig}{4}|[^'\\\\])`;
const string = `(?:"${doubleQuoteChar}*"|'${singleQuoteChar}*')`;

// Property
const propertySeparator = `${whitespace}*:(?:${whitespace}+|$)`;
const property = `[^\\s]+(?=${propertySeparator})`;

// Grouped Property
const groupedPropertySeparator = `${whitespace}*:`;
const groupedProperty = `[^\\s]+(?=${groupedPropertySeparator})`;

// Number
const int = `(?:0|${digit19}${digit}*)`;
const frac = `\\.${digit}+`;
const e = `[eE]`;
const exp = `${e}[-+]?${digit}+`;
const number = `-?${int}(?:${frac})?(?:${exp})?`;

// Array syntax
const arrayItemMarker = `-${whitespace}+`;

// Comment
const comment = `#[^\n]*`;

export default moo.states({
  main: {
    WS: { match: new RegExp(endline), lineBreaks: true },
    indent: new RegExp(indent),
    comment: new RegExp(comment),
    inlineArray: { match: "[", type: moo.keywords({ accent3: "[" }), push: "inlineArray" },
    inlineObject: { match: ["{"], type: moo.keywords({ accent3: "{" }), push: "inlineObject" },
    accent1: new RegExp(arrayItemMarker),
    accent7: ["true", "false", "null", new RegExp(string), new RegExp(number)],
    accent6: new RegExp(property),
    accent3: { match: new RegExp(propertySeparator), lineBreaks: true, push: "property" },
    other: /[^#\n]+/
  },
  property: {
    WS: { match: new RegExp(endline), lineBreaks: true, pop: 1 },
    comment: new RegExp(comment),
    accent7: { match: ["true", "false", "null", new RegExp(string), new RegExp(number)], pop: 1 },
    other: /[^#\n]+/
  },
  inlineArray: {
    WS: new RegExp(`${whitespace}+`),
    comment: new RegExp(comment),
    inlineArray: { match: "[", type: moo.keywords({ accent3: "[" }), push: "inlineArray" },
    inlineObject: { match: ["{"], type: moo.keywords({ accent3: "{" }), push: "inlineObject" },
    close: { match: "]", type: moo.keywords({ accent3: "]" }), pop: 1 },
    comma: ",",
    accent7: ["true", "false", "null", new RegExp(string), new RegExp(number)],
    accent6: new RegExp(groupedProperty),
    accent3: { match: new RegExp(groupedPropertySeparator), lineBreaks: true },
    other: /[^\]\n,#]+/
  },
  inlineObject: {
    WS: new RegExp(`${whitespace}+`),
    comment: new RegExp(comment),
    inlineArray: { match: "[", type: moo.keywords({ accent3: "[" }), push: "inlineArray" },
    inlineObject: { match: ["{"], type: moo.keywords({ accent3: "{" }), push: "inlineObject" },
    close: { match: "}", type: moo.keywords({ accent3: "}" }), pop: 1 },
    comma: ",",
    accent7: ["true", "false", "null", new RegExp(string), new RegExp(number)],
    accent6: new RegExp(groupedProperty),
    accent3: { match: new RegExp(groupedPropertySeparator), lineBreaks: true },
    other: /[^}\n,#]+/
  }
});
