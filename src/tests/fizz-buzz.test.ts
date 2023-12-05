import { fizzBuzz } from '../fizz-buzz';

describe('fizzBuzz', () => {
  it('Returns number one as a string for number 1', () => {
    const result = fizzBuzz(1);
    expect(result).toBe('1');
  });

  it('Returns "fizz" for number 3.', () => {
    const result = fizzBuzz(3);
    expect(result).toBe('fizz');
  });

  it('Returns "buzz" for number 5.', () => {
    const result = fizzBuzz(5);
    expect(result).toBe('buzz');
  });

  it('Returns "fizzbuzz" for number 15.', () => {
    const result = fizzBuzz(15);
    expect(result).toBe('fizzbuzz');
  });

  it('Returns "fizz" for any number divisible by 3.', () => {
    const result = fizzBuzz(21);
    expect(result).toBe('fizz');
  });

  it('Returns "buzz" for any number divisible by 5.', () => {
    const result = fizzBuzz(25);
    expect(result).toBe('buzz');
  });

  it('Returns "fizzbuzz" for any number divisible by 15.".', () => {
    const result = fizzBuzz(45);
    expect(result).toBe('fizzbuzz');
  });

  it('Returns number as a string for any number that is not divisible by 3 or 5', () => {
    const result = fizzBuzz(7);
    expect(result).toBe('7');
  });
});
