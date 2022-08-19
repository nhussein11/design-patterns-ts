"use strict";
exports.__esModule = true;
var CubeB = /** @class */ (function () {
    function CubeB() {
    }
    CubeB.prototype.create = function (top_left_front, bottom_right_back) {
        // if not busy, then manufacture a cube with coords
        var now = Date.now();
        if (now > CubeB.last_time + 3000) {
            console.log("Company B built Cube with coords [".concat(top_left_front[0], ",").concat(top_left_front[1], ",").concat(top_left_front[2], "],[").concat(bottom_right_back[0], ",").concat(bottom_right_back[1], ",").concat(bottom_right_back[2], "]"));
            CubeB.last_time = now;
            return true;
        }
        else {
            return false; // busy
        }
    };
    CubeB.last_time = Date.now();
    return CubeB;
}());
exports["default"] = CubeB;
