(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ "./src/all.min.js":
/*!************************!*\
  !*** ./src/all.min.js ***!
  \************************/
/***/ (() => {

function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}/*!
 * Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameBoardFactory: () => (/* binding */ gameBoardFactory)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");

var gameBoardFactory = function gameBoardFactory() {
  var board = Array.from({
    length: 10
  }, function () {
    return new Array(10);
  });
  var ships = [];
  var placeShip = function placeShip(p1, p2) {
    if (p1[0] > 9 || p1[1] > 9 || p2[0] > 9 || p2[1] > 9) return false;
    var vert = p1[1] !== p2[1];
    var len, xArr, yArr;
    if (vert) {
      len = p2[1] - p1[1] + 1;
      xArr = Array.from({
        length: len
      }, function () {
        return p1[0];
      });
      yArr = Array.from({
        length: len
      }, function (e, i) {
        return p1[1] + i;
      });
    } else {
      len = p2[0] - p1[0] + 1;
      xArr = Array.from({
        length: len
      }, function (e, i) {
        return p1[0] + i;
      });
      yArr = Array.from({
        length: len
      }, function () {
        return p1[1];
      });
    }
    for (var ind = 0; ind < xArr.length; ind++) {
      var x = xArr[ind];
      var y = yArr[ind];
      if (board[x][y]) return false;
    }
    var ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(len);
    ships.push(ship);
    for (var _ind = 0; _ind < xArr.length; _ind++) {
      var _x = xArr[_ind];
      var _y = yArr[_ind];
      board[_x][_y] = ship;
    }
    return true;
  };
  var recieveHit = function recieveHit(p) {
    var des = board[p[0]][p[1]];
    if (des && des !== -1 && des !== 0) {
      des.hit();
      board[p[0]][p[1]] = 0;
      return true;
    } else {
      if (des === undefined) board[p[0]][p[1]] = -1;
      return false;
    }
  };
  var haveLost = function haveLost() {
    for (var ind = 0; ind < ships.length; ind++) {
      var ship = ships[ind];
      if (!ship.isSunk()) return false;
    }
    return true;
  };
  var canBeShotAt = function canBeShotAt(p) {
    if (p[0] > 9 || p[1] > 9) return false;
    var point = board[p[0]][p[1]];
    return point !== -1 && point !== 0;
  };
  var getBoard = function getBoard() {
    return [].concat(board);
  };
  var hasShipAt = function hasShipAt(p) {
    var point = board[p[0]][p[1]];
    return point !== undefined && point !== 0 && point !== -1;
  };
  var print = function print() {
    board.forEach(function (row) {
      var str = '';
      row.forEach(function (cell) {
        if (cell) str += 'S, ';else str += '-, ';
      });
      console.log(str);
    });
  };
  return {
    placeShip: placeShip,
    recieveHit: recieveHit,
    haveLost: haveLost,
    canBeShotAt: canBeShotAt,
    getBoard: getBoard,
    print: print,
    hasShipAt: hasShipAt
  };
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout */ "./src/page-layout.js");
/* harmony import */ var _all_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all.min.js */ "./src/all.min.js");
/* harmony import */ var _all_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_all_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



(0,_page_layout__WEBPACK_IMPORTED_MODULE_0__.loadInitialPage)();

/***/ }),

/***/ "./src/page-layout.js":
/*!****************************!*\
  !*** ./src/page-layout.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadInitialPage: () => (/* binding */ loadInitialPage)
/* harmony export */ });
/* harmony import */ var _place_ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-ships */ "./src/place-ships.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-game */ "./src/start-game.js");


