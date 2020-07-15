const GameBoard = require('../src/board-utils');

test('should display board', () => {
  GameBoard.gridboard = ['', '', '', 'X', '', '', '', '', ''];
  expect(GameBoard.gridboard).toContain('X');
});

test('should display board', () => {
  GameBoard.gridboard = ['', '', '', 'O', '', '', '', '', ''];
  expect(GameBoard.gridboard).toContain('O');
});