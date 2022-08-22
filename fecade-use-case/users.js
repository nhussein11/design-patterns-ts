"use strict";
// A Singleton Dictionary of Users
exports.__esModule = true;
var reports_1 = require("./reports");
var wallets_1 = require("./wallets");
var Users = /** @class */ (function () {
    //SINGLETON
    function Users() {
        this.users = {};
        this.reports = new reports_1["default"]();
        this.wallets = new wallets_1["default"]();
        if (Users.instance) {
            return Users.instance;
        }
        Users.instance = this;
    }
    Users.prototype.registerUser = function (newUser) {
        // register a user
        if (!(newUser['user_name'] in this.users)) {
            // generate really complicated unique user_id.
            // Using the existing user_name as the id for simplicity
            var userId = newUser['user_name'];
            this.users[userId] = newUser;
            this.reports.logEvent("new user '".concat(userId, "' created"));
            // create a wallet for the new user
            this.wallets.createWallet(userId);
            // give the user a sign up bonus
            this.reports.logEvent("Give new user '".concat(userId, "' sign up bonus of 10"));
            this.wallets.adjustBalance(userId, 10);
            return userId;
        }
        return '';
    };
    Users.prototype.editUser = function (userId, user) {
        // do nothing. Not implemented yet
        console.log(userId);
        console.log(user);
        return false;
    };
    Users.prototype.changePwd = function (userId, password) {
        // do nothing. Not implemented yet
        console.log(userId);
        console.log(password);
        return false;
    };
    return Users;
}());
exports["default"] = Users;
