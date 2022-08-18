"use strict";
exports.__esModule = true;
var house_builder_1 = require("./house-builder");
var CastleDirector = /** @class */ (function () {
    function CastleDirector() {
    }
    CastleDirector.construct = function () {
        return new house_builder_1["default"]()
            .setBuildingType('Castle')
            .setWallMaterial('Sandstone')
            .setNumberDoors(100)
            .setNumberWindows(200)
            .getResult();
    };
    return CastleDirector;
}());
exports["default"] = CastleDirector;
