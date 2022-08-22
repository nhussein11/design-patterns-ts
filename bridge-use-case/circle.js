"use strict";
// A Circle Abstraction
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle(implementer) {
        this.implementer = implementer;
    }
    Circle.prototype.draw = function () {
        this.implementer.drawImplementation();
    };
    return Circle;
}());
exports["default"] = Circle;
