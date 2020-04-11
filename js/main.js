import GameDom from './dom-utils.js';
const domItem = GameDom();

window.onload = function ready() {
  domItem.hideBoard();
  domItem.hideCurrentPlayerBox();
  domItem.increasePlayersBoxSize();
  domItem.playerForm.reset();
  domItem.select.forEach(item => {
    domItem.playersName(item);
  });
};
