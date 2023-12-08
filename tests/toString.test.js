import toString from '../files/toString.js';

describe('toString function', () => {
  test('converts various values to strings', () => {
    expect(toString(null)).toBe("null");
    expect(toString(-0)).toBe('-0');
    expect(toString([1, 2, 3])).toBe('1,2,3');
    expect(toString({ key: 'value' })).toBe('[object Object]');
  });
});
