import * as asyncStats from "../asyncStats";

describe("Async tests", () => {
  it("The async sum of the numbers of the array", async function () {
    const result = await asyncStats.sum([1, 2, 3]);
    const expected = 6;
    expect(result).toBe(expected);
  });

  it("The async average of the numbers of the array", async function () {
    const result = await asyncStats.average([1, 2, 3]);
    const expected = 2;
    expect(result).toBe(expected);
  });
});
