"use strict";
exports.__esModule = true;
var sentence_parser_1 = require("./sentence-parser");
// The sentence complies with a simple grammar of
// Number -> Operator -> Number -> etc,
var SENTENCE = '5 + IV - 3 + VII - 2';
// const SENTENCE = "4 + II + XII + 1 + 2"
// const SENTENCE = "5 + 4 - 3 + 7 - 2"
// const SENTENCE = "V + IV - III + 7 - II"
// const SENTENCE= "CIX + V"
// const SENTENCE = "CIX + V - 3 + VII - 2"
// const SENTENCE = "MMMCMXCIX - CXIX + MCXXII - MMMCDXII - XVIII - CCXXXV"
console.log(SENTENCE);
var AST_ROOT = sentence_parser_1["default"].parse(SENTENCE);
// Interpret recursively through the full AST starting from the root.
console.log(AST_ROOT.interpret());
// Print out a representation of the AST_ROOT
console.dir(AST_ROOT, { depth: null });
