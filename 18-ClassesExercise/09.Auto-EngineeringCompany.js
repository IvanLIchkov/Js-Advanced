function solve(input) {
    const brandMap = new Map();

    for (const line of input) {
        const [brand, model, quan] = line.split(" | ");
        if(!brandMap.has(brand)){
            brandMap.set(brand, new Map());
        }
        if (!brandMap.get(brand).has(model)){
            brandMap.get(brand).set(model,0)
        }
        brandMap.get(brand).set(model, Number((brandMap.get(brand).get(model) + Number(quan))))
    }
    for (const [key, value] of brandMap) {
        console.log(`${key}`)
        for (const [modelKey, modelValue] of brandMap.get(key)) {
            console.log(`###${modelKey} -> ${modelValue}`)
        }
    }
}
solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 2',
    'Audi | Q5 | 10',
    'Audi | Q7 | 2',
    'Audi | Q6 | 1',
    'Audi | Q7 | 1',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'BMW | X5 | 3',
    'BMW | X6 | 103',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)
