function result(carObj) {

    let engineForObj = engine(carObj.power);

    function engine(power){
        const engines =[ { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }];

        delete carObj.power;

        for (const engine of engines) {
            if (engine.power === 90 && power <=100){
                return engine;
            }else if(engine.power === 120 && power >100 && power <=160){
                return  engine
            }else if(engine.power === 200 && power >160){
                return engine
            }
        }
    }

    const carriageForObj =carriage(carObj.carriage, carObj.color);

    function carriage(type, color){
        const carriages = [{ type: 'hatchback', color: 'default'},
                { type: 'coupe', color: 'default'}];

        delete carObj.color;

        for (const carriage1 of carriages) {
            if (carriage1.type ===type){
                carriage1.color = color
                return carriage1;
            }
        }
    }
    carObj.wheels = wheels(carObj.wheelsize);
    function wheels(size){
        while(Math.abs(size % 2) === 0){
            size--
        }
        delete carObj.wheelsize;
        return [size, size, size, size];
    }
    carObj.engine = engineForObj;
    carObj.carriage = carriageForObj;

    return carObj;
}
