class Node {
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

/*function for the reverse linked list */
    function reverse(node){
        let prev = null;
        let current = node;
        let next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        node = prev;
        return node;
    }

    /* function see the code */
    function printList (node){
        while (node != null){
            console.log(node.data + " "),
            node = node.next;
        }
    } 


    head = new Node(85);
    head.next = new Node(15);
    head.next.next = new Node(4);
    head.next.next.next = new Node(20);

    console.log("Given linked list<br/>");
    printList(head);
    head = reverse(head);
    console.log("<br/>");
    console.log("Reversed linked list<br/> ");
    printList(head);

    //Time complexity = O(n)
    //Space complexity = O(1)