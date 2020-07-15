import PlayerGenerator from '../src/player-utils';
import Game from '../src/game-utils';
import GameDom from '../src/dom-utils';

const dommer = GameDom;
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

test('Check for winning false combination #1', () => {
  const player = PlayerGenerator('', '', '', [0, 4, 6]);
  expect(game.checkWinner(player.playArr)).toBe(false);
});

test('Check for winning false combination #2', () => {
  const player = PlayerGenerator('', '', '', [2, 5, 7]);
  expect(game.checkWinner(player.playArr)).toBe(false);
});

test('Check for winning false combination #3', () => {
  const player = PlayerGenerator('', '', '', [8, 4, 2]);
  expect(game.checkWinner(player.playArr)).toBe(false);
});

test('Check for winning false combination #4', () => {
  const player = PlayerGenerator('', '', '', [5, 4, 0]);
  expect(game.checkWinner(player.playArr)).toBe(false);
});

test('Check for winning false combination #5', () => {
  const player = PlayerGenerator('', '', '', [5, 1, 3]);
  expect(game.checkWinner(player.playArr)).toBe(false);
});

test('Check for winning false combination #6', () => {
  const player = PlayerGenerator('', '', '', [3, 1, 5]);
  expect(game.checkWinner(player.playArr)).toBe(false);
});

document.body.innerHTML += '<div class="cell" class="x" data-cell></div><div class="cell" class="circle" data-cell></div><div class="cell" class="x" data-cell></div><div class="cell" class="circle" data-cell></div><div class="cell" class="x" data-cell></div><div class="cell" class="circle" data-cell></div><div class="cell" class="circle" data-cell></div><div class="cell" class="x" data-cell></div><div class="cell" class="circle" data-cell></div>';

test('Check for draw true combination #1', () => {
  const currentCombinations = dommer.cellElements;
  expect(game.isDraw(currentCombinations)).toBe(true);
  currentCombinations.forEach(comb => {
    comb.remove();
  });
});

document.body.innerHTML += '<div class="cell" class="x" data-cell></div><div class="cell" class="circle" data-cell></div><div class="cell" class="x" data-cell></div><div class="cell" class="circle" data-cell></div><div class="cell" class="x" data-cell></div><div class="cell" class="circle" data-cell></div><div class="cell" class="circle" data-cell></div><div class="cell" class="x" data-cell></div><div class="cell" class="circle" data-cell></div>';

test('Check for draw true combination #2', () => {
  const currentCombinations = dommer.cellElements;
  expect(game.isDraw(currentCombinations)).toBe(true);
  currentCombinations.forEach(comb => {
    comb.remove();
  });
});

document.body.innerHTML += '<div class="cell" data-cell></div><div class="cell" data-cell></div><div class="cell" data-cell></div><div class="cell" data-cell></div><div class="cell" data-cell></div><div class="cell" data-cell></div><div class="cell" data-cell></div><div class="cell" data-cell></div><div class="cell" data-cell></div>';

test('Check for draw false combination #1', () => {
  const currentCombinations = document.querySelectorAll('[data-cell]');
  expect(game.isDraw(currentCombinations)).toBe(false);
  currentCombinations.forEach(comb => {
    comb.remove();
  });
});

document.body.innerHTML += '<div class="board" id="board"></div>';
test('Check setBoardHoverClass() true set x player', () => {
  const currBoard = document.getElementById('board');
  game.setBoardHoverClass(true, currBoard);
  expect(currBoard.classList.contains('x')).toBe(true);
});
test('Check setBoardHoverClass() incorrect set x player', () => {
  const currBoard = document.getElementById('board');
  game.setBoardHoverClass(true, currBoard);
  expect(currBoard.classList.contains('circle')).toBe(false);
});
test('Check setBoardHoverClass() true set circle player', () => {
  const currBoard = document.getElementById('board');
  game.setBoardHoverClass(false, currBoard);
  expect(currBoard.classList.contains('circle')).toBe(true);
});
test('Check setBoardHoverClass() incorrect set circle player', () => {
  const currBoard = document.getElementById('board');
  game.setBoardHoverClass(false, currBoard);
  expect(currBoard.classList.contains('x')).toBe(false);
  currBoard.remove();
});