const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups a list of booleans', () => {
    const bools = [true, false, true, true, false, false, true];
    expect(_.uniq(bools)).toEqual([true, false]);
  });

  it('de-dups an object of keys', () => {
    const tarasObj = {
      name: 'Some unknown nickname',
      name: 'Taras',
      age: 'much less than 26',
      age: 26
    };
    expect(_.uniq(tarasObj)).toEqual(['Taras', 26]);
  });
});
