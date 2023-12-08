import filter from '../files/filter.js';

describe('filter function', () => {
  test('filters array based on the provided predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false },
      { 'user': 'alice', 'active': true },
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).toEqual([
      { 'user': 'barney', 'active': true },
      { 'user': 'alice', 'active': true },
    ]);
  });

  test('returns an empty array if the input array is empty', () => {
    const result = filter([], () => true);
    
    expect(result[0]).toHaveLength(0);
  });

  test('returns an empty array if the predicate never evaluates to true', () => {
    const users = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false },
    ];

    const result = filter(users, ({ active }) => active);

    expect(result[0]).toHaveLength(0);
  });
});