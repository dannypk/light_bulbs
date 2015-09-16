/**
 * Created by daniel.pacurici on 16.09.2015.
 */
module.exports = {
    board: Board
};

function Board() {
    this.table = createBoard();
}

Board.prototype.toggle = function (row, col) {
    this.table[row][col] = 1 - this.table[row][col];
};

function createBoard() {
    return [[1, 0, 0], [1, 0, 0], [0, 0, 0]];
}