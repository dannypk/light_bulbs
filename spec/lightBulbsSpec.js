/**
 * Created by daniel.pacurici on 16.09.2015.
 */
var game = require('../app/light_bulbs.js');

describe("When value is yellow", function () {
    var bulb;
    beforeEach(function () {
        bulb = new game.Bulbs();
    });

    describe("we press the button", function () {
        var row, col;

        beforeEach(function () {
            row = 1;
            col = 1;
            bulb.shouldToggle(row, col);
        });

        it("should toggle the current value", function () {
            expect(bulb.board[row][col]).toBe(1);
        });

        describe("when value isn't the last row", function () {
            it("should toggle the bottom value as well", function () {
                expect(bulb.board[row + 1][col]).toBe(1);
            })
        });
        describe("when value isn't the first column", function () {
            it("should toggle the top value", function () {
                expect(bulb.board[row - 1][col]).toBe(1);
            })
        });

        describe("when value isn't the first column", function () {
            it("should toggle the left value", function () {
                expect(bulb.board[row][col - 1]).toBe(0);
            })
        });

        describe("when value isn't the last column", function () {
            it("should toggle the right value", function () {
                expect(bulb.board[row][col + 1]).toBe(1);
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
    var bulb;
    beforeEach(function () {
        bulb = new game.Bulbs();
    });

    describe("When yellow value is encountered", function () {
        beforeEach(function () {
            spyOn(bulb, 'toggle');
            bulb.shouldToggle(1, 1);
        });

        it('toggles', function () {
            expect(bulb.toggle).toHaveBeenCalled();
        });
    });

    describe("When black value is encountered", function () {
        beforeEach(function () {
            spyOn(bulb, 'toggle');
            bulb.shouldToggle(0, 0);
        });

        it('it should not toggle', function () {
            expect(bulb.toggle).not.toHaveBeenCalled();
        });
    });
});

describe("When board is given", function () {
    var bulb;
    beforeEach(function () {
        bulb = new game.Bulbs();
    });

    describe("And all bulbs are turned off", function () {
        beforeEach(function () {
            bulb.board = [[1, 1], [1, 1]]
        });
        it("should return true", function () {
            expect(bulb.isTurnedOff()).toBe(true);
        });
    });

    describe("And bulbs aren't turned off", function () {
        beforeEach(function () {
            bulb.toggle(0, 2);
            bulb.toggle(2, 1);
        });
        it("should turn off all the bulbs by manual toggling", function () {
            expect(bulb.isTurnedOff()).toBe(true);
        });
    });

    describe("And bulbs aren't turned off", function () {
        beforeEach(function () {
            //bad approach using prototype.
            //bulb.turnOff();
        });
        it("should turn off all the bulbs by script toggling", function () {
            expect(bulb.isTurnedOff()).toBe(false);
        });
    });
});















