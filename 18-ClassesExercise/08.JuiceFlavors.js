function controller(data) {
    const juices = {};
    const output = new Map();
    for (let datum of data) {
        const [name, quantity] = datum.split(' => ')
        if(!juices.hasOwnProperty(name)){
            juices[name] = 0;
        }
        juices[name] +=  Number(quantity);
        if (juices[name]  >= 1000){
            if (!output.has(name)){
                output.set(name, Math.floor(juices[name] /1000));
            }else {
                output.set(name, Math.floor((juices[name] /1000)));
            }
        }else{
            juices[name] = Number(quantity);
        }
    }
    output.forEach((value, key) => {
        console.log(`${key} => ${value}`)
    })
}
controller(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)
controller(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)
