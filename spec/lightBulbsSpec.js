/**
 * Created by daniel.pacurici on 16.09.2015.
 */
var bulbs = require('../app/light_bulbs.js');

describe("When value is yellow", function () {
    var board;
    beforeEach(function () {
        board = new bulbs.board();
    });

    describe("we press the button", function () {
        var row, col;

        beforeEach(function () {
            row = 1;
            col = 2;
            board.toggle(row, col);
        });

        it("should toggle the current value", function () {
            expect(board.table[row][col]).toBe(1);
        })
    })
});