"use strict";
// The Product
exports.__esModule = true;
var House = /** @class */ (function () {
    function House() {
        this.doors = 0;
        this.windows = 0;
        this.wallMaterial = '';
        this.buildingType = '';
    }
    House.prototype.construction = function () {
        return "This is a ".concat(this.wallMaterial, " ").concat(this.buildingType, " with ").concat(this.doors, " door(s) and ").concat(this.windows, " window(s).");
    };
    return House;
}());
exports["default"] = House;
