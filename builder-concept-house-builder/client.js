"use strict";
// House Builder Example Code
exports.__esModule = true;
var igloo_director_1 = require("./igloo-director");
var castle_director_1 = require("./castle-director");
var houseboat_director_1 = require("./houseboat-director");
var IGLOO = igloo_director_1["default"].construct();
var CASTLE = castle_director_1["default"].construct();
var HOUSEBOAT = houseboat_director_1["default"].construct();
console.log(IGLOO.construction());
console.log(CASTLE.construction());
console.log(HOUSEBOAT.construction());
