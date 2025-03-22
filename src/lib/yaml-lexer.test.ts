import { describe, test, expect } from "vitest";
import lexer from "./yaml-lexer.ts";

describe("YAML Lexer", () => {
  test("true", () => {
    lexer.reset("true");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(1);
    expect(tokens[0].type).to.equal("accent7");
    expect(tokens[0].value).to.equal("true");
  });

  test("false", () => {
    lexer.reset("false");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(1);
    expect(tokens[0].type).to.equal("accent7");
    expect(tokens[0].value).to.equal("false");
  });

  test("null", () => {
    lexer.reset("null");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(1);
    expect(tokens[0].type).to.equal("accent7");
    expect(tokens[0].value).to.equal("null");
  });

  test("'foo'", () => {
    lexer.reset("'foo'");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(1);
    expect(tokens[0].type).to.equal("accent7");
    expect(tokens[0].value).to.equal("'foo'");
  });

  test("'foo\\'bar'", () => {
    lexer.reset("'foo\\'bar'");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(1);
    expect(tokens[0].type).to.equal("accent7");
    expect(tokens[0].value).to.equal("'foo\\'bar'");
  });

  test("\"foo\"", () => {
    lexer.reset("\"foo\"");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(1);
    expect(tokens[0].type).to.equal("accent7");
    expect(tokens[0].value).to.equal("\"foo\"");
  });

  test("\"foo\\\"bar\"", () => {
    lexer.reset("\"foo\\\"bar\"");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(1);
    expect(tokens[0].type).to.equal("accent7");
    expect(tokens[0].value).to.equal("\"foo\\\"bar\"");
  });

  test("42", () => {
    lexer.reset("42");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(1);
    expect(tokens[0].type).to.equal("accent7");
    expect(tokens[0].value).to.equal("42");
  });

  test("-42", () => {
    lexer.reset("-42");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(1);
    expect(tokens[0].type).to.equal("accent7");
    expect(tokens[0].value).to.equal("-42");
  });

  test("4.2", () => {
    lexer.reset("4.2");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(1);
    expect(tokens[0].type).to.equal("accent7");
    expect(tokens[0].value).to.equal("4.2");
  });

  test("4.2e2", () => {
    lexer.reset("4.2e2");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(1);
    expect(tokens[0].type).to.equal("accent7");
    expect(tokens[0].value).to.equal("4.2e2");
  });

  test("foo", () => {
    lexer.reset("foo");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(1);
    expect(tokens[0].type).to.equal("other");
    expect(tokens[0].value).to.equal("foo");
  });

  test("foo:bar", () => {
    lexer.reset("foo:bar");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(1);
    expect(tokens[0].type).to.equal("other");
    expect(tokens[0].value).to.equal("foo:bar");
  });

  test("foo bar", () => {
    lexer.reset("foo bar");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(1);
    expect(tokens[0].type).to.equal("other");
    expect(tokens[0].value).to.equal("foo bar");
  });

  test("foo:", () => {
    lexer.reset("foo:");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(2);
    expect(tokens[0].type).to.equal("accent6");
    expect(tokens[0].value).to.equal("foo");
    expect(tokens[1].type).to.equal("accent3");
    expect(tokens[1].value).to.equal(":");
  });

  test("'foo':", () => {
    lexer.reset("'foo':");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(2);
    expect(tokens[0].type).to.equal("accent7");
    expect(tokens[0].value).to.equal("'foo'");
    expect(tokens[1].type).to.equal("accent3");
    expect(tokens[1].value).to.equal(":");
  });

  test("fo'o:", () => {
    lexer.reset("fo'o:");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(2);
    expect(tokens[0].type).to.equal("accent6");
    expect(tokens[0].value).to.equal("fo'o");
    expect(tokens[1].type).to.equal("accent3");
    expect(tokens[1].value).to.equal(":");
  });

  test("foo: bar", () => {
    lexer.reset("foo: bar");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(4);
    expect(tokens[0].type).to.equal("accent6");
    expect(tokens[0].value).to.equal("foo");
    expect(tokens[1].type).to.equal("accent3");
    expect(tokens[1].value).to.equal(":");
    expect(tokens[2].type).to.equal("WS");
    expect(tokens[2].value).to.equal(" ");
    expect(tokens[3].type).to.equal("other");
    expect(tokens[3].value).to.equal("bar");
  });

  test("foo: 'bar'", () => {
    lexer.reset("foo: 'bar'");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(4);
    expect(tokens[0].type).to.equal("accent6");
    expect(tokens[0].value).to.equal("foo");
    expect(tokens[1].type).to.equal("accent3");
    expect(tokens[1].value).to.equal(":");
    expect(tokens[2].type).to.equal("WS");
    expect(tokens[2].value).to.equal(" ");
    expect(tokens[3].type).to.equal("accent7");
    expect(tokens[3].value).to.equal("'bar'");
  });

  test("foo: bar:", () => {
    lexer.reset("foo: bar:");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(5);
    expect(tokens[0].type).to.equal("accent6");
    expect(tokens[0].value).to.equal("foo");
    expect(tokens[1].type).to.equal("accent3");
    expect(tokens[1].value).to.equal(":");
    expect(tokens[2].type).to.equal("WS");
    expect(tokens[2].value).to.equal(" ");
    expect(tokens[3].type).to.equal("accent6");
    expect(tokens[3].value).to.equal("bar");
    expect(tokens[4].type).to.equal("accent3");
    expect(tokens[4].value).to.equal(":");
  });

  test("foo: - bar", () => {
    lexer.reset("foo: - bar");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(6);
    expect(tokens[0].type).to.equal("accent6");
    expect(tokens[0].value).to.equal("foo");
    expect(tokens[1].type).to.equal("accent3");
    expect(tokens[1].value).to.equal(":");
    expect(tokens[2].type).to.equal("WS");
    expect(tokens[2].value).to.equal(" ");
    expect(tokens[3].type).to.equal("accent1");
    expect(tokens[3].value).to.equal("-");
    expect(tokens[4].type).to.equal("WS");
    expect(tokens[4].value).to.equal(" ");
    expect(tokens[5].type).to.equal("other");
    expect(tokens[5].value).to.equal("bar");
  });

  test("foo:\nbar:", () => {
    lexer.reset("foo:\nbar:");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(5);
    expect(tokens[0].type).to.equal("accent6");
    expect(tokens[0].value).to.equal("foo");
    expect(tokens[1].type).to.equal("accent3");
    expect(tokens[1].value).to.equal(":");
    expect(tokens[2].type).to.equal("WS");
    expect(tokens[2].value).to.equal("\n");
    expect(tokens[3].type).to.equal("accent6");
    expect(tokens[3].value).to.equal("bar");
    expect(tokens[4].type).to.equal("accent3");
    expect(tokens[4].value).to.equal(":");
  });

  test("foo: bar\nbaz:", () => {
    lexer.reset("foo: bar\nbaz:");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(7);
    expect(tokens[0].type).to.equal("accent6");
    expect(tokens[0].value).to.equal("foo");
    expect(tokens[1].type).to.equal("accent3");
    expect(tokens[1].value).to.equal(":");
    expect(tokens[2].type).to.equal("WS");
    expect(tokens[2].value).to.equal(" ");
    expect(tokens[3].type).to.equal("other");
    expect(tokens[3].value).to.equal("bar");
    expect(tokens[4].type).to.equal("WS");
    expect(tokens[4].value).to.equal("\n");
    expect(tokens[5].type).to.equal("accent6");
    expect(tokens[5].value).to.equal("baz");
    expect(tokens[6].type).to.equal("accent3");
    expect(tokens[6].value).to.equal(":");
  });

  test("foo: a b c\nbaz:", () => {
    lexer.reset("foo: a b c\nbaz:");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(7);
    expect(tokens[0].type).to.equal("accent6");
    expect(tokens[0].value).to.equal("foo");
    expect(tokens[1].type).to.equal("accent3");
    expect(tokens[1].value).to.equal(":");
    expect(tokens[2].type).to.equal("WS");
    expect(tokens[2].value).to.equal(" ");
    expect(tokens[3].type).to.equal("other");
    expect(tokens[3].value).to.equal("a b c");
    expect(tokens[4].type).to.equal("WS");
    expect(tokens[4].value).to.equal("\n");
    expect(tokens[5].type).to.equal("accent6");
    expect(tokens[5].value).to.equal("baz");
    expect(tokens[6].type).to.equal("accent3");
    expect(tokens[6].value).to.equal(":");
  });

  test("foo: bar\n  baz:", () => {
    lexer.reset("foo: bar\n  baz:");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(7);
    expect(tokens[0].type).to.equal("accent6");
    expect(tokens[0].value).to.equal("foo");
    expect(tokens[1].type).to.equal("accent3");
    expect(tokens[1].value).to.equal(":");
    expect(tokens[2].type).to.equal("WS");
    expect(tokens[2].value).to.equal(" ");
    expect(tokens[3].type).to.equal("other");
    expect(tokens[3].value).to.equal("bar");
    expect(tokens[4].type).to.equal("WS");
    expect(tokens[4].value).to.equal("\n  ");
    expect(tokens[5].type).to.equal("accent6");
    expect(tokens[5].value).to.equal("baz");
    expect(tokens[6].type).to.equal("accent3");
    expect(tokens[6].value).to.equal(":");
  });

  test("- foo", () => {
    lexer.reset("- foo");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(3);
    expect(tokens[0].type).to.equal("accent1");
    expect(tokens[0].value).to.equal("-");
    expect(tokens[1].type).to.equal("WS");
    expect(tokens[1].value).to.equal(" ");
    expect(tokens[2].type).to.equal("other");
    expect(tokens[2].value).to.equal("foo");
  });

  test("- foo - bar", () => {
    lexer.reset("- foo - bar");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(3);
    expect(tokens[0].type).to.equal("accent1");
    expect(tokens[0].value).to.equal("-");
    expect(tokens[1].type).to.equal("WS");
    expect(tokens[1].value).to.equal(" ");
    expect(tokens[2].type).to.equal("other");
    expect(tokens[2].value).to.equal("foo - bar");
  });

  test("- 'foo'", () => {
    lexer.reset("- 'foo'");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(3);
    expect(tokens[0].type).to.equal("accent1");
    expect(tokens[0].value).to.equal("-");
    expect(tokens[1].type).to.equal("WS");
    expect(tokens[1].value).to.equal(" ");
    expect(tokens[2].type).to.equal("accent7");
    expect(tokens[2].value).to.equal("'foo'");
  });

  test("- foo:", () => {
    lexer.reset("- foo:");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(4);
    expect(tokens[0].type).to.equal("accent1");
    expect(tokens[0].value).to.equal("-");
    expect(tokens[1].type).to.equal("WS");
    expect(tokens[1].value).to.equal(" ");
    expect(tokens[2].type).to.equal("accent6");
    expect(tokens[2].value).to.equal("foo");
    expect(tokens[3].type).to.equal("accent3");
    expect(tokens[3].value).to.equal(":");
  });

  test("[foo]", () => {
    lexer.reset("[foo]");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(3);
    expect(tokens[0].type).to.equal("accent3");
    expect(tokens[0].value).to.equal("[");
    expect(tokens[1].type).to.equal("other");
    expect(tokens[1].value).to.equal("foo");
    expect(tokens[2].type).to.equal("accent3");
    expect(tokens[2].value).to.equal("]");
  });

  test("[foo, 42, 'bar']", () => {
    lexer.reset("[foo, 42, 'bar']");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(9);
    expect(tokens[0].type).to.equal("accent3");
    expect(tokens[0].value).to.equal("[");
    expect(tokens[1].type).to.equal("other");
    expect(tokens[1].value).to.equal("foo");
    expect(tokens[2].type).to.equal("comma");
    expect(tokens[2].value).to.equal(",");
    expect(tokens[3].type).to.equal("WS");
    expect(tokens[3].value).to.equal(" ");
    expect(tokens[4].type).to.equal("accent7");
    expect(tokens[4].value).to.equal("42");
    expect(tokens[5].type).to.equal("comma");
    expect(tokens[5].value).to.equal(",");
    expect(tokens[6].type).to.equal("WS");
    expect(tokens[6].value).to.equal(" ");
    expect(tokens[7].type).to.equal("accent7");
    expect(tokens[7].value).to.equal("'bar'");
    expect(tokens[8].type).to.equal("accent3");
    expect(tokens[8].value).to.equal("]");
  });

  test("[foo: 42, 'bar': baz:]", () => {
    lexer.reset("[foo: 42, 'bar': baz:]");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(12);
    expect(tokens[0].type).to.equal("accent3");
    expect(tokens[0].value).to.equal("[");
    expect(tokens[1].type).to.equal("accent6");
    expect(tokens[1].value).to.equal("foo");
    expect(tokens[2].type).to.equal("accent3");
    expect(tokens[2].value).to.equal(":");
    expect(tokens[3].type).to.equal("WS");
    expect(tokens[3].value).to.equal(" ");
    expect(tokens[4].type).to.equal("accent7");
    expect(tokens[4].value).to.equal("42");
    expect(tokens[5].type).to.equal("comma");
    expect(tokens[5].value).to.equal(",");
    expect(tokens[6].type).to.equal("WS");
    expect(tokens[6].value).to.equal(" ");
    expect(tokens[7].type).to.equal("accent7");
    expect(tokens[7].value).to.equal("'bar'");
    expect(tokens[8].type).to.equal("accent3");
    expect(tokens[8].value).to.equal(":");
    expect(tokens[9].type).to.equal("WS");
    expect(tokens[9].value).to.equal(" ");
    expect(tokens[10].type).to.equal("other");
    expect(tokens[10].value).to.equal("baz:");
    expect(tokens[11].type).to.equal("accent3");
    expect(tokens[11].value).to.equal("]");
  });

  test("#foo", () => {
    lexer.reset("#foo");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(1);
    expect(tokens[0].type).to.equal("comment");
    expect(tokens[0].value).to.equal("#foo");
  });

  test("foo #foo", () => {
    lexer.reset("foo #foo");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(3);
    expect(tokens[0].type).to.equal("other");
    expect(tokens[0].value).to.equal("foo");
    expect(tokens[1].type).to.equal("WS");
    expect(tokens[1].value).to.equal(" ");
    expect(tokens[2].type).to.equal("comment");
    expect(tokens[2].value).to.equal("#foo");
  });

  test("foo: bar #baz", () => {
    lexer.reset("foo: bar #baz");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(6);
    expect(tokens[0].type).to.equal("accent6");
    expect(tokens[0].value).to.equal("foo");
    expect(tokens[1].type).to.equal("accent3");
    expect(tokens[1].value).to.equal(":");
    expect(tokens[2].type).to.equal("WS");
    expect(tokens[2].value).to.equal(" ");
    expect(tokens[3].type).to.equal("other");
    expect(tokens[3].value).to.equal("bar");
    expect(tokens[4].type).to.equal("WS");
    expect(tokens[4].value).to.equal(" ");
    expect(tokens[5].type).to.equal("comment");
    expect(tokens[5].value).to.equal("#baz");
  });

  test("[foo #bar]", () => {
    lexer.reset("[foo #bar]");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(4);
    expect(tokens[0].type).to.equal("accent3");
    expect(tokens[0].value).to.equal("[");
    expect(tokens[1].type).to.equal("other");
    expect(tokens[1].value).to.equal("foo");
    expect(tokens[2].type).to.equal("WS");
    expect(tokens[2].value).to.equal(" ");
    expect(tokens[3].type).to.equal("comment");
    expect(tokens[3].value).to.equal("#bar]");
  });

  test("{foo:", () => {
    lexer.reset("{foo:");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(3);
    expect(tokens[0].type).to.equal("accent3");
    expect(tokens[0].value).to.equal("{");
    expect(tokens[1].type).to.equal("accent6");
    expect(tokens[1].value).to.equal("foo");
    expect(tokens[2].type).to.equal("accent3");
    expect(tokens[2].value).to.equal(":");
  });

  test("{foo: bar\nbaz: 42", () => {
    lexer.reset("{foo: bar\nbaz: 42");
    const tokens = Array.from(lexer);

    expect(tokens.length).to.equal(10);
    expect(tokens[0].type).to.equal("accent3");
    expect(tokens[0].value).to.equal("{");
    expect(tokens[1].type).to.equal("accent6");
    expect(tokens[1].value).to.equal("foo");
    expect(tokens[2].type).to.equal("accent3");
    expect(tokens[2].value).to.equal(":");
    expect(tokens[3].type).to.equal("WS");
    expect(tokens[3].value).to.equal(" ");
    expect(tokens[4].type).to.equal("other");
    expect(tokens[4].value).to.equal("bar");
    expect(tokens[5].type).to.equal("WS");
    expect(tokens[5].value).to.equal("\n");
    expect(tokens[6].type).to.equal("accent6");
    expect(tokens[6].value).to.equal("baz");
    expect(tokens[7].type).to.equal("accent3");
    expect(tokens[7].value).to.equal(":");
    expect(tokens[8].type).to.equal("WS");
    expect(tokens[8].value).to.equal(" ");
    expect(tokens[9].type).to.equal("accent7");
    expect(tokens[9].value).to.equal("42");
  });
});
