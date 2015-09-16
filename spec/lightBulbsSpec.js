/**
 * Created by daniel.pacurici on 16.09.2015.
 */
var bulbs = require('../app/light_bulbs.js');

describe("my first dummy test", function () {
    it("should check for dummy function to work and return the sum of 2+3 = 5", function () {
        var a = 2, b = 3;
        expect(bulbs.sum(a, b)).toBe(5);
    });
});

describe("When we initialize the game with n x n dimension", function () {

    beforeEach(function () {
        var size = 3,
            game;
    });

    it("should return undefined when size of n is 0", function () {
        size = 0;
        game = bulbs.init(size);
        expect(game).toBeUndefined();
    });

    it("should be a 2x dimensional of size n", function () {
        size = 1;
        game = bulbs.init(size);
        lengthOfRow = game.length;
        lengthOfCol = game[0].length;

        expect(lengthOfCol).toBe(lengthOfRow);
        expect(lengthOfCol).toBe(size);

    });

    it("should populate a 2 dimensional array with values of 0 and 1", function () {
        game = bulbs.init(3);
        expect(game[0][0]).not.toBeUndefined();
    });
});