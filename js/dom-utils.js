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
  const btn = document.getElementById('submit');
  const select = document.querySelectorAll('.player-input');

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
        btn.disabled = false;
      } else {
        btn.disabled = true;
      }
    });
  };

  const hideCurrentPlayerBox = () => {
    currentPlayerBox.classList.add('d-none');
  };

  const currentPlayerBoxUnhide = () => {
    currentPlayerBox.classList.remove('d-none');
  };

  return {
    increasePlayersBoxSize,
    decreasePlayersBoxUnsize,
    hideBoard,
    showBoard,
    cellElements,
    winningMsgElement,
    winningMsgTxtElement,
    resetBtn,
    playerForm,
    btn,
    select,
    hideCurrentPlayerBox,
    currentPlayerBoxUnhide,
    playersName
  };
});

export default GameDom;