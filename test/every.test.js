const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });

    it('returns true if length of all strings is equal to 4', () => {
      const randomFourLetterWords = ['Hack', 'push', 'pull', 'Back'];
      expect(_.every(randomFourLetterWords, word => word.length === 4)).toBe(true);
    });

    it('returns false if not all array elements are of type number', () => {
      const randomArray = ['Hi', true, false, undefined, 25, true];
      expect(_.every(randomArray, element => typeof(element) === 'number')).toBe(false);
    });

  });
});
