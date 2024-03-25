let expect = require('chai').expect;
const {isOddOrEven} = require('../02.EvenOrOdd')

describe('Main test', function (){
    it('should return undefined for non String input', () => {
        expect(isOddOrEven(123)).equal(undefined);
    });
    it('should return even for even String input', () => {
        let evenString = 'It'
        expect(isOddOrEven(evenString)).equal('even');
    });
    it('should return odd for odd String input', () => {
        let oddString = 'Alo'
        expect(isOddOrEven(oddString)).equal('odd');
    });
})
