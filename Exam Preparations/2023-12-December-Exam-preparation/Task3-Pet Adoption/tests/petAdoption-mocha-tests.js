

const petAdoptionAgency = require('../Task2-petAdoptionAgency').petAdoptionAgency;
const expect = require('chai').expect;

describe("Test pet adoption app", function () {
    describe('Is pet available tests', function (){
        it('should return error for invalid types', () => {
            expect(() => petAdoptionAgency.isPetAvailable(11, 10, true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable('Valid string', "not a number", true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable('Valid string', 10, "Invalid not boolean")).to.throw("Invalid input");
        });
        it('should return sorry for <= 0 count', () => {
            expect(`Sorry, there are no ${'Chow-Chow'}(s) available for adoption at the agency.`).to.equal(petAdoptionAgency.isPetAvailable('Chow-Chow',-1, true));
            expect(`Sorry, there are no ${'Chow-Chow'}(s) available for adoption at the agency.`).to.equal(petAdoptionAgency.isPetAvailable('Chow-Chow', 0, true));
        });
        it('should return vaccinated pet', () => {
            expect(`Great! We have ${10} vaccinated ${'Chow-Chow'}(s) available for adoption at the agency.`).to.equal(petAdoptionAgency.isPetAvailable('Chow-Chow',10, true));
        });
        it('should return not vaccinated vaccinated pet', () => {
            expect(`Great! We have ${10} ${"Chow-Chow"}(s) available for adoption, but they need vaccination.`).to.equal(petAdoptionAgency.isPetAvailable('Chow-Chow',10, false));
        });
    })
    describe("Test get recommended pets", function () {
        it('should throw for not arr pet list ', () => {
            expect(() => petAdoptionAgency.getRecommendedPets("not arr", "Test traits")).to.throw("Invalid input");
        });
        it('should throw for not string desired traits ', () => {
            expect(() => petAdoptionAgency.getRecommendedPets(["arr", 'arr', 'arr'], 111)).to.throw("Invalid input");

        });
        it('should return sorry for no pets', () => {
            expect(`Sorry, we currently have no recommended pets with the desired traits: ${"kokal"}.`).to.equal(petAdoptionAgency.getRecommendedPets([{name: 'Chow_chow', traits: 'lakomstvo'}], 'kokal'));
        });
        it('should return pet ', () => {
            expect( `Recommended pets with the desired traits (kokal): Chow-Chow, test1, test2`).to.equal(petAdoptionAgency.getRecommendedPets([{name: 'Chow-Chow', traits: 'kokal'},{name: 'test1', traits: 'kokal'}, {name: 'test2', traits: 'kokal'}, {name: 'test3', traits: 'nagrada'}], 'kokal'));
        });
    })
    describe('Test adopt pet', function () {
        it('should throw for invalid data', () => {
            expect(() => petAdoptionAgency.adoptPet(11, 'Valid string')).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet('Valid string', 11)).to.throw("Invalid input");
        });
        it('should return congratulations adopted', () => {
            expect( `Congratulations, ${'testAdopter'}! You have adopted ${'TestDog'} from the agency. Enjoy your time with your new furry friend!`).to.equal(petAdoptionAgency.adoptPet('TestDog', 'testAdopter'));

        });
    })

})
