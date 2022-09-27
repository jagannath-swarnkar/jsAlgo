class Queue {
    constructor(){
        this.item = [];
    }
    enqueue(element){
        this.item.push(element)
    }
    dequeue(){
        return this.item.shift();
    }
    isEmpty(){
        return !this.item.length
    }
    peek(){
        return this.item[0]
    }
    size(){
        return this.item.length
    }
    print(){
        console.log(this.item.toString())
    }
}

const queue = new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(50)
queue.enqueue(30)

queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.size());
console.log(queue.peek());
