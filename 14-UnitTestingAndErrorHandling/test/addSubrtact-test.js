const {createCalculator} = require("../07.AddSubract");
let expect = require('chai').expect;

let calculator = require('../07.AddSubract').createCalculator;

describe('claculator', function () {
    let calc = null;

    beforeEach(() => {
        calc = createCalculator();
    })

    describe('number arguments', () =>{
        it('should return zero initial value', () => {
            expect(calc.get()).equal(0);
        });

        it('should add numbers', () => {
            calc.add(2);
            expect(calc.get()).equal(2);
        });

        it('should subtract numbers', () => {
            calc.subtract(2);
            expect(calc.get()).equal(-2);
        });
        it('should add more than one number', () => {
            calc.add(2);
            calc.add(3);
            expect(calc.get()).equal(5);
        });
        it('should add and subtract', () => {
            calc.subtract(1);
            calc.add(2);
            expect(calc.get()).equal(1);
        });
    })
    describe('String arguments', function () {
        it('should add numbers as strings', () => {
            calc.add('1');
            expect(calc.get()).equal(1);
        });
        it('should subtract numbers as string', () => {
            calc.subtract('1');
            expect(calc.get()).equal(-1);
        });
    })
    describe('test overloading', function () {
        it('should overload 1', () => {
            calc.add(23);
            expect(calc.get()).equal(23);
        });
        it('should overload 2', () => {
            calc.add(113);
            calc.add(231);
            expect(calc.get()).equal(344);
        });
        it('should overload 3', () => {
            calc.add(1);
            calc.add(2);
            calc.add(3);
            expect(calc.get()).equal(6);
        });
        it('should overload 4', () => {
            calc.add(1);
            calc.subtract('2');
            calc.add('2');
            calc.subtract(1)
            expect(calc.get()).equal(0);
        });
    })
})
