import upperFirst from '../files/upperFirst.js';

describe('upperFirst function', () => {
  test('converts the first character of a string to upper case', () => {
    expect(upperFirst('fred')).toBe('Fred');
    expect(upperFirst('FRED')).toBe('FRED');
    expect(upperFirst('123abc')).toBe('123abc');
    expect(upperFirst('')).toBe('');
  });
});
