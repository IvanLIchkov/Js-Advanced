const {chooseYourCar} = require('../chooseYourCar');
let expect = require('chai').expect;


describe('testing choose car functionality ', function () {

    describe('Testing choosing type', function () {
        it('should throw error for year lower than', () => {
            expect(() =>chooseYourCar.choosingType('Sedan', 'Blue', 1899)).throw('Invalid Year!')
        });
        it('should throw error for year bigger than', () => {
            expect(() =>chooseYourCar.choosingType('Sedan', 'Blue', 2023)).throw('Invalid Year!')
        });
        it('should throw error for invalid type', () => {
            expect(() =>chooseYourCar.choosingType('Bus', 'Blue', 2021)).throw(`This type of car is not what you are looking for.`)
        });
        it('should return valid output for car over 2010', () => {
            expect( chooseYourCar.choosingType('Sedan', 'Blue', 2021)).equal('This Blue Sedan meets the requirements, that you have.')
        });
        it('should return valid output for car older than 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'Blue', 2009)).equal('This Sedan is too old for you, especially with that Blue color.')
        });
    })

    describe('Testing brand functionality', function () {
        it('should return error for not array ', () => {
            expect(() => chooseYourCar.brandName('Not arr', 1)).to.throw('Invalid Information!');
        });
        it('should return error for not number ', () => {
            expect(() => chooseYourCar.brandName(['brand'], 'Not Number')).to.throw('Invalid Information!');
        });
        it('should return error for index lower than 0  ', () => {
            expect(() => chooseYourCar.brandName(['brand'], -1)).to.throw('Invalid Information!');
        });
        it('should return error for bigger index than brands  arr ', () => {
            expect(() => chooseYourCar.brandName(['brand1', 'brand2'], 2)).to.throw('Invalid Information!');
        });
        it('should return brands names separated with coma', () => {
            let arr  = ['brand1', 'brand2', "brand3", 'brand4', 'brand5', "brand6"]
            let expectOutput = ['brand1', "brand2", 'brand4', 'brand5', "brand6"].join(', ');
            expect(chooseYourCar.brandName(arr, 2)).equal(expectOutput);
        });
    })
    describe('Testing car fuel consumption', function () {
        it('should return error for invalid data', () => {
            expect(() => chooseYourCar.carFuelConsumption('Not number', 10)).throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(10, 'Not number')).throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(-1, 10)).throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(10, -1)).throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(0, 10)).throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(10, 0)).throw("Invalid Information!");

        });
        it('should return the car is efficient', () => {
                expect('The car is efficient enough, it burns 6.00 liters/100 km.').equal(chooseYourCar.carFuelConsumption(100, 6));
        });
        it('should return the car is not efficient', () => {
            expect('The car is efficient enough, it burns 7.00 liters/100 km.').equal(chooseYourCar.carFuelConsumption(100, 7));
        });
    })
})
