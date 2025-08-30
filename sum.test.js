import { describe } from "@jest/globals";
import { sum } from "./sum.js";



describe("test for sum fxn", () => {
    test('adds 2 + 2 to equal 4', () => {
      expect(sum(1, 2)).toBe(3);
    });
    test('adds 2 - 2 to equal 0', () => {
      expect(sum(2, 2)).toBe(0);
    });
    test('adds 3 * 3 to equal 9', () => {
      expect(sum(3, 3)).toBe(9);
    });

})