function solve(param) {
    let result = {};
    for (let i = 0; i < param.length; i+=2) {
        result[param[i]] = Number(param[i+1]);
    }
    console.log(result)
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
