function bye() {
    console.log('Bye!')
}

const phonebook = {
    'John': '+1-555-John',
    'Meri': '+1-555-Meri',
    'Bob': '+1-555-Bob',
    sayHi(){
        console.log('Hello!')
    },
    sayBye: bye
};

for (const key in phonebook) {
    console.log(key, phonebook[key]);
};
phonebook.sayHi();
phonebook.sayBye();

const entries = Object.entries(phonebook);
console.log(entries);
console.log(entries[1][1])

entries.sort((a,b) => {
    return a[0].localeCompare(b[0]);
}); // Сортиране на масив от обекти.
console.log(entries);

const sorted = Object.fromEntries(entries);// Така отново връщаме в обекти
console.log(sorted);

const person = {
    name: 'John',
    age: 31,
    sayHi: phonebook.sayHi
}

person.sayHi();
