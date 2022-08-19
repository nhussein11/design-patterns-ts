// Decorator Concept Sample Code

interface IComponent {
    method(): string
}

class Component implements IComponent {
    method(): string {
        return 'Component Method'
    }
}

class MyDecorator implements IComponent {
    private object: IComponent

    constructor(object: IComponent) {
        this.object = object
    }

    method(): string {
        return `Decorator Method(${this.object.method()})`
    }
}

// The Client
const COMPONENT = new Component()
console.log(COMPONENT.method())

// The component can be decorated
const Decorated = new MyDecorator(COMPONENT)
console.log(Decorated.method())

// The decorated component can be decorated again
const Decorated2 = new MyDecorator(Decorated)
console.log(Decorated2.method())
