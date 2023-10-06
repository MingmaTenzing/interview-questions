class Node{
    constructor(val,next) {
        this.val = val;
        this.next = next;
    }

    print() {
        let output = "";
        let curr= this;
        while (curr) {
            output += `${curr.val} ->`
            curr = curr.next
        }
        console.log(output)
    }

    addtoEnd(node) {
        let prev = null;
        let curr = this;
        while (curr) {
            prev= curr;
            curr = curr.next;

        }
        prev.next =node
    }

    removeByIndex(index) {
        let curr = this;
        let prev = null;

        let i = 0;
         while (i<index) {
            prev =curr
            curr = curr.next;
            i++
         }
         prev.next = prev.next.next

         return curr
    }

}

const head = new Node(1, new Node(2, new Node(3, null)))
console.log(head.addtoEnd(new Node(5,null)))
console.log(head.addtoEnd(new Node(6,null)))
console.log(head.addtoEnd(new Node(7,null)))
console.log(head.addtoEnd(new Node(8,null)))
console.log(head.addtoEnd(new Node(9,null)))

console.log(head.removeByIndex(2))
head.print()