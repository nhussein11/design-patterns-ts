// Decorator Concept Sample Code
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.method = function () {
        return 'Component Method';
    };
    return Component;
}());
var MyDecorator = /** @class */ (function () {
    function MyDecorator(object) {
        this.object = object;
    }
    MyDecorator.prototype.method = function () {
        return "Decorator Method(".concat(this.object.method(), ")");
    };
    return MyDecorator;
}());
// The Client
var COMPONENT = new Component();
console.log(COMPONENT.method());
// The component can be decorated
var Decorated = new MyDecorator(COMPONENT);
console.log(Decorated.method());
// The decorated component can be decorated again
var Decorated2 = new MyDecorator(Decorated);
console.log(Decorated2.method());
