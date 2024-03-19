function solution() {
    let str = '';
    function append(appendStr) {
        str += appendStr;
    }
    function removeStart(firstN) {
       str = str.slice(firstN);
    }
    function removeEnd(lastN) {
        str = str.slice(0, -lastN);
    }
    function print() {
        console.log(str)
    }
    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.print()
firstZeroTest.append('again');
firstZeroTest.print()
firstZeroTest.removeStart(3);
firstZeroTest.print()
firstZeroTest.removeEnd(4);
firstZeroTest.print()
firstZeroTest.print();

