// Mediator Concept Sample Code
var Mediator = /** @class */ (function () {
    function Mediator() {
        this.colleague1 = new Colleague1();
        this.colleague2 = new Colleague2();
    }
    Mediator.prototype.colleague1Method = function () {
        // Calls the method provided by Colleague1
        return this.colleague1.method1();
    };
    Mediator.prototype.colleague2Method = function () {
        // Calls the method provided by Colleague2
        return this.colleague2.method2();
    };
    return Mediator;
}());
var Colleague1 = /** @class */ (function () {
    function Colleague1() {
    }
    // This Colleague provides data for Colleague2
    Colleague1.prototype.method1 = function () {
        return 'Here is the Colleague1 specific data you asked for';
    };
    return Colleague1;
}());
var Colleague2 = /** @class */ (function () {
    function Colleague2() {
    }
    // This Colleague provides data for Colleague1
    Colleague2.prototype.method2 = function () {
        return 'Here is the Colleague2 specific data you asked for';
    };
    return Colleague2;
}());
// The Client
var MEDIATOR = new Mediator();
// Colleague1 wants some data from Colleague2
var DATA = MEDIATOR.colleague2Method();
console.log("COLLEAGUE1 <--> ".concat(DATA));
// Colleague2 wants some data from Colleague1
DATA = MEDIATOR.colleague1Method();
console.log("COLLEAGUE2 <--> ".concat(DATA));
