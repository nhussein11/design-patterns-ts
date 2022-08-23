"use strict";
exports.__esModule = true;
var Numeral = /** @class */ (function () {
    function Numeral(value) {
        this.value = typeof value === 'string' ? parseInt(value) : value;
    }
    Numeral.prototype.interpret = function () {
        return this.value;
    };
    return Numeral;
}());
exports["default"] = Numeral;
