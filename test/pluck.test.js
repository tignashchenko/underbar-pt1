const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of just occupations, given an array of people objects', () => {
    const people = [
      { name: 'Taras', occupation: 'HR student'},
      { name: 'Bogdan', occupation: 'Private equity principal'},
      { name: 'Olga', occupation: 'Philosophy professor'}
    ];
    const result = _.pluck(people, 'occupation');
    expect(result).toEqual(['HR student', 'Private equity principal', 'Philosophy professor']);
  });

  it('returns an array of just employment statuses, given an array of people objects', () => {
    const people = [
      { name: 'Taras', employed: false},
      { name: 'Bogdan', employed: true},
      { name: 'Olga', employed: true}
    ];
    const result = _.pluck(people, 'employed');
    expect(result).toEqual([false, true, true]);
  });   
});
