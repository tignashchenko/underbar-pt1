const _ = require('../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  it('count occurences of number to an object', () => {
    const numObj = [1, 3, 5, 2, 1, 5, 7, 7, 3];
    const result = _.reduce(numObj, function(acc, curr) {
      if(curr in acc) {
        ++acc[curr];
      } else {
        acc[curr] = 1;
      }
    return acc;
  }, {});
  expect(result).toEqual({'1': 2, '2': 1, '3': 2, '5': 2, '7':2});
});
});
