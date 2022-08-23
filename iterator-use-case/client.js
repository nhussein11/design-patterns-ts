// The Iterator Pattern Concept
var NumberWheel = /** @class */ (function () {
    function NumberWheel() {
        this.index = 0;
    }
    NumberWheel.prototype.next = function () {
        // Return a new number next in the wheel
        this.index = this.index + 1;
        return (this.index * 2) % 11;
    };
    return NumberWheel;
}());
// The Client
var NUMBERWHEEL = new NumberWheel();
for (var i = 0; i < 22; i++) {
    console.log(NUMBERWHEEL.next() + ' ');
}
