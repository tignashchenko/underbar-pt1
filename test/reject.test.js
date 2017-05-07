const _ = require('../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const orderItems = _.reject(order, (value) => value === null);
    expect(orderItems).toEqual(['burger', 'ketchup', 'cookie']);
  });

  it('rejects undefined values from an array', () => {
    const randomArray = [null, undefined, 'Taras', 26, 'California', undefined];
    expect(_.reject(randomArray, element => element === undefined)).toEqual([null, 'Taras', 26, 'California']);
  });

  it('rejects X values from a tic-tac-toe object', () => {
    const tictactoeObj = {
      winner1: 'X',
      winner2: 'X',
      winner3: 'O',
      winner4: 'X',
      winner5: 'O',
      winner6: 'O'
    };
    expect(_.reject(tictactoeObj, game => game === 'X')).toEqual(['O', 'O', 'O']);
  });
});
