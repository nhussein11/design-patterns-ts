import { DataController } from './data-controller';
export class DataModel {
    constructor() {
        // A Subject (a.k.a Observable)
        this.observers = {};
        this.counter = 0;
        this.dataController = new DataController();
        this.dataController.subscribe(this);
    }
    subscribe(observer) {
        this.counter++;
        this.observers[this.counter] = observer;
        return this.counter;
    }
    unsubscribe(observerId) {
        delete this.observers[observerId];
    }
    notify(data) {
        Object.keys(this.observers).forEach((observer) => {
            this.observers[parseInt(observer)].notify(data);
        });
    }
}
