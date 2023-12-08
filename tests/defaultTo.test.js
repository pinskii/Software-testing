import defaultTo from '../files/defaultTo.js';

describe('defaultTo function', () => {
  test('returns default value if input is null or undefined', () => {
    expect(defaultTo(null, 10)).toBe(10);
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  test('does not return default value if input is not null or undefined', () => {
    expect(defaultTo(0, 10)).toBe(0);
    expect(defaultTo('abc', 10)).toBe('abc');
    expect(defaultTo(false, 10)).toBe(false);
  });

  test('returns the input value if it is NaN', () => {
    expect(defaultTo(NaN, 10)).toBe(NaN);
  });
});
