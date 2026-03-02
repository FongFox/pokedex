import { describe, expect, test } from "vitest";
import { cleanInput } from "./repl.js";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },    
  {
    input: "Charmander Bulbasaur PIKACHU",
    expected: ["charmander", "bulbasaur", "pikachu"],
  },
  {
    input: "  SingleWord  ",
    expected: ["singleword"],
  },
  {
    input: "", // Trường hợp chuỗi rỗng
    expected: [],
  },
  {
    input: "     ", // Chỉ có khoảng trắng
    expected: [],
  }
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input);
    console.log(`Input: "${input}" -> Actual:`, actual);
    // The `expect` and `toHaveLength` functions are from vitest
    // they will fail the test if the condition is not met
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      // likewise, the `toBe` function will fail the test if the values are not equal
      expect(actual[i]).toBe(expected[i]);
    }
  });
});