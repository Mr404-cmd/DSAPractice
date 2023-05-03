class Stack{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items.length === 0) return "underflow";
        this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    showData(){
        if(this.items.length === 0) return "Empty Stack";
        return this.items;
    }
}
let myobj = new Stack();
console.log(myobj.isEmpty())
myobj.push(12);
myobj.push(34);
myobj.pop();
console.log(myobj.showData())
console.log(myobj.peek())