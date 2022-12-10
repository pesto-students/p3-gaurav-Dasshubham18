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
            document.write(node.data + " "),
            node = node.next;
        }
    } 


    head = new Node(85);
    head.next = new Node(15);
    head.next.next = new Node(4);
    head.next.next.next = new Node(20);

    document.write("Given linked list<br/>");
    printList(head);
    head = reverse(head);
    document.write("<br/>");
    document.write("Reversed linked list<br/> ");
    printList(head);

    //bug with running the code in VS code