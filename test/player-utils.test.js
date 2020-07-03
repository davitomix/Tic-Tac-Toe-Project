import PlayerGenerator from '../src/player-utils';

test('Player generator function should return an object', () => {
  const p1 = PlayerGenerator('', '', 0, []);
  expect(p1).toBeInstanceOf(Object);
});

test('Player object can successfully return the player name', () => {
  const p1 = PlayerGenerator('Name', '', 0, []);
  expect(p1.name).toBe('Name');
});

test('Player object can successfully return the player mark', () => {
  const p1 = PlayerGenerator('Name', 'X', 0, []);
  expect(p1.mark).toBe('X');
});