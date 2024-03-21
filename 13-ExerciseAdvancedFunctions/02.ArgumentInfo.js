function solve() {
    const args = Array.from(arguments)

   const count = new Map();

    args.forEach(arg => {
        const argType = typeof arg;
        console.log(`${argType}: ${arg}`);
        if (!count.has(argType)){
            count.set(argType, 0);
        }
        count.set(argType, count.get(argType) + 1);
    });

    Array.from(count.entries())
        .sort((a,b) => b[1] - a[1])
        .forEach((element) => console.log(`${element[0]} = ${element[1]}`))

}
solve('cat', 'dog', 'snake', 'misko', 42,52, 55, 66,  function () { console.log('Hello world!'); })
