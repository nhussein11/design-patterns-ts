// The Command Pattern Concept
var My_Invoker = /** @class */ (function () {
    function My_Invoker() {
        this.commands = {};
    }
    My_Invoker.prototype.register = function (commandName, command) {
        // Register commands in the Invoker
        this.commands[commandName] = command;
    };
    My_Invoker.prototype.execute = function (commandName) {
        // Execute any registered commands
        if (commandName in this.commands) {
            this.commands[commandName].execute();
        }
        else {
            console.log("Command [".concat(commandName, "] not recognised"));
        }
    };
    return My_Invoker;
}());
var My_Receiver = /** @class */ (function () {
    function My_Receiver() {
    }
    // The Receiver
    My_Receiver.prototype.runCommand1 = function () {
        // A set of instructions to run
        console.log('Executing Command 1');
    };
    My_Receiver.prototype.runCommand2 = function () {
        // A set of instructions to run
        console.log('Executing Command 2');
    };
    return My_Receiver;
}());
var Command1 = /** @class */ (function () {
    function Command1(receiver) {
        this.receiver = receiver;
    }
    Command1.prototype.execute = function () {
        this.receiver.runCommand1();
    };
    return Command1;
}());
var Command2 = /** @class */ (function () {
    function Command2(receiver) {
        this.receiver = receiver;
    }
    Command2.prototype.execute = function () {
        this.receiver.runCommand2();
    };
    return Command2;
}());
// The Client
// Create a receiver
var RECEIVER = new My_Receiver();
// Create Commands
var COMMAND1 = new Command1(RECEIVER);
var COMMAND2 = new Command2(RECEIVER);
// Register the commands with the invoker
var INVOKER = new My_Invoker();
INVOKER.register('1', COMMAND1);
INVOKER.register('2', COMMAND2);
// Execute the commands that are registered on the Invoker
INVOKER.execute('1');
INVOKER.execute('2');
INVOKER.execute('1');
INVOKER.execute('2');
