import every from '../files/Every';

describe('every function', () => {
  test('returns true if all elements pass the predicate check', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toBe(false);
    expect(every([true, true, true], Boolean)).toBe(true);
    expect(every([], Boolean)).toBe(true);
  });
});
