class FashionRetailInventory {
    storehouse;
    location;
    productStock;


    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price){
        const productToAdd = this.productStock.filter(p =>{
            if (p.productName === productName && p.size === size){
                return p;
            }
        })[0];
        quantity = Number(quantity);
        if(productToAdd === undefined){
            this.productStock.push({productName, size, quantity, price});
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }else {
            productToAdd.quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        }
    }
    sendProduct (productName, size){
        const productToSend = this.productStock.filter(p =>{
            if (p.productName === productName && p.size === size){
                return p;
            }
        })[0];
        if(productToSend === undefined){
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`)
        }else{
            const index = this.productStock.findIndex(p => p.productName === productToSend);
            this.productStock.splice(index, 1)
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }
    }
    findProductsBySize(size){
        const sizeFiltered = this.productStock.filter(p =>{
            if (p.size === size){
                return p;
            }
        });
        if (sizeFiltered.length === 0){
            return `There are no products available in that size`
        }else{
            let output = []
            sizeFiltered.forEach(p =>{
                output.push (`${p.productName}-${p.quantity} pieces`)
            })
            return output.join(', ');
        }
    }
    listProducts (){
        if (this.productStock.length === 0){
            return `${this.storehouse} storehouse is empty`;
        }else{
            let output = `${this.storehouse} storehouse in ${this.location} available products:`;
            this.productStock.sort((a, b) => a.productName.localeCompare(b.productName))
                .forEach(p =>{
                    output += `\n${p.productName}/Size:${p.size}/Quantity:${p.quantity}/Price:${p.price}$`
                });
            return output;
        }
    }
}
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.sendProduct("T-Shirt", "M"));
// console.log(storeHouse.sendProduct("Sweather", "M"));

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "L", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.findProductsBySize("M"));
console.log(storeHouse.findProductsBySize("XL"));

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
// console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.listProducts());
