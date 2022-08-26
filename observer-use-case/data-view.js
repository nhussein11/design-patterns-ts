export class BarGraphView {
    constructor(observable) {
        this.observable = observable;
        this.id = this.observable.subscribe(this);
    }
    notify(data) {
        console.log(`BarGraph, id:${this.id}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a Bar graph using data:${JSON.stringify(data)}`);
    }
    delete() {
        this.observable.unsubscribe(this.id);
    }
}
export class PieGraphView {
    constructor(observable) {
        this.observable = observable;
        this.id = this.observable.subscribe(this);
    }
    notify(data) {
        console.log(`PieGraph, id:${this.id}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a Pie graph using data:${data}`);
    }
    delete() {
        this.observable.unsubscribe(this.id);
    }
}
export class TableView {
    constructor(observable) {
        this.observable = observable;
        this.id = this.observable.subscribe(this);
    }
    notify(data) {
        console.log(`TableView, id:${this.id}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a Table using data:${JSON.stringify(data)}`);
    }
    delete() {
        this.observable.unsubscribe(this.id);
    }
}
