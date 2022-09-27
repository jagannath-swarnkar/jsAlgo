class Queue {
    constructor(){
        this.item = {};
        this.front = 0;
        this.rear = 0;
    }
    enqueue(element){
        this.item[this.front] = element;
        this.front++
    }
    dequeue(){
        const item = this.item[this.rear];
        delete this.item[this.rear];
        this.rear++
    }
    isEmpty(){
        return this.front - this.rear === 0;
    }
    size(){
        return this.front - this.rear;
    }
    peek(){
        return this.item[this.front]
    }
    print(){
        console.log(Object.values(this.item));
    }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.dequeue();
queue.print();
console.log(queue.size());