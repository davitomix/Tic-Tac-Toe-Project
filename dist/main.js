/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom-utils.js":
/*!**************************!*\
  !*** ./src/dom-utils.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GameDom = (() => {\n  const playersBox = document.getElementById('players-box');\n  const currentPlayerBox = document.getElementById('current-player');\n  const board = document.getElementById('board');\n  const cellElements = document.querySelectorAll('[data-cell]');\n  const winningMsgElement = document.getElementById('winningMsg');\n  const winningMsgTxtElement = document.querySelector('[data-winning-msg-txt]');\n  const resetBtn = document.getElementById('resetBtn');\n  // Player form.\n  const playerForm = document.getElementById('player-form');\n  const startBtn = document.getElementById('submit');\n  const select = document.querySelectorAll('.player-input');\n  const removePlayerForm = () => {\n    playerForm.classList.add('d-none');\n  };\n  const increasePlayersBoxSize = () => {\n    playersBox.classList.add('sized');\n  };\n  const decreasePlayersBoxUnsize = () => {\n    playersBox.classList.remove('sized');\n  };\n  const hideBoard = () => {\n    board.classList.add('d-none');\n  };\n  const showBoard = () => {\n    board.classList.remove('d-none');\n  };\n  const playersName = (item) => {\n    const ipt = item.getElementsByTagName('input');\n    ipt[0].addEventListener('input', () => {\n      if (playerForm.nameX.value > '' && playerForm.nameO.value > '') {\n        startBtn.disabled = false;\n      } else {\n        startBtn.disabled = true;\n      }\n    });\n  };\n  const getPlayers = () => {\n    const playerX = playerForm.nameX.value;\n    const playerO = playerForm.nameO.value;\n    return {\n      playerX, playerO,\n    };\n  };\n  const hideCurrentPlayerBox = () => {\n    currentPlayerBox.classList.add('d-none');\n  };\n  const currentPlayerBoxUnhide = () => {\n    currentPlayerBox.classList.remove('d-none');\n  };\n  const showCurrentPlayer = (playerTurn) => {\n    currentPlayerBox.innerHTML = `<h2> Its player ${playerTurn} turn </h2>`;\n  };\n  return {\n    removePlayerForm,\n    increasePlayersBoxSize,\n    decreasePlayersBoxUnsize,\n    board,\n    hideBoard,\n    showBoard,\n    cellElements,\n    winningMsgElement,\n    winningMsgTxtElement,\n    resetBtn,\n    playerForm,\n    startBtn,\n    select,\n    hideCurrentPlayerBox,\n    currentPlayerBoxUnhide,\n    showCurrentPlayer,\n    playersName,\n    getPlayers,\n  };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameDom);\n\n//# sourceURL=webpack:///./src/dom-utils.js?");

/***/ }),

