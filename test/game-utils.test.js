import PlayerGenerator from '../src/player-utils';
import Game from '../src/game-utils';

const game = Game;

test('Check for winning combination #1', () => {
  const player = PlayerGenerator('', '', '', [0, 1, 2]);
  expect(game.checkWinner(player.playArr)).toBe(true);
});

test('Check for winning combination #2', () => {
  const player = PlayerGenerator('', '', '', [3, 4, 5]);
  expect(game.checkWinner(player.playArr)).toBe(true);
});

test('Check for winning combination #3', () => {
  const player = PlayerGenerator('', '', '', [6, 7, 8]);
  expect(game.checkWinner(player.playArr)).toBe(true);
});

test('Check for winning combination #4', () => {
  const player = PlayerGenerator('', '', '', [0, 4, 8]);
  expect(game.checkWinner(player.playArr)).toBe(true);
});

test('Check for winning combination #5', () => {
  const player = PlayerGenerator('', '', '', [2, 4, 6]);
  expect(game.checkWinner(player.playArr)).toBe(true);
});

test('Check for winning combination #6', () => {
  const player = PlayerGenerator('', '', '', [0, 3, 6]);
  expect(game.checkWinner(player.playArr)).toBe(true);
});

test('Check for winning combination #7', () => {
  const player = PlayerGenerator('', '', '', [1, 4, 7]);
  expect(game.checkWinner(player.playArr)).toBe(true);
});

test('Check for winning combination #8', () => {
  const player = PlayerGenerator('', '', '', [2, 5, 8]);
  expect(game.checkWinner(player.playArr)).toBe(true);
});