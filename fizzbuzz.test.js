let sum = require('./fizzbuzz.js');

describe('FizzBuzz tests', () => {
  //if the number is divisible by 3, return "Fizz"
  test(`Divisible by 3 gives 'Fizz'`, () => {
    expect(sum(3)).toBe('Fizz');
    expect(sum('3')).toBe('Fizz');
    expect(sum(9)).toBe('Fizz');
    expect(sum(18)).toBe('Fizz');
  });
  //if the number is divisible by 5, return "Buzz"
  test(`Divisible by 5 gives 'Buzz'`, () => {
    expect(sum(5)).toBe('Buzz');
    expect(sum('5')).toBe('Buzz');
    expect(sum(25)).toBe('Buzz');
    expect(sum(100)).toBe('Buzz');
  });
  //if the number is divisible by both 3 and 5, return "FizzBuzz"
  test(`Divisible by 5 & 3 gives 'FizzBuzz'`, () => {
    expect(sum(15)).toBe('FizzBuzz');
    expect(sum('15')).toBe('FizzBuzz');
    expect(sum(45)).toBe('FizzBuzz');
    expect(sum(180)).toBe('FizzBuzz');
  });
  //otherwise, just return the number that was passed into the function
  test(`Divisible by neither 5 & 3 gives orig number`, () => {
    expect(sum(11)).toBe(11);
    expect(sum('11')).toBe('11');
    expect(sum(19)).toBe(19);
    expect(sum(11)).toBe(11);
    expect(sum('ab')).toBe('ab');
  });
});
