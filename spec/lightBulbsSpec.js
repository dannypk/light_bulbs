/**
 * Created by daniel.pacurici on 16.09.2015.
 */
var bulbs = require('../app/light_bulbs.js');

describe("When value is yellow", function () {
    var board;
    beforeEach(function () {
        board = new bulbs.Board();
    });

    describe("we press the button", function () {
        var row, col;

        beforeEach(function () {
            row = 1;
            col = 1;
            board.shouldToggle(row, col);
        });

        it("should toggle the current value", function () {
            expect(board.table[row][col]).toBe(1);
        });

        describe("when value isn't the last row", function () {
            it("should toggle the bottom value as well", function () {
                expect(board.table[row + 1][col]).toBe(1);
            })
        });

        describe("when value isn't the first column", function () {
            it("should toggle the top value", function () {
                expect(board.table[row - 1][col]).toBe(1);
            })
        });

        describe("when value isn't the first column", function () {
            it("should toggle the left value", function () {
                expect(board.table[row][col - 1]).toBe(0);
            })
        });

        describe("when value isn't the last column", function () {
            it("should toggle the right value", function () {
                expect(board.table[row][col + 1]).toBe(1);
            })
        });

        /* TRY TO TEST WHEN VALUE IS FIRST/LAST ROW/COL...
         describe("when value is the last column", function () {
         it("expect error when toggle the right value", function () {
         row = 1;
         col = 2;
         board.toggle(row, col);
         console.log(board);
         expect(board.table[row][col + 1]).toBe(1);
         })
         });
         */
    })
});

describe("When parsing the array lines", function () {
    var board;
    beforeEach(function () {
        board = new bulbs.Board();
    });

    describe("When yellow value is encountered", function () {
        beforeEach(function () {
            spyOn(board, 'toggle');
            board.shouldToggle(1, 1);
        });

        it('toggles', function () {
            expect(board.toggle).toHaveBeenCalled();
        });
    });

    describe("When black value is encountered", function () {
        beforeEach(function () {
            spyOn(board, 'toggle');
            board.shouldToggle(0, 0);
        });

        it('it should not toggle', function () {
            expect(board.toggle).not.toHaveBeenCalled();
        });
    });
});

describe("When array it's given", function () {
    var board;
    beforeEach(function () {
        board = new bulbs.Board();
    });


    describe("And all bulbs are turned off", function () {
        beforeEach(function () {
            board.table = [[1, 1], [1, 1]]
        });
        it("should return true", function () {
            expect(board.isTurnedOff()).toBe(true);
        });
    });
});















