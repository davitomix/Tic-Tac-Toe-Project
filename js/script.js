// ok
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const X_TURN = true;
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
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMsgElement = document.getElementById('winningMsg');
const winningMsgTxtElement = document.querySelector('[data-winning-msg-txt]');
const resetBtn = document.getElementById('resetBtn');
// Staring game form.
const playerForm = document.getElementById('player-form');
const btn = document.getElementById('submit');
const select = document.querySelectorAll('.player-input');
// Current player box.
const currentPlayerBox = document.getElementById('current-player');

window.onload = function ready() {
  board.classList.add('d-none');
  currentPlayerBox.classList.add('d-none');
  playerForm.reset();
  select.forEach(item => {
    const ipt = item.getElementsByTagName('input');
    ipt[0].addEventListener('input', () => {
      if (playerForm.nameX.value > '' && playerForm.nameO.value > '') {
        btn.disabled = false;
      } else {
        btn.disabled = true;
      }
    });
  });
};

const Game = () => {
  const setBoardHoverClass = (turn) => {
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
  const checkWin = (currentClass) => WINNING_COMBINATIONS.some(combination => combination.every(index => cellElements[index].classList.contains(currentClass)));
  /* eslint-enable */
  const endGame = (draw, turn) => {
    if (draw) {
      winningMsgTxtElement.innerText = 'Draw!';
    } else {
      winningMsgTxtElement.innerText = `${turn ? "X's" : "O's"} Wins!`;
    }
    winningMsgElement.classList.add('show');
  };
  /* eslint-disable */
  const isDraw = () => [...cellElements].every(cell => cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS));
  /* eslint-enaable */
  return {
    setBoardHoverClass,
    placeMark,
    checkWin,
    endGame,
    isDraw,
  };
};

const playersObj = (player1, player2) => {
  const playerX = player1;
  const playerO = player2;
  return { playerX, playerO };
};

const startGame = (playerX, playerO) => {
  const game = Game();
  let turn;
  let playX;
  let playO;
  const handleClick = (e) => {
    const cell = e.target;
    const currentClass = turn ? X_CLASS : CIRCLE_CLASS;
    game.placeMark(cell, currentClass);
    // -----------
    if (game.checkWin(currentClass)) {
      game.endGame(false, turn);
    } else if (game.isDraw()) {
      game.endGame(true, turn);
    } else {
      turn = !turn;
      game.setBoardHoverClass(turn);
      if (turn) {
        currentPlayerBox.innerHTML = `<h2> Its player ${playX} turn </h2>`;
      } else {
        currentPlayerBox.innerHTML = `<h2> Its player ${playO} turn </h2>`;
      }
    }
    // ----------
  };
  playX = playerX;
  playO = playerO;
  playerForm.classList.add('d-none');
  board.classList.remove('d-none');
  currentPlayerBox.classList.remove('d-none');
  currentPlayerBox.innerHTML = `<h2> Its player ${playX} turn </h2>`;
  turn = X_TURN;
  game.setBoardHoverClass(turn);
  resetBtn.addEventListener('click', () => {
    startGame(playerX, playerO);
  }, false);
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
  winningMsgElement.classList.remove('show');
};
/* eslint-disable */
const initGame = (form) => {
  const player1 = form[0].value;
  const player2 = form[1].value;
  const players = playersObj(player1, player2);
  const { playerX } = players;
  const { playerO } = players;
  startGame(playerX, playerO);
};
/* eslint-enable */