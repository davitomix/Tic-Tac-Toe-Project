const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const Game = (() => {
  const setBoardHoverClass = (turn, board) => {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (turn) {
      board.classList.add(X_CLASS);
    } else {
      board.classList.add(CIRCLE_CLASS);
    }
  };
  const placeMark = (cell, currentClass) => {
    cell.classList.add(currentClass);
  };
  /* eslint-disable */
  const checkWin = (currentClass, cellElements) => WINNING_COMBINATIONS.some((combination) => combination.every((index) => cellElements[index].classList.contains(currentClass)));
  /* eslint-enable */
  const endGame = (draw, turn, txtElement, element, playerX, playerO) => {
    const textElement = txtElement;
    if (draw) {
      textElement.innerText = 'Draw!';
    } else {
      textElement.innerText = `${turn ? playerX : playerO} Wins!`;
    }
    element.classList.add('show');
  };
  /* eslint-disable */
  const isDraw = (cellElements) => [...cellElements].every((cell) => cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS));
  /* eslint-enable */
  return {
    setBoardHoverClass,
    placeMark,
    checkWin,
    endGame,
    isDraw,
  };
})();
export default Game;