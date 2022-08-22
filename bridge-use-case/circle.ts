// A Circle Abstraction

import IShape from './ishape'
import IShapeImplementor from './ishape-implementer'

export default class Circle implements IShape {
    private implementer: IShapeImplementor

    constructor(implementer: IShapeImplementor) {
        this.implementer = implementer
    }

    draw(): void {
        this.implementer.drawImplementation()
    }
}
