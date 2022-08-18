"use strict";
// Singleton Concept Sample Code
exports.__esModule = true;
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    function Singleton(id) {
        this.id = id;
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
    return Singleton;
}());
exports.Singleton = Singleton;
// The Client
// All uses of the singleton point to the same original object
var OBJECT1 = new Singleton(1); // setting its id property to 1
var OBJECT2 = new Singleton(2); // setting its id property to 2
console.log(OBJECT1 === OBJECT2); // = true
console.log(OBJECT1.id); // returns 1
console.log(OBJECT2.id); // returns 1
