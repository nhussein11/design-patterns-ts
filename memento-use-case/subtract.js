"use strict";
exports.__esModule = true;
var Subtract = /** @class */ (function () {
    function Subtract(left, right) {
        this.left = left;
        this.right = right;
    }
    Subtract.prototype.interpret = function () {
        return this.left.interpret() - this.right.interpret();
    };
    return Subtract;
}());
exports["default"] = Subtract;
