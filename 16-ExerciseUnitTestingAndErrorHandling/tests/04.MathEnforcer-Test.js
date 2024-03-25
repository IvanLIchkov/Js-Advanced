const expect = require('chai').expect;
const assert = require('chai').assert;

const {mathEnforcer} = require('../04.MathEnforcer');

describe('main test', function () {
    describe('Test invalid parameters', function (){
        const notNumberParameter = 'NotNumberParameter';

        it('should return undefined on addFive', () => {
            expect(mathEnforcer.addFive(notNumberParameter)).equal(undefined)
        });
        it('should return undefined on subtract', () => {
            expect(mathEnforcer.subtractTen(notNumberParameter)).equal(undefined)
        });
        it('should return undefined on sum', () => {
            expect(mathEnforcer.sum(notNumberParameter, 'OneMoreNotNumberParam')).equal(undefined)
        });
        it('should return undefined on sum for one invalid parameter', () => {
            expect(mathEnforcer.sum(notNumberParameter, 1)).equal(undefined)
            expect(mathEnforcer.sum(1, notNumberParameter)).equal(undefined)
        });
    })
    describe('Test right values', function () {
        const testNumber = 5;
        const  testNumber2 = 10;

        it('should addFiveCorrect', () => {
            const expectedNum = 10;
            expect(mathEnforcer.addFive(testNumber)).equal(expectedNum);
        });
        it('should subtract 10', () => {
            const expectedNum = -5;
            expect(mathEnforcer.subtractTen(testNumber)).equal(expectedNum);
        });

        it('should sum two numbers', () => {
            const expectedNum = 15;
            expect(mathEnforcer.sum(testNumber, testNumber2)).equal(expectedNum);
        });
    })
    describe("Test with negative numbers and floating point", function () {
        const negativeTestNumber = -5;
        const floatingPointNumber = 5.5555555;

        it('should return right result in addFive functionality', () => {
            expect(mathEnforcer.addFive(negativeTestNumber)).equal(0);
        });
        it('should return right result in subtractTen functionality', () => {
            expect(mathEnforcer.subtractTen(negativeTestNumber)).equal(-15);
        });
        it('should return right result in sum functionality', () => {
            expect(mathEnforcer.sum(negativeTestNumber, -15)).equal(-20);
            expect(mathEnforcer.sum(negativeTestNumber, 15)).equal(10);
        });
        it('should return result close to two decimal points', () => {
            // assert.closeTo(mathEnforcer.addFive(-4.22),-0.78,0.01)
            assert.closeTo(mathEnforcer.sum(-5, 3.22),-1.78,0.01);
        });
        it('should return result close to two decimal points', () => {
            // assert.closeTo(mathEnforcer.addFive(-4.22),-0.78,0.01)
            assert.closeTo(mathEnforcer.sum(5.22, 3.22),8.44,0.01);
        });
        it('should return result with floating decimal points', () => {
            assert.closeTo(mathEnforcer.subtractTen(3.14),-6.86,0.01);
        });
        it('should return result with floating decimal points', () => {
            assert.closeTo(mathEnforcer.addFive(1.14),6.14,0.01);
        });

    })
})
