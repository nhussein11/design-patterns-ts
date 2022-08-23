"use strict";
// The Subject that all components will stay synchronized with
exports.__esModule = true;
var Mediator = /** @class */ (function () {
    function Mediator() {
        this.components = new Set();
    }
    Mediator.prototype.add = function (component) {
        // Add components
        this.components.add(component);
    };
    Mediator.prototype.notify = function (message, originator) {
        // Add components except for the originator component
        this.components.forEach(function (component) {
            if (component !== originator) {
                component.receive(message);
            }
        });
    };
    return Mediator;
}());
exports["default"] = Mediator;
