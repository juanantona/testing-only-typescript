import { average, sum } from "./stats";
import { describe, expect, it } from "./testLib";
import * as asyncStats from "./asyncStats";

describe("Sync tests", () => {
  it("The sum of the numbers of the array", function () {
    const result = sum([1, 2, 3]);
    const expected = 6;
    expect(result).toBe(expected);
  });

  it("The average of the numbers of the array", function () {
    const result = average([1, 2, 3]);
    const expected = 2;
    expect(result).toBe(expected);
  });
});

describe("Async tests", async () => {
  it("The async sum of the numbers of the array", async function () {
    const result = await asyncStats.sum([1, 2, 3]);
    const expected = 5;
    expect(result).toBe(expected);
  });

  it("The async average of the numbers of the array", async function () {
    const result = await asyncStats.average([1, 2, 3]);
    const expected = 2;
    expect(result).toBe(expected);
  });
});
