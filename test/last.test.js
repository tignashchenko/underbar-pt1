const _ = require('../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    expect(_.last(['a', 'b', 'c'])).toEqual('c');
  });

  it('returns the last 2 elements of an array', () => {
    expect(_.last(['a', 'b', 'c'], 2)).toEqual(['b', 'c']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns the last element of an array with different element types', () => {
    expect(_.last([{a:1}, true, 100, null])).toEqual(null);
  });

  it('returns the last 3 elements of an array with different element types', () => {
    expect(_.last([{a:1}, true, 100, null], 3)).toEqual([true, 100, null]);
  });
});
