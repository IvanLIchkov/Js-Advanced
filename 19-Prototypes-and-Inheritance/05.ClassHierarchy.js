function hierarchy(){

    class Figure {
        units;


        constructor(units) {
            this.changeUnits(units)
        }

        get area(){
        }

        changeUnits(units){
            if(units !== 'cm' && units !== undefined){
                this.units = units;
            }else{
                this.units = 'cm';
            }
        }
        toString(){
            return `Figures units: ${this.units}`
        }
        convert(units){
            if (units === 'mm'){
                return 10;
            }else if(units === 'm'){
                return 0.01;
            }
            return 1;
        }
    }

    class Circle extends Figure{
        radius;


        constructor(radius, units) {
            super(units);
            this.radius = radius * this.convert(units);
        }

        changeUnits(units) {
             this.radius = super.convert(units) * this.radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return super.toString()+ ` Area: ${this.area} - radius: ${this.radius}`;
        }
    }
    class Rectangle extends Figure{
        width;
        height;

        constructor(width, height, units) {
            super(units);
            this.width = width*this.convert(units);
            this.height = height * this.convert(units);
        }
        changeUnits(units) {
            this.width = super.convert(units) * this.width;
            this.height = super.convert(units) * this.height;
        }

        get area(){
            return this.width * this.height;
        }
        toString() {
            return super.toString()+ ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }
    let c = new Circle(5);
    console.log(c.area); // 78.53981633974483
    console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

    let r = new Rectangle(3, 4, 'mm');
    console.log(r.area); // 1200
    console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

    r.changeUnits('cm');
    console.log(r.area); // 12
    console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

    c.changeUnits('mm');
    console.log(c.area); // 7853.981633974483
    console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
    return{
        Figure,
        Circle,
        Rectangle
    }

}

hierarchy();
