function result(input) {
    let output = [];
    for (const inputElement of input) {

        let [name, level, items] = inputElement.split(" / ");
        output.push({
            name: name,
            level: Number(level),
            items: items ? items.split(', ') : []
        });
    }
    console.log(JSON.stringify(output));
}
result(['Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)
