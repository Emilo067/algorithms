class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}


var MyLinkedList = function () {
    this.head = null
    this.size = 0
};

/**
 * Получить значение по индексу
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1

    let current = this.head
    for (let i = 0; i < index; i++) {
        current = current.next
    }

    return current.val
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new Node(val, this.head)
    this.head = newNode
    this.size++
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const newNode = new Node(val)
    if(!this.head) {
        this.head = newNode
    } else {
        let current = this.head
        while(current.next) {
            current = current.next
        }
        current.next = newNode
    }

    this.size++
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if(index < 0 || index > this.size) return

    if(index === 0) {
        this.addAtHead(val)
        return
    }

    let current = this.head
    for(let i = 0; i < index - 1; i++) {
        current = current.next
    }

    const newNode = new Node(val, current.next)
    current.next = newNode

    this.size++
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
   if (index < 0 || index >= this.size) return

    if(index === 0) {
        this.head = this.head.next
    } else {
        let current = this.head
        for(let i = 0; i < index - 1; i++) {
            current = current.next
        }
        current.next = current.next.next
    }
    this.size--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */


const myLinkedList = new MyLinkedList()
myLinkedList.addAtHead(1)
myLinkedList.addAtTail(3)
myLinkedList.addAtIndex(1, 2) // Список: 1 -> 2 -> 3

console.log(myLinkedList.get(1)) // 2
myLinkedList.deleteAtIndex(1)    // Список: 1 -> 3
console.log(myLinkedList.get(1)) // 3
