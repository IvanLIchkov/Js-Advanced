const {isSymmetric} = require("../05.checkForSymmetry");
let expect = require('chai').expect;

describe("Main test", function () {
    it('Should return false for not array', () => {
        let notArr = [-1,2,1];
        expect(isSymmetric(notArr)).equal(false)
    });
    it('should return true fr symmetric arr', () => {
        let symmetricArr = [1,2,3,3,2,1];
        expect(isSymmetric(symmetricArr)).equal(true);
    });
    it('should return false in non symmetric arr', () => {
        let nonSymmetricArr = [5,'hi',{a:5},new Date(),{a:5},'hi',5];
        expect((isSymmetric(nonSymmetricArr))).equal(false);
    });
    it('should return true when length is odd', () => {
        let symmetricArr = [1];
        expect((isSymmetric(symmetricArr))).equal(true);
    });
    it('should returns false for array-like arguments', () => {
        expect(isSymmetric(1,2,3,4)).equal(false);
    });
})
