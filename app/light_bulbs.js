/**
 * Created by daniel.pacurici on 16.09.2015.
 */
module.exports = {Bulbs: Bulbs};

function Bulbs() {
    this.board = createBoard();
}

Bulbs.prototype.shouldToggle = function (row, col) {
    if (this.board[row][col] === 1) return;
    this.toggle(row, col);
};

Bulbs.prototype.toggle = function (row, col) {
    this.board[row][col] = 1 - this.board[row][col];

    if (row > 0)
        this.board[row - 1][col] = 1 - this.board[row - 1][col];
    if (row < this.board.length - 1)
        this.board[row + 1][col] = 1 - this.board[row + 1][col];

    if (col > 0)
        this.board[row][col - 1] = 1 - this.board[row][col - 1];
    if (col < this.board.length - 1)
        this.board[row][col + 1] = 1 - this.board[row][col + 1];
};

Bulbs.prototype.isTurnedOff = function () {
    var board = this.board,
        lineIsOff;

    for (var i = 0, len = board.length; i < len; i++) {
        lineIsOff = board[i].filter(function (color) {
            return color === 0;
        });
        if (lineIsOff.length > 0) return false;
    }
    return true;
};
/*
ALGORITHM IS BAD AND CANNOT DO RECURSIVE CALLS AS PROTOTYPE....
...

Bulbs.prototype.turnOff = function () {
    var board = this.board, len = board.length;

    while (!this.isTurnedOff()) {
        for (var index = 0; index < len; index++) {
            var indexOfZero = board[index].indexOf(0);
            if (indexOfZero > -1) {
                this.toggle(index, indexOfZero);
            }
        }
    }
    return this.board;
};*/

function createBoard() {
    return [[1, 0, 0], [1, 0, 0], [0, 0, 0]];
}