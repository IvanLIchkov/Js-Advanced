function controller(data) {
    const juices = {};
    for (let datum of data) {
        const [name, quantity] = datum.split(' => ')
        if(!juices.hasOwnProperty(name)){
            juices[name] = 0;
        }
        if (juices[name] +  quantity / 1000 >= 1){
            juices[name] += ((juices[name] + Number(quantity))/1000);
        }
    }
    console.log(juices)
    // Object.keys(juices).forEach(j =>{
    //     if(juices[j] / 1000 >=1){
    //         console.log(`${j} => ${(juices[j] / 1000).toFixed(0)}`)
    //     }
    // })
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
