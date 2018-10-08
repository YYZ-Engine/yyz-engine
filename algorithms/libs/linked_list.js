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
 -  remove a Node in a list and reconnect the list items so that the linked list is not corrupted

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

  // find a node by its index in the list (return -1 when no Node exists)
  this.findByIndex = function(index) {
    // if looking for a node that doesn't exist, return error
    if (index >= this.length) return -1;
  
    var nodeToCheck = this.head, 
        count = 0;

    while (count < index) {
      nodeToCheck = nodeToCheck.next;
      count++;
    }
    return nodeToCheck;
  };
  
  // remove a Node in a list and reconnect the list items so that the linked list is not corrupted
  this.remove = function(index) {
    // if removing a node that doesn't exist, return error
    if (index > this.length) return -1;

    var nodeToCheck = this.head, 
          count = 0,
          prevNode = null;

    // if removing the first node, set the head to the next node
    if (index === 0) {
      this.head = nodeToCheck.next;
      this.length--;
      return this.head;
    };

    // loop until you find the node you are trying to remove
    while (count < index) {
      // set previous node to current node
      prevNode = nodeToCheck;
      // set current node to the next node
      nodeToCheck = nodeToCheck.next;
      count++;
    }
    // set previous node's pointer to the current node's pointer
    prevNode.next = nodeToCheck.next;
    this.length--;
    // set the removed node to null so it doesn't stay in memory
    nodeToCheck = null;
    return this.head;
  };
};

module.exports = {
  Node: Node,
  SinglyLinkedList: SinglyLinkedList
}
