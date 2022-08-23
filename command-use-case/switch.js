"use strict";
// The Switch (Invoker) Class.
exports.__esModule = true;
var Switch = /** @class */ (function () {
    function Switch() {
        this.commands = {};
        this.history = [];
    }
    Switch.prototype.showHistory = function () {
        // Print the history of each time a command was invoked"
        this.history.forEach(function (row) {
            console.log("".concat(row[0], " : ").concat(row[1]));
        });
    };
    Switch.prototype.register = function (commandName, command) {
        // Register commands in the Invoker
        this.commands[commandName] = command;
    };
    Switch.prototype.execute = function (commandName) {
        // Execute any registered commands
        if (commandName in this.commands) {
            this.commands[commandName].execute();
            this.history.push([Date.now(), commandName]);
        }
        else {
            console.log("Command [".concat(commandName, "] not recognised"));
        }
    };
    Switch.prototype.replayLast = function (numberOfCommands) {
        var _this = this;
        // Replay the last N commands
        var commands = this.history.slice(this.history.length - numberOfCommands, this.history.length);
        commands.forEach(function (command) {
            _this.commands[command[1]].execute();
            // or if you wanted to also record this replay in history
            // this.execute(command[1])
        });
    };
    return Switch;
}());
exports["default"] = Switch;
