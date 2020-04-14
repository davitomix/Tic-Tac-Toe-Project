/* eslint-disable */
import GameDom from './dom-utils.js';
import Game from './game-utils.js';
/* eslint-enable */

const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';

const domItem = GameDom;

window.onload = function ready() {
  domItem.hideBoard();
  domItem.hideCurrentPlayerBox();
  domItem.increasePlayersBoxSize();
  domItem.playerForm.reset();
  domItem.select.forEach((item) => {
    domItem.playersName(item);
  });
};

const startGame = ((playerX, playerO) => {
  const game = Game;
  let turn = true;
  const handleClick = (e) => {
    const cell = e.target;
    const currentClass = turn ? X_CLASS : CIRCLE_CLASS;
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    game.placeMark(cell, currentClass);
    // -----------
    if (game.checkWin(currentClass, domItem.cellElements)) {
      /* eslint-disable */
      game.endGame(false, turn, domItem.winningMsgTxtElement, domItem.winningMsgElement, playerX, playerO);
    } else if (game.isDraw(domItem.cellElements)) {
      game.endGame(true, turn, domItem.winningMsgTxtElement, domItem.winningMsgElement, playerX, playerO);
      /* eslint-enable */
    } else {
      turn = !turn;
      if (turn) {
        domItem.showCurrentPlayer(playerX);
      } else {
        domItem.showCurrentPlayer(playerO);
      }
      game.setBoardHoverClass(turn, domItem.board);
    }
    // ----------
  };

  domItem.decreasePlayersBoxUnsize();
  domItem.removePlayerForm();
  domItem.showBoard();
  domItem.currentPlayerBoxUnhide();
  domItem.showCurrentPlayer(playerX);
  game.setBoardHoverClass(turn, domItem.board);
  domItem.resetBtn.addEventListener('click', () => {
    startGame(playerX, playerO);
  }, false);
  domItem.cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
  domItem.winningMsgElement.classList.remove('show');
});

domItem.startBtn.onclick = function initGame() {
  const { playerX } = domItem.getPlayers();
  const { playerO } = domItem.getPlayers();
  startGame(playerX, playerO);
};
