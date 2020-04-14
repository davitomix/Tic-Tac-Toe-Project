const GameDom = (() => {
  const playersBox = document.getElementById('players-box');
  const currentPlayerBox = document.getElementById('current-player');
  const board = document.getElementById('board');
  const cellElements = document.querySelectorAll('[data-cell]');
  const winningMsgElement = document.getElementById('winningMsg');
  const winningMsgTxtElement = document.querySelector('[data-winning-msg-txt]');
  const resetBtn = document.getElementById('resetBtn');
  // Player form.
  const playerForm = document.getElementById('player-form');
  const startBtn = document.getElementById('submit');
  const select = document.querySelectorAll('.player-input');

  const removePlayerForm = () => {
    playerForm.classList.add('d-none');
  };

  const increasePlayersBoxSize = () => {
    playersBox.classList.add('sized');
  };

  const decreasePlayersBoxUnsize = () => {
    playersBox.classList.remove('sized');
  };

  const hideBoard = () => {
    board.classList.add('d-none');
  };

  const showBoard = () => {
    board.classList.remove('d-none');
  };

  const playersName = (item) => {
    const ipt = item.getElementsByTagName('input');
    ipt[0].addEventListener('input', () => {
      if (playerForm.nameX.value > '' && playerForm.nameO.value > '') {
        startBtn.disabled = false;
      } else {
        startBtn.disabled = true;
      }
    });
  };

  const getPlayers = () => {
    const playerX = playerForm.nameX.value;
    const playerO = playerForm.nameO.value;
    return {
      playerX, playerO,
    };
  };

  const hideCurrentPlayerBox = () => {
    currentPlayerBox.classList.add('d-none');
  };

  const currentPlayerBoxUnhide = () => {
    currentPlayerBox.classList.remove('d-none');
  };

  const showCurrentPlayer = (playerTurn) => {
    currentPlayerBox.innerHTML = `<h2> Its player ${playerTurn} turn </h2>`;
  };

  return {
    removePlayerForm,
    increasePlayersBoxSize,
    decreasePlayersBoxUnsize,
    hideBoard,
    showBoard,
    cellElements,
    winningMsgElement,
    winningMsgTxtElement,
    resetBtn,
    playerForm,
    startBtn,
    select,
    hideCurrentPlayerBox,
    currentPlayerBoxUnhide,
    showCurrentPlayer,
    playersName,
    getPlayers,
  };
})();

export default GameDom;