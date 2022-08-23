"use strict";
exports.__esModule = true;
var add_1 = require("./add");
var numeral_1 = require("./numeral");
var roman_numeral_1 = require("./roman-numeral");
var subtract_1 = require("./subtract");
var Parser = /** @class */ (function () {
    function Parser() {
    }
    // Dynamically create the Abstract Syntax Tree
    Parser.parse = function (sentence) {
        // Create the AST from the sentence
        var tokens = sentence.split(' ');
        var tree = []; // Abstract Syntax Tree
        while (tokens.length > 1) {
            var leftExpression = Parser.decideLeftExpression(tree, tokens);
            // get the operator, make the token list shorter
            var operator = tokens.shift();
            var right = tokens[0];
            if (!Number(right)) {
                tree.push(new roman_numeral_1["default"](right));
                if (operator === '-') {
                    tree.push(new subtract_1["default"](leftExpression, tree[tree.length - 1]));
                }
                if (operator === '+') {
                    tree.push(new add_1["default"](leftExpression, tree[tree.length - 1]));
                }
            }
            else {
                var rightExpression = new numeral_1["default"](right);
                if (!tree.length) {
                    // Empty Data Structures return False by default
                    if (operator === '-') {
                        tree.push(new subtract_1["default"](leftExpression, rightExpression));
                    }
                    if (operator === '+') {
                        tree.push(new add_1["default"](leftExpression, rightExpression));
                    }
                }
                else {
                    if (operator === '-') {
                        tree.push(new subtract_1["default"](tree[tree.length - 1], rightExpression));
                    }
                    if (operator === '+') {
                        tree.push(new add_1["default"](tree[tree.length - 1], rightExpression));
                    }
                }
            }
        }
        return tree.pop();
    };
    Parser.decideLeftExpression = function (tree, tokens) {
        // On the First iteration, the left expression can be either a
        // number or roman numeral.Every consecutive expression is
        // reference to an existing AST row
        var left = tokens.shift();
        var leftExpression;
        if (!tree.length) {
            // only applicable if first round
            if (!Number(left)) {
                // if 1st token a roman numeral
                tree = [];
                tree.push(new roman_numeral_1["default"](left));
                leftExpression = tree[tree.length - 1];
            }
            else {
                leftExpression = new numeral_1["default"](left);
            }
            return leftExpression;
        }
        else {
            leftExpression = tree[tree.length - 1];
            return leftExpression;
        }
    };
    return Parser;
}());
exports["default"] = Parser;
