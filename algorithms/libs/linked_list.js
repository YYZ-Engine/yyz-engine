/* 
You will need to create a Node class that has the following "serialized" data structure:

#meta json
{
  "data": $someRandomString,
  "next": $nextNodeInTheLinkedList
}
You will want to implement the following functions for your Node class:

  create a new Node
  collect all node data and return it in a javascript Array.
  find a node by its index in the list (return -1 when no Node exists)
  delete a Node in a list and reconnect the list items so that the linked list is not corrupted

*/

class Node {
  constructor(data) {
    // data stores a value
    this.data = data; 
    // next points to the next node
    this.next = null; 
  }
}

function LinkedList() {
  // _length retrieves the number of nodes in a list
  this._length = 0;
  // head assigns a node as the head of a list
  this.head = null;
}
