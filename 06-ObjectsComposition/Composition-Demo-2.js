function sayHi() {
    console.log(`${this.name} says hi!`);
}

const person = {
    name: 'Peter',
    age: 25,
    sayHi
};

const person2 = {
    name: 'John',
    age: 30,
    sayHi
};

person.sayHi();
person2.sayHi();
