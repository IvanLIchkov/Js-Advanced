function circleArea(input) {
    if(typeof(input) !== 'number'){
        console.log('We can not calculate the circle area, because we receive a string.')
        return;
    }
    console.log((Math.pow(input,2) * Math.PI).toFixed(2));
}
circleArea(5);
circleArea('meri');
