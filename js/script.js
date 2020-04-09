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
const players = ['X', 'O'];
let whoseturn = 0;
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMsgElement = document.getElementById('winningMsg');
const winningMsgTxtElement = document.querySelector('[data-winning-msg-txt]');
const resetBtn = document.getElementById('resetBtn');
let circleTurn = false;

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
    if(turn) {
      board.classList.add(X_CLASS);
    }
    else {
      board.classList.add(CIRCLE_CLASS);
    }
  };
  const placeMark = (cell, currentClass) => {
    cell.classList.add(currentClass);
  };
  const checkWin = (currentClass) => {
    return WINNING_COMBINATIONS.some(combination => {
      return combination.every(index => {
        return cellElements[index].classList.contains(currentClass);
      })
    })
  };
  const endGame = (draw, turn) => {
      if(draw) {
        winningMsgTxtElement.innerText = 'Draw!';
      } else {
        winningMsgTxtElement.innerText = `${turn ? "X's" : "O's"} Wins!`;
      }
      winningMsgElement.classList.add('show');
  };
  const isDraw = () => {
    return [...cellElements].every(cell => {
      return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS);
    })
  };
  return {
    setBoardHoverClass,
    placeMark,
    checkWin,
    endGame,
    isDraw
  };
};


const startGame = () => {
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMsgElement.classList.remove('show');
  if (players[0] !== 'X') {
    document.getElementById('game-message').innerText = `${players[0]}'s Turn`;
  }
};
resetBtn.addEventListener('click', startGame);
startGame();


