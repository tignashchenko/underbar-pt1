const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if at least one of the elements is of type boolean', () => {
    const randomArray = [30, null, false, 'Hack Reactor', 'San Francisco', true];
    expect(_.some(randomArray, element => typeof(element) === 'boolean')).toBe(true);
  });

  it('returns false if all string have a length of greater than 5', () => {
    const stringArray = ['TarasI', 'California', 'Ukraine', 'Hack Reactor'];
    expect(_.some(stringArray, str => str.length <= 5)).toBe(false);
  });
});
