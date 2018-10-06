/* 
Append a Node class that has the following "serialized" data structure:

#meta json
{
  "data": $someRandomString,
  "next": $nextNodeInTheLinkedList
}
Implement the following functions for your Node class:
 -  append a new node to linked list
 -  collect all node data and return it in a javascript Array
 -  find a node by its index in the list (return -1 when no Node exists)
 -  delete a Node in a list and reconnect the list items so that the linked list is not corrupted

*/

function Node(data) {
  // data stores a value
  this.data = data; 
  // next points to the next node
  this.next = null; 
};

function SinglyLinkedList() {
  // head is the first node in the list
  this.head = null;
  this.length = 0;
  
  // append a new node to linked list
  this.append = function(data) {
    // if data doesn't exist
    if (!data) return;

    // append a new Node
    var nodeToAdd = new Node(data),
        nodeToCheck = this.head; 

    // if the head is null
    if (!nodeToCheck) {
      this.head = nodeToAdd;
      this.length++;
      
      return nodeToAdd;
    }

    // loop until we find the end of the linked list    
    while(nodeToCheck.next) {
      nodeToCheck = nodeToCheck.next;
    }

    // Update the of the list and length of the list
    nodeToCheck.next = nodeToAdd; 
    this.length++;
    return nodeToAdd;
  };
  
  // collect all node data and return it in a javascript Array
  this.collect = function() {
    if (!this.head) return;
  
    var nodeToCheck = this.head, 
        nodeData = [],
        count = 0;

    while (count < this.length) {
      nodeData.push(nodeToCheck.data);
      nodeToCheck = nodeToCheck.next;
      count++;
    }

    // push the data into the array
    return nodeData;
  };
  
};

module.exports = {
  Node: Node,
  SinglyLinkedList: SinglyLinkedList
}
