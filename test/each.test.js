const _ = require('../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arr = ['a', 'b', 'c'];
    let count = 0;
    _.each(arr, function(element, index, array) {
      expect(element).toEqual(array[index]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrayLikeObj = {
      length: 3,
      1: 'a',
      2: 'b',
      3: 'c'
    };
    let count = 0;
    _.each(arrayLikeObj, function(element, index, iteratedArrayLikeObj) {
      expect(element).toEqual(iteratedArrayLikeObj[index]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
      name: 'Calvin',
      age: 6,
      occupation: 'student'
    };
    let count = 0;
    _.each(obj, function(value, key, iteratedObj) {
      expect(value).toEqual(iteratedObj[key]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates over every element of an array and passes its contents to a newly created array', () => {
    const arr = ['Taras', 100, null, {a: true}];
    const newArr = [];

    _.each(arr, function(element, index, array) {
      newArr[index] = array[index];
    });
    expect(arr).toEqual(newArr);
  });

  it('iterates over every element\'s index and passes these indices into a newly created array', () => {
    const indexArr = [0, 1, 2, 3, 4, 5];
    const newIndexArr = [];

    _.each(indexArr, function(element, index, array) {
      newIndexArr[index] = index;
    });
    expect(indexArr).toEqual(newIndexArr);
  });
});
