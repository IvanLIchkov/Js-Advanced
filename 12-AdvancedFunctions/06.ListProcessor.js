function solve(arr) {

    let output = [];

    let obj = {
        add: str => output.push(str),
        remove: str => (output = output.filter(x => x !== str)),
        print: () => console.log(output.join(","))
    }
    arr.forEach(line =>{
        const [command, str] = line.split(" ")
        obj[command](str);
    })
}
 solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
