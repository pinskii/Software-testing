import castArray from '../files/castArray.js';

describe('castArray function', () => {
  test('casts a non-array value to an array', () => {
    expect(castArray(1)).toEqual([1]);
    expect(castArray({ 'a': 1 })).toEqual([{ 'a': 1 }]);
    expect(castArray('abc')).toEqual(['abc']);
    expect(castArray(null)).toEqual([null]);
    expect(castArray(undefined)).toEqual([undefined]);
    expect(castArray()).toEqual([]);
    expect(castArray(true)).toEqual([true]);
  });

  test('does not modify an existing array', () => {
    const array = [1, 2, 3];
    expect(castArray(array)).toBe(array);
  });
});
