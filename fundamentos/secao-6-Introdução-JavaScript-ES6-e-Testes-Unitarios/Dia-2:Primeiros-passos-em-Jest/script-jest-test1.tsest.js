const sum = require('./script-jester-test1');

test('verifica se 2 + 3 resulta em 5', () => {
  expect(sum(2, 3)).toEqual(5);
})