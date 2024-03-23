let expect = require('chai').expect;
let rgbChecker = require('../06.RGBToHex').rgbToHexColor;

describe('rgbChecker(colors)', function () {

    it('should return right color', () => {
        let expectedResult = '#0A141E';
        expect(rgbChecker(10,20,30)).equal(expectedResult);
    });

    describe('check red color', function () {
        it('should return undefined for red not integer', () => {
            expect(rgbChecker('red', 22, 33)).equal(undefined);
        });
        it('should return undefined for red under 0', () => {
            expect(rgbChecker(-1, 22, 33)).equal(undefined);
        });
        it('should return undefined for red over 255', () => {
            expect(rgbChecker(256, 22, 33)).equal(undefined);
        });
    })
    describe('check green color', function () {
        it('should return undefined for green not integer', () => {
            expect(rgbChecker(1, 'green', 33)).equal(undefined);
        });
        it('should return undefined for green under 0', () => {
            expect(rgbChecker(22, -1, 33)).equal(undefined);
        });
        it('should return undefined for green over 255', () => {
            expect(rgbChecker(22, 256, 33)).equal(undefined);
        });
    })
    describe('check blue color', function () {
        it('should return undefined for blue not integer', () => {
            expect(rgbChecker(22, 22, 'blue')).equal(undefined);
        });
        it('should return undefined for blue under 0', () => {
            expect(rgbChecker(22, 22, -1)).equal(undefined);
        });
        it('should return undefined for blue over 255', () => {
            expect(rgbChecker(22, 22, 256)).equal(undefined);
        });
    })

})
