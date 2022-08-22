// The Facade pattern concept
var SubSystemClassA = /** @class */ (function () {
    function SubSystemClassA() {
    }
    // A hypothetically complicated class
    SubSystemClassA.prototype.method = function () {
        return 'A';
    };
    return SubSystemClassA;
}());
var SubSystemClassB = /** @class */ (function () {
    function SubSystemClassB() {
    }
    // A hypothetically complicated class
    SubSystemClassB.prototype.method = function (value) {
        return value;
    };
    return SubSystemClassB;
}());
var SubSystemClassC = /** @class */ (function () {
    function SubSystemClassC() {
    }
    // A hypothetically complicated class
    SubSystemClassC.prototype.method = function (value) {
        return value;
    };
    return SubSystemClassC;
}());
var Facade2 = /** @class */ (function () {
    function Facade2() {
    }
    // A simplified facade offering the services of subsystems
    Facade2.prototype.subSystemClassA = function () {
        // Uses the subsystems method
        return new SubSystemClassA().method();
    };
    Facade2.prototype.subSystemClassB = function (value) {
        // Uses the subsystems method
        return new SubSystemClassB().method(value);
    };
    Facade2.prototype.subSystemClassC = function (value) {
        // Uses the subsystems method
        return new SubSystemClassC().method(value);
    };
    return Facade2;
}());
// The Client
// Calling potentially complicated subsystems directly
console.log(new SubSystemClassA().method());
console.log(new SubSystemClassB().method('B'));
console.log(new SubSystemClassC().method({ C: [1, 2, 3] }));
// or using the simplified facade instead
var FACADE = new Facade2();
console.log(FACADE.subSystemClassA());
console.log(FACADE.subSystemClassB('B'));
console.log(FACADE.subSystemClassC({ C: [1, 2, 3] }));
