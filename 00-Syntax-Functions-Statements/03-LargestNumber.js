function largestNum(arr){
    let largestNum = arr[0];
    for (let index in arr){
        let momentNumber = arr[index];
        if(largestNum< momentNumber){
            largestNum = momentNumber;
        }
    }
    console.log(`The largest number is ${largestNum}.`);
}
largestNum([-3, -5, -22.5]);