/***/ "./src/game-utils.js":
/*!***************************!*\
  !*** ./src/game-utils.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst X_CLASS = 'x';\nconst CIRCLE_CLASS = 'circle';\nconst WINNING_COMBINATIONS = [\n  [0, 1, 2],\n  [3, 4, 5],\n  [6, 7, 8],\n  [0, 3, 6],\n  [1, 4, 7],\n  [2, 5, 8],\n  [0, 4, 8],\n  [2, 4, 6],\n];\nconst Game = (() => {\n  const setBoardHoverClass = (turn, board) => {\n    board.classList.remove(X_CLASS);\n    board.classList.remove(CIRCLE_CLASS);\n    if (turn) {\n      board.classList.add(X_CLASS);\n    } else {\n      board.classList.add(CIRCLE_CLASS);\n    }\n  };\n  const placeMark = (cell, currentClass) => {\n    cell.classList.add(currentClass);\n  };\n  /* eslint-disable */\n  const checkWin = (currentClass, cellElements) => WINNING_COMBINATIONS.some((combination) => combination.every((index) => cellElements[index].classList.contains(currentClass)));\n  /* eslint-enable */\n  const endGame = (draw, turn, txtElement, element, playerX, playerO) => {\n    const textElement = txtElement;\n    if (draw) {\n      textElement.innerText = 'Draw!';\n    } else {\n      textElement.innerText = `${turn ? playerX : playerO} Wins!`;\n    }\n    element.classList.add('show');\n  };\n  /* eslint-disable */\n  const isDraw = (cellElements) => [...cellElements].every((cell) => cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS));\n  /* eslint-enable */\n  return {\n    setBoardHoverClass,\n    placeMark,\n    checkWin,\n    endGame,\n    isDraw,\n  };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game-utils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils.js */ \"./src/dom-utils.js\");\n/* harmony import */ var _game_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-utils.js */ \"./src/game-utils.js\");\n/* harmony import */ var _player_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-utils.js */ \"./src/player-utils.js\");\n/* eslint-disable */\n\n\n\n/* eslint-enable */\nconst X_CLASS = 'x';\nconst CIRCLE_CLASS = 'circle';\nconst domItem = _dom_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst playerFactory = _player_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\nwindow.onload = function ready() {\n  domItem.hideBoard();\n  domItem.hideCurrentPlayerBox();\n  domItem.increasePlayersBoxSize();\n  domItem.playerForm.reset();\n  domItem.select.forEach((item) => {\n    domItem.playersName(item);\n  });\n};\n\nconst startGame = ((playerX, playerO) => {\n  const game = _game_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  let turn = true;\n  const handleClick = (e) => {\n    const cell = e.target;\n    const currentClass = turn ? X_CLASS : CIRCLE_CLASS;\n    cell.classList.remove(X_CLASS);\n    cell.classList.remove(CIRCLE_CLASS);\n    game.placeMark(cell, currentClass);\n    // -----------\n    if (game.checkWin(currentClass, domItem.cellElements)) {\n      /* eslint-disable */\n      game.endGame(false, turn, domItem.winningMsgTxtElement, domItem.winningMsgElement, playerX, playerO);\n    } else if (game.isDraw(domItem.cellElements)) {\n      game.endGame(true, turn, domItem.winningMsgTxtElement, domItem.winningMsgElement, playerX, playerO);\n      /* eslint-enable */\n    } else {\n      turn = !turn;\n      if (turn) {\n        domItem.showCurrentPlayer(playerX);\n      } else {\n        domItem.showCurrentPlayer(playerO);\n      }\n      game.setBoardHoverClass(turn, domItem.board);\n    }\n    // ----------\n  };\n  domItem.decreasePlayersBoxUnsize();\n  domItem.removePlayerForm();\n  domItem.showBoard();\n  domItem.currentPlayerBoxUnhide();\n  domItem.showCurrentPlayer(playerX);\n  game.setBoardHoverClass(turn, domItem.board);\n  domItem.resetBtn.addEventListener('click', () => {\n    startGame(playerX, playerO);\n  }, false);\n  domItem.cellElements.forEach((cell) => {\n    cell.classList.remove(X_CLASS);\n    cell.classList.remove(CIRCLE_CLASS);\n    cell.removeEventListener('click', handleClick);\n    cell.addEventListener('click', handleClick, { once: true });\n  });\n  domItem.winningMsgElement.classList.remove('show');\n});\n\ndomItem.startBtn.onclick = function initGame() {\n  const { playerX } = domItem.getPlayers();\n  const { playerO } = domItem.getPlayers();\n  const player1 = playerFactory(playerX, 'X', []);\n  const player2 = playerFactory(playerO, 'O', []);\n  startGame(player1.name, player2.name);\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player-utils.js":
/*!*****************************!*\
  !*** ./src/player-utils.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PlayerGenerator = (name, mark, playArr) => ({\n  name,\n  mark,\n  playArr,\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerGenerator);\n\n\n//# sourceURL=webpack:///./src/player-utils.js?");

/***/ })

/******/ });