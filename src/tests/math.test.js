// sum.test.js
import {describe, expect, test } from "vitest";

import { sum } from "./math";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("should work as expected", () => {
  expect(Math.sqrt(4)).toBe(2);
});

function numberToCurrency(value) {
  if (typeof value !== "number") throw new Error("Value must be a number");

  return value
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

describe("numberToCurrency", () => {
  describe("given an invalid number", () => {
    test("composed of non-numbers to throw error", () => {
      expect(() => numberToCurrency("abc")).toThrowError();
    });
  });

  describe("given a valid number", () => {
    test("returns the correct currency format", () => {
      expect(numberToCurrency(10000)).toBe("10,000.00");
    });
  });
});