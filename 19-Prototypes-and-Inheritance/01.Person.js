function createPersonWithProperties(firstName, lastName) {
    const result = {
        firstName,
        lastName
    };
    Object.defineProperty(result, 'fullName',{
        enumerable: true, // TODO Слага се задължително теи две свойства защото по дефаулт те са спрени.
        configurable: true,
        get(){
            return result.firstName + ' ' + result.lastName;
        },
        set(value){
            [result.firstName, result.lastName] =  value.split(' ');
        }
    })
    return result;
}




function createPerson(name1, name2) {
    class Person {
        firstName;
        lastName;

        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get fullName(){
            return this.firstName + ' ' + this.lastName;
        }

        set fullName(name){
            [this.firstName, this.lastName] = name.split(' ');
        }
    }
    return new Person(name1, name2)
}
let person = createPersonWithProperties("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
