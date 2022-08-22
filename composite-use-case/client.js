"use strict";
// A use case of the composite pattern.
exports.__esModule = true;
var file_1 = require("./file");
var folder_1 = require("./folder");
var FILESYSTEM = new folder_1["default"]('root');
var FILE_1 = new file_1["default"]('abc.txt');
var FILE_2 = new file_1["default"]('123.txt');
FILESYSTEM.attach(FILE_1);
FILESYSTEM.attach(FILE_2);
var FOLDER_A = new folder_1["default"]('folder_a');
FILESYSTEM.attach(FOLDER_A);
var FILE_3 = new file_1["default"]('xyz.txt');
FOLDER_A.attach(FILE_3);
var FOLDER_B = new folder_1["default"]('folder_b');
var FILE_4 = new file_1["default"]('456.txt');
FOLDER_B.attach(FILE_4);
FILESYSTEM.attach(FOLDER_B);
FILESYSTEM.dir('');
// now move FOLDER_A and its contents to FOLDER_B
console.log();
FOLDER_B.attach(FOLDER_A);
FILESYSTEM.dir('');
