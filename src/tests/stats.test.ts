import { average, sum } from "../stats";


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

