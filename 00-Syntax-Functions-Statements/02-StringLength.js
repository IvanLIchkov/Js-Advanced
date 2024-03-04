function strLength(arr){
    let sumLength = 0;
    for (let i = 0; i < arr.length; i++) {
        let string = arr[i];
        sumLength += string.length;
    }
    console.log(sumLength);
    console.log(Math.floor(sumLength/3));
}

strLength(['pasta', '5', '22.3'])
