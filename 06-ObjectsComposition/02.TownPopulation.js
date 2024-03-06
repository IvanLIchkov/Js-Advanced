function pop(townsAssStrings) {
    const result = {};

    for (const input of townsAssStrings) {
        const tokens = input.split(' <-> ');
        const name =  tokens[0];
        const population =  Number(tokens[1]);

       //const [name, population] = input.split(' <-> '); Кратък начин за пресвояването на променливите но ако го правим така трябва да се парсе нъмбара когато го записваме.

        if (name in result){
            result[name] +=population;
        }else{
            result[name] = population;
        }

        // if (name in result){
        //     result[name] = 0 ;
        // }
        // result[name] += Number(population);
    }
    for (const resultKey in result) {
        console.log(`${resultKey} : ${result[resultKey]}`)
    }

    // for (let[name, population] of Object.entries(result)) {
    //     console.log(`${name} : ${result[population]}`)
     // Така направо деструкторираме масива от обекти и буравим директно с данните!


    // console.log(Object
    //     .entries(result)
    //     .map(([name, population]) => `${name} : ${population}`)
    //     .join('/n')); Оше по-кратък вариант за деструкториране и печатане.
}


pop(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)
pop(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)
