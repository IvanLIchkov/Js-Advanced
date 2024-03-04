function calculate(fruit, weight, pricePerKg) {
    const weightInKilo = weight/1000;
    console.log(`I need $${(weightInKilo*pricePerKg).toFixed(2)} to buy ${(weightInKilo).toFixed(2)} kilograms ${fruit}.`)
}
calculate('orange', 2500, 1.80);
calculate('apple', 1563, 2.35);
