function solve() {
    const addButtons = document.querySelectorAll('.add-product');
    for (let addButton of addButtons) {
        addButton.addEventListener('click', addProduct);
    }

    const checkoutButton = document.querySelector('.checkout');
    checkoutButton.addEventListener('click', checkOut);

    let products = {};

    function addProduct(event) {
        const details = event.target.parentElement.parentElement.querySelector('.product-details');

        const price = event.target.parentElement.parentElement.querySelector('.product-line-price').textContent;
        const productName = details.querySelector('.product-title').textContent;

        if(productName in products){
            products[productName] +=Number (price);
        }else{
            products[productName] = Number (price);
        }
        document.querySelector('textarea').textContent += `Added ${productName} for ${price} to the cart.\n`;
    }

    console.log(products);

    function checkOut() {
        let totalSum = 0;
        let productsString = Object.keys(products);
        for (const [key, value] of Object.entries(products)) {
            totalSum += value;
        }
        document.querySelector('textarea').textContent += `You bought ${productsString.join(", ")} for ${totalSum.toFixed(2)}.\n`;
        for (const addButton of addButtons) {
            addButton.disabled = true;
        }
        checkoutButton.disabled = true;
    }

}
