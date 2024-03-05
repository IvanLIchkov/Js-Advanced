function solve(number) {
    const digit = number % 10;
    let boolean = true;
    let sum = digit;
    while (number > 0){
        if(number%10 !== digit) {
         boolean = false;
        }
        number = Math.floor(number / 10);
        sum+= number % 10;
    }
    console.log(`${boolean} \n${sum}`)
}
solve(2222222);
solve(1234);
