function solve(arr, argument) {

    let obj ={
        asc: arr => arr.sort((a,b) => a - b),
        desc: arr => arr.sort((a,b) => b - a),
    }
    obj[argument](arr);
    return arr;
}
solve([14, 7, 17, 6, 8], 'asc')
solve([14, 7, 17, 6, 8], 'desc')
