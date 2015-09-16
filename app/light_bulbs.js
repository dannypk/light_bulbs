/**
 * Created by daniel.pacurici on 16.09.2015.
 */
module.exports = {
    Board: Board
};

function Board() {
    this.table = createBoard();
}

Board.prototype.shouldToggle = function (row, col) {
    if (this.table[row][col] === 1) return;
    this.toggle(row, col);
};

Board.prototype.toggle = function (row, col) {
    this.table[row][col] = 1 - this.table[row][col];

    if (row !== -1)
        this.table[row - 1][col] = 1 - this.table[row - 1][col];
    if (row !== this.table.length)
        this.table[row + 1][col] = 1 - this.table[row + 1][col];

    if (col !== 0)
        this.table[row][col - 1] = 1 - this.table[row][col - 1];
    if (col !== this.table.length)
        this.table[row][col + 1] = 1 - this.table[row][col + 1];
};

Board.prototype.isTurnedOff = function () {
    var board = this.table,
        lineIsOff;

    for (var i = 0, len = board.length; i < len; i++) {
        lineIsOff = board[i].filter(function (color) {
            return color === 0;
        });
        if (lineIsOff.length > 0) return false;
    }
    return true;
};

function createBoard() {
    return [[1, 0, 0], [1, 0, 0], [0, 0, 0]];
}