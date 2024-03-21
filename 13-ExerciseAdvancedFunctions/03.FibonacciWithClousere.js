function getFibonator() {
    let firstNum = 1;
    let secondNum = 0;

    function fib() {
        let nextNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = nextNum;
        return nextNum;
    }
    return fib;
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
