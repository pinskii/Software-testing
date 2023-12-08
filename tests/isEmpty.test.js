import isEmpty from '../files/isEmpty.js';

describe('isEmpty function', () => {
  test('returns true for empty values and false otherwise', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty({ 'a': 1 })).toBe(false);
  });
});
