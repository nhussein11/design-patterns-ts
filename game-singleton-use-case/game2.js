"use strict";
// A Game Class that uses the Leaderboard Singleton
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game2 = void 0;
var leaderboard_1 = require("./leaderboard");
var Game2 = /** @class */ (function () {
    function Game2() {
        this.leaderboard = new leaderboard_1.default();
    }
    Game2.prototype.addWinner = function (position, name) {
        this.leaderboard.addWinner(position, name);
    };
    return Game2;
}());
exports.Game2 = Game2;