var loadInitialPage = function loadInitialPage() {
  var content = document.createElement('div');
  content.classList.add('content');

  // header
  var header = createHeader();

  // main game area
  var main = createMainGameArea();

  // winner popup
  var popup = createWinnerPopup();

  // footer
  var footer = createFooter();
  content.append(header, main, footer, popup);
  document.body.append(content);
};
var createHeader = function createHeader() {
  var header = document.createElement('header');
  var battleshipLogo = document.createElement('h1');
  battleshipLogo.innerText = 'Battleship';
  header.append(battleshipLogo);
  return header;
};
var createMainGameArea = function createMainGameArea() {
  var main = document.createElement('main');
  var gameArea = document.createElement('div');
  var playerBoard = createBoard('player');
  var opponentBoard = createBoard('opponent');
  var buttonDiv = document.createElement('div');
  var gameButton = document.createElement('button');
  var rotateButton = document.createElement('button');
  buttonDiv.classList.add('button-div');
  gameButton.classList.add('game-start-reset');
  rotateButton.classList.add('rotate');
  gameButton.innerText = 'Start Game!';
  rotateButton.innerText = 'Rotate';
  var shipsDiv = createShipsContainer();
  (0,_place_ships__WEBPACK_IMPORTED_MODULE_0__.setupShipSizeVariability)(shipsDiv);
  (0,_place_ships__WEBPACK_IMPORTED_MODULE_0__.setupShipHoverOverPlayerBoard)(playerBoard);
  (0,_place_ships__WEBPACK_IMPORTED_MODULE_0__.setupClickingToPlaceShip)(playerBoard);
  (0,_place_ships__WEBPACK_IMPORTED_MODULE_0__.setupShipRotationButton)(rotateButton);
  (0,_start_game__WEBPACK_IMPORTED_MODULE_1__.setupGameButton)(gameButton, function () {
    document.querySelector('#player').replaceWith(createBoard('player'));
    document.querySelector('#opponent').replaceWith(createBoard('opponent'));
    document.querySelector('.ships-container').replaceWith(createShipsContainer());
  });
  gameArea.classList.add('game-area');
  buttonDiv.append(gameButton, rotateButton);
  gameArea.append(shipsDiv, playerBoard, opponentBoard);
  main.append(gameArea, buttonDiv);
  return main;
};
var createBoard = function createBoard(id) {
  var board = document.createElement('div');
  board.setAttribute('id', id);
  board.classList.add('board');
  for (var i = 0; i < 10; i++) {
    var row = document.createElement('div');
    row.classList.add('row');
    for (var j = 0; j < 10; j++) {
      var d = document.createElement('div');
      d.classList.add('tile');
      d.setAttribute('x', j);
      d.setAttribute('y', i);
      row.append(d);
    }
    board.append(row);
  }
  return board;
};
var createShipsContainer = function createShipsContainer() {
  var shipsDiv = document.createElement('div');
  shipsDiv.classList.add('ships-container');
  var createShip = createShipFunc();
  var ship1 = createShip(5);
  var ship2 = createShip(4);
  var ship3 = createShip(3);
  var ship4 = createShip(3);
  var ship5 = createShip(2);
  shipsDiv.append(ship1, ship2, ship3, ship4, ship5);
  return shipsDiv;
};
var createShipFunc = function createShipFunc() {
  var id = 1;
  return function (length) {
    var ship = document.createElement('div');
    ship.setAttribute('id', "ship-".concat(id++));
    ship.setAttribute('length', "".concat(length));
    return ship;
  };
};
var createFooter = function createFooter() {
  var footer = document.createElement('footer');
  var credits = document.createElement('span');
  credits.innerHTML = '<i class="fa-brands fa-github"></i> Made by <a href="https://github.com/Meeran-Tofiq">Meeran Tofiq</a>';
  footer.append(credits);
  return footer;
};
var createWinnerPopup = function createWinnerPopup() {
  var popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerText = 'YOU WON!';
  return popup;
};


/***/ }),

/***/ "./src/place-ships.js":
/*!****************************!*\
  !*** ./src/place-ships.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placedShips: () => (/* binding */ placedShips),
