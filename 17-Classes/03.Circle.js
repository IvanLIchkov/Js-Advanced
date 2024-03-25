class Circle {
    constructor(radius) {
        this._radius = radius;
        this._diameter = radius * 2;
    }

    get radius() {
        return this._radius;
    }
    get diameter(){
        return this._diameter;
    }

    set diameter(value) {
        this._radius = value / 2;
        this._diameter = value;
    }
    get area(){
        return Math.PI * (this._radius * this._radius)
    }
}
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
