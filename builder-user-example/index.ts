class User {
    name: string;
    age: number;
    phone: number;

    constructor(name) {
        this.name = name;
    }
}

class UserBuilder {
    user: User;

    constructor(name: string) {
        this.user = new User(name);
    }

    setAge(age: number) {
        this.user.age = age;
        return this;
    }

    setPhone(phone: number) {
        this.user.phone = phone;
        return this;
    }

    build() {
        return this.user;
    }
}

let user = new UserBuilder('Nico')
    .setAge(15)
    .setPhone(155555)
    .build();

console.log(user);