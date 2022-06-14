const palindromes = require('./palindromes')

describe('palindromes', () => {
  test('works with single words', () => {
    expect(palindromes('racecar')).toBe(true);
  });
  test('works with punctuation ', () => {
    expect(palindromes('racecar!')).toBe(true);
  });
  test('works with upper-case letters ', () => {
    expect(palindromes('Racecar!')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes('A car, a man, a maraca.')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes('Animal loots foliated detail of stool lamina.')).toBe(true);
  });
  test('doesn\'t just always return true', () => {
    expect(palindromes('ZZZZ car, a man, a maracaz.')).toBe(false);
  });
  test('uses familiar palindromes', () => {
    expect(palindromes('A man, a plan, a canal, Panama.')).toBe(true);
  });
  test('Bstar Strummer!!', () => {
    expect(palindromes('Go hang a Salami, Ima lasagna hog!')).toBe(true);
  });
});
