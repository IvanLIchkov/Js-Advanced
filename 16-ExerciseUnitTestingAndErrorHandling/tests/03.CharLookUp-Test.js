let expect = require('chai').expect;
const {lookupChar} = require('../03.CharLookUp');

describe('Main test', function () {
    it('should return undefined for wrong type of string and index', () => {
        let wrongStringType = 123;
        let wrongIndexType = 'wrongNumberType';
        expect(lookupChar(wrongStringType, wrongIndexType)).equal(undefined);
        expect(lookupChar(wrongStringType, 1)).equal(undefined);
        expect(lookupChar("Test", wrongIndexType)).equal(undefined);
    });
    it('should return undefined for floating point number', () => {
        const testString = 'TestString'
        expect(lookupChar(testString, 2.1)).equal(undefined);
    });
    it('should return incorrect index for index ot of bounds', () => {
        const testString = 'TestString';
        const biggerNumber = testString.length+1;
        const negativeNumber = -1;
        expect(lookupChar(testString,biggerNumber)).equal('Incorrect index');
        expect(lookupChar(testString,negativeNumber)).equal('Incorrect index');
    });
    it('should return right character', () => {
        const testString = 'TestString';
        const testIndex = 1;
        const expectedChar = testString.charAt(testIndex);
        expect(lookupChar(testString, testIndex)).equal(expectedChar);
    });
})
