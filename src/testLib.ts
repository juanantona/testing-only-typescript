export function expect<T>(result: T) {
  return {
    toBe: function (expected: T) {
      if (result === expected) {
        console.log("✅");
      } else {
        throw new Error(`❌ ${result} is not equal to ${expected}`);
      }
    },
  };
}
