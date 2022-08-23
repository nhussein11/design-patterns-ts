"use strict";
exports.__esModule = true;
var Add = /** @class */ (function () {
    function Add(left, right) {
        this.left = left;
        this.right = right;
    }
    Add.prototype.interpret = function () {
        return this.left.interpret() + this.right.interpret();
    };
    return Add;
}());
exports["default"] = Add;