/* harmony export */   resetPlacedShips: () => (/* binding */ resetPlacedShips),
/* harmony export */   setupClickingToPlaceShip: () => (/* binding */ setupClickingToPlaceShip),
/* harmony export */   setupShipHoverOverPlayerBoard: () => (/* binding */ setupShipHoverOverPlayerBoard),
/* harmony export */   setupShipRotationButton: () => (/* binding */ setupShipRotationButton),
/* harmony export */   setupShipSizeVariability: () => (/* binding */ setupShipSizeVariability)
/* harmony export */ });
var length = 0;
var vertical = false;
var placedShips = [];
var tiles = [];
var taken = [];
var setupShipSizeVariability = function setupShipSizeVariability(shipsContainer) {
  Array.from(shipsContainer.children).forEach(function (ship) {
    ship.addEventListener('click', function () {
      if (!ship.classList.contains('placed')) length = ship.getAttribute('length');
    });
  });
};
var setupShipHoverOverPlayerBoard = function setupShipHoverOverPlayerBoard(playerBoard) {
  Array.from(playerBoard.children).forEach(function (row) {
    Array.from(row.children).forEach(function (tile) {
      tile.addEventListener('mouseenter', function () {
        var x = ~~tile.getAttribute('x');
        var y = ~~tile.getAttribute('y');
        if (vertical) {
          if (y > 10 - length) return false;
        } else {
          if (x > 10 - length) return false;
        }
        tiles = getShipTiles(x, y, playerBoard);
        taken = tiles.map(function (tile) {
          return tile.classList.contains('taken');
        });
        if (!taken.includes(true)) giveTilesClass(tiles, 'hover');
      });
      tile.addEventListener('mouseout', function () {
        var x = ~~tile.getAttribute('x');
        var y = ~~tile.getAttribute('y');
        if (vertical) {
          if (y > 10 - length) return false;
        } else {
          if (x > 10 - length) return false;
        }
        var nonTaken = tiles.filter(function (tile) {
          return !tile.classList.contains('taken');
        });
        removeTilesClass(nonTaken, 'hover');
      });
    });
  });
};
var getShipTiles = function getShipTiles(x, y, playerBoard) {
  var main, secondary;
  var mName, sName;
  if (vertical) {
    main = y;
    secondary = x;
    mName = 'y';
    sName = 'x';
  } else {
    main = x;
    secondary = y;
    mName = 'x';
    sName = 'y';
  }
  var arr = Array.from(playerBoard.querySelectorAll("[".concat(sName, "=\"").concat(secondary, "\"]")));
  arr = arr.filter(function (tile) {
    return tile.getAttribute("".concat(mName)) >= main;
  });
  arr = arr.filter(function (tile) {
    return tile.getAttribute("".concat(mName)) <= ~~main + ~~length - 1;
  });
  return arr;
};
var giveTilesClass = function giveTilesClass(tiles, className) {
  tiles.forEach(function (tile) {
    if (className) tile.classList.add(className);
  });
};
var removeTilesClass = function removeTilesClass(tiles, className) {
  tiles.forEach(function (tile) {
    if (className) tile.classList.remove(className);
  });
};
var setupShipRotationButton = function setupShipRotationButton(btn) {
  btn.addEventListener('click', function () {
    vertical = !vertical;
  });
};
var setupClickingToPlaceShip = function setupClickingToPlaceShip(playerBoard) {
  Array.from(playerBoard.children).forEach(function (row) {
    Array.from(row.children).forEach(function (tile) {
      tile.addEventListener('click', function () {
        if (!tiles.map(function (tile) {
          return tile.classList.contains('taken');
        }).includes(true) && length !== 0) {
          tiles.forEach(function (tile) {
            tile.classList.add('taken');
            tile.classList.remove('hover');
          });
          var ships = document.querySelectorAll("[length=\"".concat(length, "\"]"));
          var ship = Array.from(ships).filter(function (ship) {
            return !ship.classList.contains('placed');
          })[0];
          ship.classList.add('placed');
          length = 0;
          placedShips.push({
            p1: [~~tiles[0].getAttribute('x'), ~~tiles[0].getAttribute('y')],
            p2: [~~tiles.slice(-1)[0].getAttribute('x'), ~~tiles.slice(-1)[0].getAttribute('y')]
          });
        }
      });
    });
  });
};
var resetPlacedShips = function resetPlacedShips() {
  placedShips = [];
};



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playerFactory: () => (/* binding */ playerFactory)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

var playerFactory = function playerFactory(t, opp) {
  var turn = t;
  var board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameBoardFactory)();
  var enemyBoard = opp;
  var attack = function attack(p) {
    if (!turn) return false;
    if (enemyBoard.canBeShotAt(p)) {
      turn = false;
      enemyBoard.recieveHit(p);
      return true;
    } else return false;
  };
  var switchTurn = function switchTurn() {
    turn = !turn;
  };
  var getTurn = function getTurn() {
    return turn;
  };
  var setEnemy = function setEnemy(_enemy) {
    enemyBoard = _enemy;
  };
  var makeRandomAttack = function makeRandomAttack() {
    var x, y;
    var shot = false;
    while (!shot) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      shot = attack([x, y]);
    }
    return [x, y];
  };
  var placeRandomShips = function placeRandomShips() {
    [4, 3, 2, 2, 1].forEach(function (len) {
      var p1 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
      var p2;
      var done = false;
      var vertical = Math.round(Math.random());
      if (vertical) {
        while (!done) {
          p1 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
          p2 = [p1[0], p1[1] + len];
          done = board.placeShip(p1, p2);
        }
      } else {
        while (!done) {
          p1 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
          p2 = [p1[0] + len, p1[1]];
          done = board.placeShip(p1, p2);
        }
      }
    });
  };
  return {
    attack: attack,
    setEnemy: setEnemy,
    getTurn: getTurn,
    makeRandomAttack: makeRandomAttack,
    placeRandomShips: placeRandomShips,
    switchTurn: switchTurn,
    board: board
  };
};


/***/ }),

/***/ "./src/ship-attacks.js":
/*!*****************************!*\
  !*** ./src/ship-attacks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPlayerAttack: () => (/* binding */ getPlayerAttack),
