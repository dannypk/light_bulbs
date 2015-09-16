/**
 * Created by daniel.pacurici on 16.09.2015.
 */
module.exports = {
    sum: function (a, b) {
        return a + b;
    },
    init: init
};

function init(n) {
    if (n === 0) return undefined;

    var game = [n];
    for (var i = 0; i < n; i++) {
        game[i] = [n];
        for (var j = 0; j < n; j++) {
            game[i][j] = Math.round(Math.random());
        }
    }
    return game;
}