"use strict";
// A Square Abstraction
exports.__esModule = true;
var Square = /** @class */ (function () {
    function Square(implementer) {
        this.implementer = implementer;
    }
    Square.prototype.draw = function () {
        this.implementer.drawImplementation();
    };
    return Square;
}());
exports["default"] = Square;
