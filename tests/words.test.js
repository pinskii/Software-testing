import words from '../files/words.js';

describe('words function', () => {
  test('splits string into an array of words', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
    expect(words('fred barney & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });
});
