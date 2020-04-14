import GameDom from './dom-utils.js';
const domItem = GameDom;
const startBtn = document.getElementById('submit'); 

window.onload = function ready() {
  domItem.hideBoard();
  domItem.hideCurrentPlayerBox();
  domItem.increasePlayersBoxSize();
  domItem.playerForm.reset();
  domItem.select.forEach(item => {
    domItem.playersName(item);
  });
};

domItem.startBtn.onclick = function initGame() {
  const playerX = domItem.getPlayers().playerX;
  const playerO = domItem.getPlayers().playerO;
  console.log(playerX + playerO);
}