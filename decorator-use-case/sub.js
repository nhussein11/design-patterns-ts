"use strict";
exports.__esModule = true;
var _Sub = /** @class */ (function () {
    function _Sub(val1, val2) {
        var left = Object.prototype.hasOwnProperty.call(val1, 'value')
            ? val1.value
            : val1;
        var right = Object.prototype.hasOwnProperty.call(val2, 'value')
            ? val2.value
            : val2;
        this.value = left - right;
    }
    return _Sub;
}());
function Sub(val1, val2) {
    return new _Sub(val1, val2);
}
exports["default"] = Sub;
