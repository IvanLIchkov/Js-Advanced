class List{
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element){
        this.list.push(element)
        this.size ++;
        this.list = List.orderArr(this.list)
    }

    remove(index){
        if(index >=0 && index < this.list.length){
            this.list.splice(index, 1);
            this.size -- ;
            this.list = List.orderArr(this.list)
        }
    }

    get(index){
        return this.list[index];
    }
    static orderArr(arr){
        return arr.sort((a,b) => a -b)
    }
}
let myList = new List();
myList.add(5);
myList.add(3);
myList.remove(0);
console.log(myList.get(0));
console.log(myList.size)
