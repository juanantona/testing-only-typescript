export function expect<T>(result: T) {
  return {
    toBe: function (expected: T) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
  };
}

export async function test(description: string, callback: () => void) {
  try {
    await callback();
    console.log(`✅  ${description}`);
  } catch (error) {
    console.log(`❌  ${description}`);
    console.log(error.message);
  }
}
