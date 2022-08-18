var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var UserBuilder = /** @class */ (function () {
    function UserBuilder(name) {
        this.user = new User(name);
    }
    UserBuilder.prototype.setAge = function (age) {
        this.user.age = age;
        return this;
    };
    UserBuilder.prototype.setPhone = function (phone) {
        this.user.phone = phone;
        return this;
    };
    UserBuilder.prototype.build = function () {
        return this.user;
    };
    return UserBuilder;
}());
var user = new UserBuilder('Nico')
    .setAge(15)
    .setPhone(155555)
    .build();
console.log(user);
