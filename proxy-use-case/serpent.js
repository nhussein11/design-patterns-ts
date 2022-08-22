import Leopard from './leopard';
import Lion from './lion';
export default class Serpent {
    constructor() {
        // Proteus in the form of a Serpent
        this.name = 'Serpent';
    }
    tellMeTheFuture() {
        // Proteus will change to something random
        if (Math.floor(Math.random() * 2)) {
            Object.assign(this, new Leopard());
            this.tellMeTheFuture = Leopard.prototype.tellMeTheFuture;
            this.tellMeYourForm = Leopard.prototype.tellMeYourForm;
        }
        else {
            Object.assign(this, new Lion());
            this.tellMeTheFuture = Lion.prototype.tellMeTheFuture;
            this.tellMeYourForm = Lion.prototype.tellMeYourForm;
        }
    }
    tellMeYourForm() {
        console.log(`I am the form of ${this.name}`);
    }
}
