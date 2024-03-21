function calculator() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let result = document.getElementById('result');
    const bussiness = {
        init,
        add,
        subtract
    }
    function add() {
        result.value = Number(num1.value) + Number(num2.value);
    }
    function subtract() {
        result.value = Number(num1.value)- Number(num2.value) ;
    }
    function init(firstNum, secondNum, resultValue) {
        num1.value = firstNum;
        num2.value = secondNum;
        result.value = resultValue
    }
    return bussiness;
}
const calculate = calculator ();
calculate.init ('1', '2', '#result');



