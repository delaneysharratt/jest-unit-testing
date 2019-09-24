let fizzBuzz = require('./fizzbuzz.js');

describe('FizzBuzz tests', () => {
  //if the number is divisible by 3, return "Fizz"
  test(`Divisible by 3 gives 'Fizz'`, () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz('3')).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
    expect(fizzBuzz(18)).toBe('Fizz');
  });
  //if the number is divisible by 5, return "Buzz"
  test(`Divisible by 5 gives 'Buzz'`, () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz('5')).toBe('Buzz');
    expect(fizzBuzz(25)).toBe('Buzz');
    expect(fizzBuzz(100)).toBe('Buzz');
  });
  //if the number is divisible by both 3 and 5, return "FizzBuzz"
  test(`Divisible by 5 & 3 gives 'FizzBuzz'`, () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz('15')).toBe('FizzBuzz');
    expect(fizzBuzz(45)).toBe('FizzBuzz');
    expect(fizzBuzz(180)).toBe('FizzBuzz');
  });
  //otherwise, just return the number that was passed into the function
  test(`Divisible by neither 5 & 3 gives orig number`, () => {
    expect(fizzBuzz(11)).toBe(11);
    expect(fizzBuzz('11')).toBe('11');
    expect(fizzBuzz(19)).toBe(19);
    expect(fizzBuzz(11)).toBe(11);
    expect(fizzBuzz('ab')).toBe('ab');
  });
});
