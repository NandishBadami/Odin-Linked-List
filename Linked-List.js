class Node {
            constructor(value, nextNode) {
                this.value = value; 
                this.nextNode = nextNode;
            }
        }
        class LinkedList {
            constructor(head = null, tail = null) {
                this.head = head;
                this.tail = tail;
            }
            append(value) {
                if(this.head == null) {
                    this.head = new Node(value, null);
                    this.tail = this.head;
                    return;
                }
                this.tail.nextNode = new Node(value, null);
                this.tail = this.tail.nextNode;
            }
            prepend(value) {
                var temp = this.head;
                this.head = new Node(value, temp);
            }
            size() {
                let count = 0;
                for(let i=this.head;i!=null;i = i.nextNode) count++;
                return count;
            }
            headMethod() {
                if(this.head == null) return 'List is Empty';
                return `First node in the list: ${this.head.value}`;
            }
            tailMethod() {
                if(this.tail == null) return 'List is Empty';
                return `Last node in the list: ${this.tail.value}`;
            }
            at(index) {
                let n = this.head;
                if(index >= this.size() || index < 0) return 'Index out of bound';
                for(let i=0;i<index;i++) n = n.nextNode;
                return n.value;
            }
            pop() { 
                if(this.head == this.tail) {
                    this.head = null;
                    this.tail = null;
                    console.log('List is empty');
                    return;
                }
                let prev = null;
                for(let i = this.head;i.nextNode!=null;i=i.nextNode) prev = i;
                prev.nextNode = null;
                this.tail = prev;
            }
            contains(value) {
                for(let i=this.head;i!=null;i=i.nextNode) {
                    if(i.value == value) return true;
                }
                return false;
            }
            find(value) {
                let count = 0;
                for(let i=this.head;i!=null;i=i.nextNode) {
                    if(i.value == value) return count;
                    count++;
                }
                return null;
            }
            toString() {
                let str = '';
                for(let i=this.head;i!=null;i = i.nextNode) str += `( ${i.value} ) -> `;
                return str + "null";
            }
            insertAt(value, index) {
                if(index > this.size() || index < 0) {
                    console.log("Index out of bound");
                    return;
                }
                let prev;
                let n=this.head;
                for(let i=0;i<index;i++) {
                    prev = n;
                    n = n.nextNode;
                }
                if(prev == undefined) this.head = new Node(value, n);
                else prev.nextNode = new Node(value, n);
                if(prev == this.tail) {
                    this.tail = prev.nextNode;
                }
            }
            removeAt(index) {
                if(index >= this.size() || index < 0) {
                    console.log("Index out of bound");
                    return;
                }
                let prev;
                let n=this.head;
                for(let i=0;i<index;i++) {
                    prev = n;
                    n = n.nextNode;
                }
                if(prev == undefined) this.head = this.head.nextNode;
                else prev.nextNode = prev.nextNode.nextNode;
            }
        }
        var list = new LinkedList();
        list.append("dog");
        list.append("cat");
        list.append("parrot");
        list.append("hamster");
        list.append("snake");
        list.append("turtle");
        console.log(list.toString());