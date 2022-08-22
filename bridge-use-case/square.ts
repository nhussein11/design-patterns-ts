// A Square Abstraction

import IShape from './ishape'
import IShapeImplementor from './ishape-implementer'

export default class Square implements IShape {
    private implementer: IShapeImplementor

    constructor(implementer: IShapeImplementor) {
        this.implementer = implementer
    }

    draw(): void {
        this.implementer.drawImplementation()
    }
}
