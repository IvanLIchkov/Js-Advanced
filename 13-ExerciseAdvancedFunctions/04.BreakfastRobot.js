function solution() {
    let ingredients = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    }
    const prepare = {
        'apple': str  => {
          if (ingredients["carbohydrate"] >=1 * str){
              if (ingredients['flavour'] >=2 * str){
                  ingredients["carbohydrate"] -= 1 * str;
                  ingredients['flavour'] -= 2 * str;
                  return "Success";
              }
              return 'Error: not enough flavour in stock';
          }
          return 'Error: not enough carbohydrate in stock';

        },
        'lemonade': str => {
            if (ingredients ["carbohydrate"] >=10 * str){
                if (ingredients['flavour'] >=20 * str){
                    ingredients ["carbohydrate"] -= 10 * str;
                    ingredients['flavour'] -= 20 * str;
                    return "Success";
                }
                return 'Error: not enough flavour in stock';
            }
            return 'Error: not enough carbohydrate in stock';

        },
        'burger': str => {
            if (ingredients ["carbohydrate"] >=5 * str){
                if (ingredients['flavour'] >=3 * str){
                    if(ingredients['fat'] >= 7 * str){
                        ingredients['carbohydrate']-=5 * str;
                        ingredients['flavour'] -=3 * str;
                        ingredients['fat'] -=7 * str
                        return "Success";
                    }
                    return 'Error: not enough fat in stock';
                }
                return 'Error: not enough flavour in stock';
            }
            return 'Error: not enough carbohydrate in stock';

        },
        'eggs': str => {
            if (ingredients['protein'] >=5 * str){
                if (ingredients['flavour'] >=1 * str){
                    if(ingredients['fat'] >= 1 * str){
                        ingredients['protein']-=5 * str;
                        ingredients['flavour'] -=1 * str;
                        ingredients['fat'] -= 1 * str
                        return "Success";
                    }
                    return 'Error: not enough fat in stock';
                }
                return 'Error: not enough flavour in stock';
            }
            return 'Error: not enough protein in stock';

        },
        'turkey': str => {
            if (ingredients['protein'] >=10 * str){
                if (ingredients['carbohydrate'] >=10 * str){
                    if(ingredients['fat'] >= 10 * str){
                        if(ingredients['flavour'] >=10 * str){
                            ingredients['carbohydrate'] -=10 * str;
                            ingredients['protein'] -= 10 * str;
                            ingredients['flavour'] -= 10 * str;
                            ingredients['fat'] -= 10 * str;
                            return "Success";
                        }
                        return 'Error: not enough flavour in stock';
                    }
                    return 'Error: not enough fat in stock';
                }
                return 'Error: not enough carbohydrate in stock';
            }
            return 'Error: not enough protein in stock';
        },
    }
    function restock(element, quantity) {
           ingredients[element] += Number(quantity);
           return 'Success';
    }
    function report (){
        return `protein=${ingredients["protein"]} carbohydrate=${ingredients["carbohydrate"]} fat=${ingredients["fat"]} flavour=${ingredients["flavour"]}`
    }
    let control = {
        prepare,
        restock,
        report
    }
    function robot(input) {
        const[command, element, quantity] = input.split(' ');
        if (command === 'restock'){
            return  control[command](element, quantity);
        }else if (command === 'report'){
            return  control[command]();
        }else if(command === 'prepare'){
          return  control['prepare'][element](quantity);
        }

    }
    return robot;
}
// let manager = solution ();
// console.log (manager ("restock flavour 50"));
// console.log (manager ("prepare lemonade 4"));
// console.log (manager ("restock carbohydrate 10"));
// console.log (manager ("restock flavour 10"));
// console.log (manager ("prepare apple 1"));
// console.log (manager ("restock fat 10"));
// console.log (manager ("prepare burger 1"));
// console.log (manager ("report"));


let manager2 = solution();
console.log (manager2 ("prepare turkey 1"));
console.log (manager2 ("restock protein 10"));
console.log (manager2 ("prepare turkey 1"));
console.log (manager2 ("restock carbohydrate 10"));
console.log (manager2 ("prepare turkey 1"));
console.log (manager2 ("restock fat 10"));
console.log (manager2 ("prepare turkey 1"));
console.log (manager2 ("restock flavour 10"));
console.log (manager2 ("prepare turkey 2"));
console.log (manager2 ("report"));
