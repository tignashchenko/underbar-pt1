_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every word in an array of strings with an exclamation mark', () => {
    const arr = ['Taras', 'Tim', 'Kay'];
    const mappedArr = _.map(arr, (el) => el + '!');
    expect(mappedArr).toEqual(['Taras!', 'Tim!', 'Kay!']);
  });

  it('return all array elements intact if no callback is passed', () => {
    const arr = ['Taras', 'Tim', 'Kay'];
    const mappedArr = _.map(arr);
    expect(mappedArr).toEqual(arr);
  });

  it('map string element to its reverse', () => {
    const arr = ['San Francisco'];
    const mappedArr = _.map(arr, (el) => el.split('').reverse().join(''));
    expect(mappedArr).toEqual(['ocsicnarF naS']);
  });
});
