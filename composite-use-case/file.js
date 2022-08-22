"use strict";
exports.__esModule = true;
var File = /** @class */ (function () {
    function File(name) {
        this.referenceToParent = undefined;
        this.name = name;
    }
    File.prototype.dir = function (indent) {
        console.log("".concat(indent, "<FILE> ").concat(this.name));
    };
    File.prototype.detach = function () {
        'Detaching this leaf from its parent composite';
        if (this.referenceToParent) {
            this.referenceToParent["delete"](this);
        }
    };
    return File;
}());
exports["default"] = File;
