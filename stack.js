class Stack {
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length -1]
    }
    isEmpty(){
        return !!this.items.length
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
    
    
}
const stack = new Stack();
stack.push(1)
stack.push(5)
stack.push(3)
stack.pop()
console.log(stack.isEmpty())
stack.print()