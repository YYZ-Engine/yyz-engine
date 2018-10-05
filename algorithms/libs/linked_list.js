/* 
You will need to create a Node class that has the following "serialized" data structure:

#meta json
{
  "data": $someRandomString,
  "next": $nextNodeInTheLinkedList
}
You will want to implement the following functions for your Node class:
  append node to linked list
  create a new Node
  collect all node data and return it in a javascript Array.
  find a node by its index in the list (return -1 when no Node exists)
  delete a Node in a list and reconnect the list items so that the linked list is not corrupted

*/

function Node(data) {
  // data stores a value
  this.data = data; 
  // next points to the next node
  this.next = null; 
};

function LinkedList() {
  // head is the first node in the list
  this.head = null;
  this._length = 0;

  // create a new node
  this._create = function(data) {
    var nextNode = new Node(data),
        currentNode = this.head;

    // if the head is null
    if(!currentNode) {
      this.head = nextNode;
      this._length++;
      return nextNode;
    }

    // loop until we find the end
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    // once we reach the end of the linked list
    currentNode.next = nextNode;
    this._length++;
    return nextNode;
  }
};
