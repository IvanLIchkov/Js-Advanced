class Hex {
    value;
    constructor(value) {
        this.value = value;
    }

    valueOf(){
        return this.value;
    }
    toString(){
        return '0x' +  this.value.toString(16).toUpperCase();
    }
    plus(number){
        return new Hex(this.value + number)
    }
    minus(number){
        return new Hex(this.value - number)
    }
    parse(hexString) {
        if (hexString.startsWith("0x")) {
            hexString = hexString.slice(2);
        }
        return parseInt(hexString, 16);
    }
}
// let Hex = result;
let FF = new Hex(255);
let act = FF.toString();
console.log(act);
let exp = "0xFF";
let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
let act2 = a.plus(c).toString();
console.log(act2);

let exp2 = "0xA5";
let act3 = a.minus(b).toString();
console.log(act3);
let exp3 = "0x5".log
