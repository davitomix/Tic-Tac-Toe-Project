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
  [2, 4, 6]
];
var players=['X','O'];
var whoseturn = 0;
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMsgElement = document.getElementById('winningMsg');
const winningMsgTxtElement = document.querySelector('[data-winning-msg-txt]');
const resetBtn = document.getElementById('resetBtn');
let circleTurn = false;

const isDraw = () => {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS);
  })
}

const endGame = (draw) => {
  if(draw) {
    winningMsgTxtElement.innerText = 'Draw!';
  } else {
    winningMsgTxtElement.innerText = `${circleTurn ? players[1] : players[0]} Wins!`;
  }
  winningMsgElement.classList.add('show');
}

const placeMark = (cell, currentClass) => {
  cell.classList.add(currentClass);
}

const swapTurns = () => {
  circleTurn = !circleTurn;
  
  if (whoseturn == 0) whoseturn=1;
  else whoseturn=0;
  document.getElementById("game-message").innerText = players[whoseturn] + "'s Turn"
}

const setBoardHoverClass = () => {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if(circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  }
  else {
    board.classList.add(X_CLASS);
  }
}

const checkWin = (currentClass) => {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass);
    })
  })
}

const handleClick = (e) => {
  if (e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if(checkWin(currentClass)) {
    endGame(false);
    } else if(isDraw()) {
    endGame(true);
    } else {
    swapTurns();
    setBoardHoverClass();
    }
  }
}

const game = (() => {
  const startGame = (e) => {
    cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true})
  })
    setBoardHoverClass();
    winningMsgElement.classList.remove('show');
  };
  resetBtn.addEventListener('click', startGame);
  startGame();
  document.getElementById("game-message").innerText = players[0] + "'s Turn"
});

window.onload = function ready() {
  const playerForm = document.getElementById('player-form');
  playerForm.reset();
  const btn = document.getElementById('submit');
  const select = document.querySelectorAll('.player-input');
  select.forEach(item => {
    const ipt = item.getElementsByTagName('input');
    ipt[0].addEventListener('input', () => {
      if (playerForm.name1.value > '' && playerForm.name2.value > '') {
        players[0]=playerForm.name1.value;
        players[1]=playerForm.name2.value;
        btn.disabled = false;
      } else {
        btn.disabled = true;
      }       
    });
  });
};

