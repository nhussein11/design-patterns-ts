"use strict";
exports.__esModule = true;
var Folder = /** @class */ (function () {
    function Folder(name) {
        this.name = name;
        this.components = [];
    }
    Folder.prototype.dir = function (indent) {
        console.log("".concat(indent, "<DIR>  ").concat(this.name));
        this.components.forEach(function (component) {
            component.dir(indent + '..');
        });
    };
    Folder.prototype.attach = function (component) {
        // Detach leaf / composite from any current parent reference and
        // then set the parent reference to this composite
        component.detach();
        component.referenceToParent = this;
        this.components.push(component);
    };
    Folder.prototype["delete"] = function (component) {
        // Removes leaf/composite from this composite this.components
        var index = this.components.indexOf(component);
        if (index > -1) {
            this.components.splice(index, 1);
        }
    };
    Folder.prototype.detach = function () {
        // Detaching this composite from its parent composite
        if (this.referenceToParent) {
            this.referenceToParent["delete"](this);
            this.referenceToParent = undefined;
        }
    };
    return Folder;
}());
exports["default"] = Folder;
