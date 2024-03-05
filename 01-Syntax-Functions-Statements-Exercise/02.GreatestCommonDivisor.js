function solution(num1, num2) {
    if(num1 === num2){
        console.log(num1);
        return;
    }
    for (let i = 10; i >1; i--) {
        if(num1 % i === 0 && num2 % i === 0){
            console.log(i);
            return;
        }
    }
}
solution(15, 5);
