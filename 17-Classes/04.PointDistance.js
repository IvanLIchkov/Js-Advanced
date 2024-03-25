class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    static distance(a,b){
        const x = b.x - a.x;
        const y = b.y - a.y;

        return Math.sqrt(x ** 2 + y ** 2);
    }
}
// const p1 = new Point(0,0);
// const p2 = new Point(3,4);
//
// const dist = Point.distance(p1,p2);
//
// console.log(dist)
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
