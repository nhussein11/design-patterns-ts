"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var numeral_1 = require("./numeral");
var RomanNumeral = /** @class */ (function () {
    function RomanNumeral(romanNumeral) {
        this.romanNumeral = romanNumeral;
        this.context = [romanNumeral, 0];
    }
    RomanNumeral.prototype.interpret = function () {
        RomanNumeral1000.interpret(this.context);
        RomanNumeral100.interpret(this.context);
        RomanNumeral10.interpret(this.context);
        RomanNumeral1.interpret(this.context);
        return new numeral_1["default"](this.context[1]).interpret();
    };
    return RomanNumeral;
}());
exports["default"] = RomanNumeral;
var RomanNumeral1 = /** @class */ (function (_super) {
    __extends(RomanNumeral1, _super);
    function RomanNumeral1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RomanNumeral1.interpret = function (context) {
        if (context[0].length === 0) {
            return new numeral_1["default"](context[1]).interpret();
        }
        if (context[0].substring(0, 2) === this.nine) {
            context[1] += 9 * this.multiplier;
            context[0] = context[0].substring(2);
        }
        else if (context[0].substring(0, 1) === this.five) {
            context[1] += 5 * this.multiplier;
            context[0] = context[0].substring(1);
        }
        else if (context[0].substring(0, 2) === this.four) {
            context[1] += +(4 * this.multiplier);
            context[0] = context[0].substring(2);
        }
        while (context[0].length > 0 && context[0][0] === this.one) {
            context[1] += 1 * this.multiplier;
            context[0] = context[0].substring(1);
        }
        return new numeral_1["default"](context[1]).interpret();
    };
    // Roman Numerals 1 - 9
    RomanNumeral1.one = 'I';
    RomanNumeral1.four = 'IV';
    RomanNumeral1.five = 'V';
    RomanNumeral1.nine = 'IX';
    RomanNumeral1.multiplier = 1;
    return RomanNumeral1;
}(RomanNumeral));
var RomanNumeral10 = /** @class */ (function (_super) {
    __extends(RomanNumeral10, _super);
    function RomanNumeral10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Roman Numerals 10 - 99
    RomanNumeral10.one = 'X';
    RomanNumeral10.four = 'XL';
    RomanNumeral10.five = 'L';
    RomanNumeral10.nine = 'XC';
    RomanNumeral10.multiplier = 10;
    return RomanNumeral10;
}(RomanNumeral1));
var RomanNumeral100 = /** @class */ (function (_super) {
    __extends(RomanNumeral100, _super);
    function RomanNumeral100() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Roman Numerals 100 - 999
    RomanNumeral100.one = 'C';
    RomanNumeral100.four = 'CD';
    RomanNumeral100.five = 'D';
    RomanNumeral100.nine = 'CM';
    RomanNumeral100.multiplier = 100;
    return RomanNumeral100;
}(RomanNumeral1));
var RomanNumeral1000 = /** @class */ (function (_super) {
    __extends(RomanNumeral1000, _super);
    function RomanNumeral1000() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Roman Numerals 1000 - 3999
    RomanNumeral1000.one = 'M';
    RomanNumeral1000.four = '';
    RomanNumeral1000.five = '';
    RomanNumeral1000.nine = '';
    RomanNumeral1000.multiplier = 1000;
    return RomanNumeral1000;
}(RomanNumeral1));
