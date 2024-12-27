import { sum } from "../src/00-hello-sum";

describe("sum function", () => {
  test("should return 3 with 2 + 1", () => {
    const result = sum(2, 1);
    expect(result).toBe(3);
  });
  test("should support negative numbers", () => {
    expect(sum(-1, 2)).toBe(1);
    expect(sum(2, -1)).toBe(1);
    expect(sum(-1, -1)).toBe(-2);
  });
});
