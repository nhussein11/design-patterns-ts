"use strict";
// A Game Class that uses the Leaderboard Singleton
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game1 = void 0;
var leaderboard_1 = require("./leaderboard");
var Game1 = /** @class */ (function () {
    function Game1() {
        this.leaderboard = new leaderboard_1.default();
    }
    Game1.prototype.addWinner = function (position, name) {
        this.leaderboard.addWinner(position, name);
    };
    return Game1;
}());
exports.Game1 = Game1;
