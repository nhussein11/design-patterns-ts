// The Interpreter Pattern Concept
var Numeral = /** @class */ (function () {
    function Numeral(value) {
        this.value = parseInt(value);
    }
    Numeral.prototype.interpret = function () {
        return this.value;
    };
    return Numeral;
}());
var Add = /** @class */ (function () {
    function Add(left, right) {
        this.left = left;
        this.right = right;
    }
    Add.prototype.interpret = function () {
        return this.left.interpret() + this.right.interpret();
    };
    return Add;
}());
var Subtract = /** @class */ (function () {
    function Subtract(left, right) {
        this.left = left;
        this.right = right;
    }
    Subtract.prototype.interpret = function () {
        return this.left.interpret() - this.right.interpret();
    };
    return Subtract;
}());
// The Client
// The sentence complies with a simple grammar of
// Number -> Operator -> Number -> etc,
var SENTENCE = '5 + 4 - 3 + 7 - 2';
console.log(SENTENCE);
// Split the sentence into individual expressions that will be added to
// an Abstract Syntax Tree(AST) as Terminal and Non - Terminal expressions
var TOKENS = SENTENCE.split(' ');
console.log(JSON.stringify(TOKENS));
// Manually Creating an Abstract Syntax Tree from the tokens
var AST = []; // An array of AbstractExpressions
AST.push(new Add(new Numeral(TOKENS[0]), new Numeral(TOKENS[2]))); // 5 + 4
AST.push(new Subtract(AST[0], new Numeral(TOKENS[4]))); // ^ - 3
AST.push(new Add(AST[1], new Numeral(TOKENS[6]))); // ^ + 7
AST.push(new Subtract(AST[2], new Numeral(TOKENS[8]))); // ^ - 2
// Use the final AST row as the root node.
var AST_ROOT = AST.pop();
// Interpret recursively through the full AST starting from the root.
console.log(AST_ROOT.interpret());
// Print out a representation of the AST_ROOT
console.dir(AST_ROOT, { depth: null });
