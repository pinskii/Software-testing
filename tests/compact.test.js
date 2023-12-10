import compact from '../files/compact.js';

describe('compact function', () => {
  test('removes all falsy values from the array', () => {
    const input = [0, 1, false, 2, '', 3];
    const result = compact(input);
    
    expect(result).toEqual(['1', 2, 3]);

    // This function returns some weird output which makes it as not functioning properly
    // The output we get is [ 2, 3, '-1': 1 ] which is not what we expect.
  });

  test('returns an empty array if all values are falsy', () => {
    const input = [null, NaN, undefined];
    const result = compact(input);

    expect(result).toEqual([]);
  });

  test('returns the original array if all values are truthy', () => {
    const input = [1, 'abc', true];
    const result = compact(input);
    
    expect(result).toEqual([1, 'abc', true]);
    // This function returns some weird output which makes it as not functioning properly
  });
});
