// The Composite pattern concept
var LeafConcept = /** @class */ (function () {
    function LeafConcept(name) {
        // A Leaf can be added to a composite, but not a leaf
        this.referenceToParent = undefined;
        this.name = name;
    }
    LeafConcept.prototype.method = function () {
        var parent = this.referenceToParent
            ? this.referenceToParent.name
            : 'none';
        console.log("<Leaf>\t\tname:".concat(this.name, "\tParent:\t").concat(parent));
    };
    LeafConcept.prototype.detach = function () {
        'Detaching this leaf from its parent composite';
        if (this.referenceToParent) {
            this.referenceToParent["delete"](this);
        }
    };
    return LeafConcept;
}());
var CompositeConcept = /** @class */ (function () {
    function CompositeConcept(name) {
        this.name = name;
        this.components = [];
    }
    CompositeConcept.prototype.method = function () {
        var parent = this.referenceToParent
            ? this.referenceToParent.name
            : 'none';
        console.log("<Composite>\tname:".concat(this.name, "\tParent:\t").concat(parent, "\tComponents:").concat(this.components.length));
        this.components.forEach(function (component) {
            component.method();
        });
    };
    CompositeConcept.prototype.attach = function (component) {
        // Detach leaf / composite from any current parent reference and
        // then set the parent reference to this composite
        component.detach();
        component.referenceToParent = this;
        this.components.push(component);
    };
    CompositeConcept.prototype["delete"] = function (component) {
        // Removes leaf/composite from this composite this.components
        var index = this.components.indexOf(component);
        if (index > -1) {
            this.components.splice(index, 1);
        }
    };
    CompositeConcept.prototype.detach = function () {
        // Detaching this composite from its parent composite
        if (this.referenceToParent) {
            this.referenceToParent["delete"](this);
            this.referenceToParent = undefined;
        }
    };
    return CompositeConcept;
}());
// The Client
var LEAF_A = new Leaf('leaf-a');
var LEAF_B = new Leaf('leaf-b');
var COMPOSITE_1 = new Composite('comp-1');
var COMPOSITE_2 = new Composite('comp-2');
// Attach LEAF_A to COMPOSITE_1
COMPOSITE_1.attach(LEAF_A);
// Instead, attach LEAF_A to COMPOSITE_2
COMPOSITE_2.attach(LEAF_A);
// Attach COMPOSITE1 to COMPOSITE_2
COMPOSITE_2.attach(COMPOSITE_1);
// Run the methods that
LEAF_B.method(); // not in any composites
COMPOSITE_2.method(); // COMPOSITE_2 contains both COMPOSITE_1 and LEAF_A
