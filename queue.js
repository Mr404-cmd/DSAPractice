class Queue{
    constructor(){
        this.items = {};
        this.front = 0
        this.rear = 0
    }
    enqueue(item){
        this.items[this.rear] = item;
        this.rear++;
        return `${item} Inserted`;
    }
    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++
        return `${item} Deleted`;
    }
    peek(){
        return this.items[this.front];
    }
    printQueue(){
        return this.items;
    }
}
let myobj = new Queue();
console.log(myobj.printQueue());
console.log(myobj.enqueue(5));
console.log(myobj.printQueue());
console.log(myobj.enqueue(10));
console.log(myobj.enqueue(15));
console.log(myobj.printQueue());
console.log(myobj.dequeue());
console.log(myobj.printQueue());