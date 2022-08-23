// The Chain Of Responsibility Pattern Concept
var Successor1 = /** @class */ (function () {
    function Successor1() {
    }
    // A Concrete Handler
    Successor1.prototype.handle = function (payload) {
        console.log("Successor1 payload = ".concat(payload));
        var test = Math.floor(Math.random() * 2) + 1;
        if (test === 1) {
            payload += 1;
            payload = new Successor1().handle(payload);
        }
        else {
            payload -= 1;
            payload = new Successor2().handle(payload);
        }
        return payload;
    };
    return Successor1;
}());
var Successor2 = /** @class */ (function () {
    function Successor2() {
    }
    // A Concrete Handler
    Successor2.prototype.handle = function (payload) {
        console.log("Successor2 payload = ".concat(payload));
        var test = Math.floor(Math.random() * 3) + 1;
        if (test === 1) {
            payload = payload * 2;
            payload = new Successor1().handle(payload);
        }
        else if (test === 2) {
            payload = payload / 2;
            payload = new Successor2().handle(payload);
        } // if test = 3 then assign no further successors
        return payload;
    };
    return Successor2;
}());
var Chain = /** @class */ (function () {
    function Chain() {
    }
    // A chain with a default first successor
    Chain.prototype.start = function (payload) {
        // Setting the first successor that will modify the payload
        return new Successor1().handle(payload);
    };
    return Chain;
}());
// The Client
var CHAIN = new Chain();
var PAYLOAD = 1;
var OUT = CHAIN.start(PAYLOAD);
console.log("Finished result = ".concat(OUT));
