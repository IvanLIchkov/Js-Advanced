function solve(arr) {
    let obj = {};
    for (const data of arr) {
        let [fruit, price] = data.split(':');
        obj[fruit] = Number(price);
    }
    let sorted = Object.keys(obj).sort().reduce(
        (object, key) =>{
            object[key] = obj[key];
            return object;
        },
        {}
    );
    for (const key of Object.keys(sorted)) {
        let letter = key.charAt(0);
        if(key.charAt(0)){

        }
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)
