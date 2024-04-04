let expect = require('chai').expect
const {movieTheater} = require('../03. Movie Theater');

describe("Tests …", function() {
    describe("Age restrictions", function() {

        it("Should return all ages admitted", function() {
            expect(`All ages admitted to watch the movie`).equal(movieTheater.ageRestrictions('G'))
        });
        it('should return parental guidance ....', () => {
            expect(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`).equal(movieTheater.ageRestrictions('PG'))
        });
        it('should return restricted ....', () => {
            expect(`Restricted! Under 17 requires accompanying parent or adult guardian`).equal(movieTheater.ageRestrictions('R'))
        });
        it('should return no one under 17 ....', () => {
            expect(`No one under 17 admitted to watch the movie`).equal(movieTheater.ageRestrictions('NC-17'))
        });
        it('should return no age restrictions ....', () => {
            expect(`There are no age restrictions for this movie`).equal(movieTheater.ageRestrictions())
        });
    });

    describe('Money spend', function () {
        it('should calculate total cost with discount', () => {
            let expectedTotalCost = 136.40;
            expect(movieTheater.moneySpent(10, ['Nachos', "Nachos", 'Popcorn'], ['Soda', 'Water'])).equal(`The total cost for the purchase with applied discount is ${expectedTotalCost.toFixed(
                2
            )}`)
        });
        it('should calculate total cost without discount', () => {
            let expectedTotalCost = 35.50;
            expect(movieTheater.moneySpent(1, ['Nachos', "Nachos", 'Popcorn'], ['Soda', 'Water'])).equal(`The total cost for the purchase is ${expectedTotalCost.toFixed(2)}`)
        });
        it('should throw error for not number tickets', () => {
            expect(() => movieTheater.moneySpent('notNumber', ['hrana'], ['voda'])).to.throw('Invalid input')
        });
        it('should throw error for  not array of food', () => {
            expect(() => movieTheater.moneySpent(10, 'hrana', ['voda'])).to.throw('Invalid input')

        });
        it('should throw error for  not array of drinks', () => {
            expect(() => movieTheater.moneySpent(10, ['hrana'], 'voda')).to.throw('Invalid input')
        });
    })
    describe('Check reservation functionality', function () {
        it('should throw for not an array row', () => {
            expect(() => movieTheater.reservation('not an arr', 10)).to.throw('Invalid input')
        });
        it('should throw for not a number needed count', () => {
            expect(() => movieTheater.reservation([{rowNumber: 2, freeSeats: 5}], 'Not a number')).to.throw('Invalid input')
        });
        it('should return object with most of free seats', () => {

            let expectedOutput = 5;

            expect(movieTheater.reservation(([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }, { rowNumber: 5, freeSeats: 6 }, { rowNumber: 3, freeSeats: 1 }]), 5)).equal(expectedOutput);
        });
    })

    // TODO: …
});
