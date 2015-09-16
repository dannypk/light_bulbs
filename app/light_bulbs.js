/**
 * Created by daniel.pacurici on 16.09.2015.
 */
module.exports = {
    sum: function (a, b) {
        return a + b;
    },
    createBoard: createBoard
};

function createBoard() {
    return [[1,0,0],[1,0,0],[0,0,0]];
}