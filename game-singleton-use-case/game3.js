"use strict";
// A Game Class that uses the Leaderboard Singleton
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game3 = void 0;
var leaderboard_1 = require("./leaderboard");
var Game3 = /** @class */ (function () {
    function Game3() {
        this.leaderboard = new leaderboard_1.default();
    }
    Game3.prototype.addWinner = function (position, name) {
        this.leaderboard.addWinner(position, name);
    };
    return Game3;
}());
exports.Game3 = Game3;
