class Node {
  constructor(val) {
    this.data = val;
    this.left = this.right = null;
  }
}
function printLevelOrder() {
  let queue = [];
  queue.push(root);
  while (queue.length != 0) {
    let tempNode = queue.shift();
    console.log(tempNode.data + " ");
    if (tempNode.left != null) {
      queue.push(tempNode.left);
    }
    if (tempNode.right != null) {
      queue.push(tempNode.right);
    }
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
console.log("Level order traversal of binary tree is - ");
printLevelOrder();

//time Complexity = O(n)
//Space Complexity = O(n)
//