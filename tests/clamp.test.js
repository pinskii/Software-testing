import clamp from '../files/clamp.js';

describe('clamp function', () => {
  test('clamps negative number within the specified bounds', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  test('clamps positive number within the specified bounds', () => {
    expect(clamp(10, -5, 5)).toBe(5);
    // As given in the file example the second test should work but it doesn't, 
    // which means there is a bug in the clamp.js file as it returns -5 instead of 5.
  });
});
