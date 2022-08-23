"use strict";
// The Light. The Receiver
exports.__esModule = true;
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.turnOn = function () {
        // A set of instructions to run
        console.log('Light turned ON');
    };
    Light.prototype.turnOff = function () {
        // A set of instructions to run
        console.log('Light turned OFF');
    };
    return Light;
}());
exports["default"] = Light;