/* harmony export */   updateBoardWithAttack: () => (/* binding */ updateBoardWithAttack)
/* harmony export */ });
var updateBoardWithAttack = function updateBoardWithAttack(board, p, shipHit) {
  var row = Array.from(board.querySelectorAll('.row'));
  var cell = row[p[1]].querySelector("[x=\"".concat(p[0], "\"]"));
  cell.classList.add('hit');
  if (shipHit && !cell.classList.contains('taken')) cell.classList.add('taken');
};
var getPlayerAttack = function getPlayerAttack(board) {
  return new Promise(function (resolve, reject) {
    board.addEventListener('click', function (event) {
      var clickedCell = event.target;
      var x = parseInt(clickedCell.getAttribute('x'));
      var y = parseInt(clickedCell.getAttribute('y'));
      if (x > 9 || x < 0 || y > 9 || y < 0 || isNaN(x) || isNaN(y)) reject();
      resolve([x, y]);
    });
  });
};


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shipFactory: () => (/* binding */ shipFactory)
/* harmony export */ });
var shipFactory = function shipFactory(len) {
  var length = len;
  var hits = 0;
  var hit = function hit() {
    if (hits !== length) hits++;
  };
  var getHits = function getHits() {
    return hits;
  };
  var isSunk = function isSunk() {
    return hits === length;
  };
  return {
    hit: hit,
    getHits: getHits,
    isSunk: isSunk
  };
};


/***/ }),

/***/ "./src/start-game.js":
/*!***************************!*\
  !*** ./src/start-game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupGameButton: () => (/* binding */ setupGameButton)
/* harmony export */ });
/* harmony import */ var _place_ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-ships */ "./src/place-ships.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ship_attacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship-attacks */ "./src/ship-attacks.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



var setupGameButton = function setupGameButton(btn) {
  var start = false;
  btn.addEventListener('click', function () {
    var ships = _toConsumableArray(document.querySelector('.ships-container').children);
    document.querySelector('.popup').classList.remove('visible');
    if (ships.filter(function (ship) {
      return ship.classList.contains('placed');
    }).length !== 5) return;
    if (!start) {
      startGame();
      btn.innerText = 'Reset Board!';
    } else {
      restart();
      btn.innerText = 'Start Game!';
    }
    start = !start;
  });
};
var startGame = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var player, opponent, playerBoard, opponetBoard, point, hitShip, attack, _hitShip;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          player = (0,_player__WEBPACK_IMPORTED_MODULE_1__.playerFactory)(false);
          opponent = (0,_player__WEBPACK_IMPORTED_MODULE_1__.playerFactory)(true, player.board);
          player.setEnemy(opponent.board);
          _place_ships__WEBPACK_IMPORTED_MODULE_0__.placedShips.forEach(function (ship) {
            return player.board.placeShip(ship.p1, ship.p2);
          });
          opponent.placeRandomShips();
          playerBoard = document.querySelector('#player');
          opponetBoard = document.querySelector('#opponent');
        case 7:
          if (false) {}
          if (!player.getTurn()) {
            _context.next = 24;
            break;
          }
          _context.prev = 9;
          _context.next = 12;
          return (0,_ship_attacks__WEBPACK_IMPORTED_MODULE_2__.getPlayerAttack)(opponetBoard);
        case 12:
          point = _context.sent;
          _context.next = 18;
          break;
        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](9);
          console.log(_context.t0);
        case 18:
          hitShip = opponent.board.hasShipAt(point);
          attack = player.attack(point);
          (0,_ship_attacks__WEBPACK_IMPORTED_MODULE_2__.updateBoardWithAttack)(opponetBoard, point, hitShip);
          if (attack) opponent.switchTurn();
          _context.next = 25;
          break;
        case 24:
          if (opponent.getTurn()) {
            point = opponent.makeRandomAttack();
            _hitShip = player.board.hasShipAt(point);
            (0,_ship_attacks__WEBPACK_IMPORTED_MODULE_2__.updateBoardWithAttack)(playerBoard, point, _hitShip);
            player.switchTurn();
          }
        case 25:
          if (!opponent.board.haveLost()) {
            _context.next = 30;
            break;
          }
          declareWinner(true);
          return _context.abrupt("break", 35);
        case 30:
          if (!player.board.haveLost()) {
            _context.next = 33;
            break;
          }
          declareWinner(false);
          return _context.abrupt("break", 35);
        case 33:
          _context.next = 7;
          break;
        case 35:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[9, 15]]);
  }));
  return function startGame() {
    return _ref.apply(this, arguments);
  };
}();
var restart = function restart() {
  var ships = _toConsumableArray(document.querySelector('.ships-container').children);
  ships.forEach(function (ship) {
    return ship.classList.remove('placed');
  });
  var tiles = _toConsumableArray(document.querySelectorAll('.tile'));
  tiles.forEach(function (tile) {
    return tile.classList.remove('hit', 'taken');
  });
  (0,_place_ships__WEBPACK_IMPORTED_MODULE_0__.resetPlacedShips)();
};
var declareWinner = function declareWinner(winner) {
  var popup = document.querySelector('.popup');
  popup.classList.add('visible');
  popup.innerText = winner ? 'YOU WON' : 'YOU LOST';
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);