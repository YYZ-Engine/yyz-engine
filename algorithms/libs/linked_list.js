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
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
