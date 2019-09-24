let leap = require('./leap-year.js');

describe('Leap year tests', () => {
  //test determining whether or not a year is a leap year
  test('Years divisible by 4 are leap years', () => {
    expect(leap(1776)).toBe(true);
    expect(leap(2020)).toBe(true);
  });
  test('Years divisible by 100 are NOT leap years', () => {
    expect(leap(1800)).toBe(false);
    expect(leap(1900)).toBe(false);
  });
  test('Years divisible by 400 are leap years', () => {
    expect(leap(1600)).toBe(true);
    expect(leap(2000)).toBe(true);
  });
});
