"use strict";
exports.__esModule = true;
// Adapter Example Use Case
var cube_a_1 = require("./cube-a");
var cube_b_adapter_1 = require("./cube-b-adapter");
var totalCubes = 5;
var counter = 0;
var manufactureCube = function () {
    // produce 5 cubes from which ever supplier can manufacture it first
    var width = Math.floor(Math.random() * 10) + 1;
    var height = Math.floor(Math.random() * 10) + 1;
    var depth = Math.floor(Math.random() * 10) + 1;
    var cube = new cube_a_1["default"]();
    var success = cube.manufacture(width, height, depth);
    if (success) {
        counter = counter + 1;
    }
    else {
        // try other manufacturer
        console.log('Company A was busy, so trying company B');
        cube = new cube_b_adapter_1["default"]();
        success = cube.manufacture(width, height, depth);
        if (success) {
            counter = counter + 1;
        }
        else {
            console.log('Company B was busy, so trying company A');
        }
    }
};
// wait some time between manufacturing each cube
var interval = setInterval(function () {
    manufactureCube();
    if (counter >= totalCubes) {
        clearInterval(interval);
        console.log("".concat(totalCubes, " cubes have been manufactured"));
    }
}, 1000);
