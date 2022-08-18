"use strict";
// A Leaderboard Singleton Class
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Leaderboard_table;
Object.defineProperty(exports, "__esModule", { value: true });
var Leaderboard = /** @class */ (function () {
    function Leaderboard() {
        _Leaderboard_table.set(this, {});
        if (Leaderboard.instance) {
            return Leaderboard.instance;
        }
        Leaderboard.instance = this;
    }
    Leaderboard.prototype.addWinner = function (position, name) {
        __classPrivateFieldGet(this, _Leaderboard_table, "f")[position] = name;
    };
    Leaderboard.prototype.print = function () {
        console.log('-----------Leaderboard-----------');
        for (var key in __classPrivateFieldGet(this, _Leaderboard_table, "f")) {
            console.log("|\t".concat(key, "\t|\t").concat(__classPrivateFieldGet(this, _Leaderboard_table, "f")[key], "\t|"));
        }
        console.log();
    };
    return Leaderboard;
}());
exports.default = Leaderboard;
_Leaderboard_table = new WeakMap();
