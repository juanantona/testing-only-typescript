import { average, sum } from "./stats";
import { expect } from "./testLib";

let result, expected;
result = sum([1, 2, 3]);
expected = 6;
expect(result).toBe(expected);

result = average([1, 2, 3]);
expected = 2;
expect(result).toBe(expected);
