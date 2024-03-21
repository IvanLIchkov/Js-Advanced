let expect = require('chai').expect;
let sum = require('../04.SumOfNumbers').sum;

describe("sum(arr) - sum array of numbers", function (){
    it("Should return 3 for [1,2]", function (){
        let expectedSum = 3;
        let actual = sum([1,2]);
        expect(actual).to.be.equal(expectedSum);
    });
    it('should return 1 for [1]', () => {
        let expectedSum = 1;
        let actual = sum([1]);
        expect(actual).to.be.equal(expectedSum);
    });

    it('should return 0 for empty array', () => {
        let expectedSum = 0;
        let actual = sum([]);
        expect(actual).to.be.equal(expectedSum);
    });
})
