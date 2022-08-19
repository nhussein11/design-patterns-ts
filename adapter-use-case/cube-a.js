"use strict";
exports.__esModule = true;
var CubeA = /** @class */ (function () {
    function CubeA() {
    }
    CubeA.prototype.manufacture = function (width, height, depth) {
        // if not busy, then manufacture a cube with dimensions
        var now = Date.now();
        if (now > CubeA.last_time + 1500) {
            console.log("Company A built Cube with dimensions ".concat(width, "x").concat(height, "x").concat(depth));
            CubeA.last_time = now;
            return true;
        }
        return false; // busy
    };
    CubeA.last_time = Date.now();
    return CubeA;
}());
exports["default"] = CubeA;
