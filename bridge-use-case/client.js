"use strict";
// Bridge Pattern Concept Sample Code
exports.__esModule = true;
var circle_implementer_1 = require("./circle-implementer");
var square_implementer_1 = require("./square-implementer");
var circle_1 = require("./circle");
var square_1 = require("./square");
var CIRCLE = new circle_1["default"](new circle_implementer_1["default"]());
CIRCLE.draw();
var SQUARE = new square_1["default"](new square_implementer_1["default"]());
SQUARE.draw();
