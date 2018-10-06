const linked_list = require('../libs/linked_list');

describe('Singly Linked List', () => {
  var singlyLinkedList = new linked_list.SinglyLinkedList();
  var result = singlyLinkedList;
  result.append(5);
  result.append(10);
  result.append(15);
  it('checks if you can append new node to the linked list', () => {
    expect(result.length).toEqual(3);
    expect(result.head.data).toEqual(5);
    expect(result.head.next.data).toEqual(10);
    expect(result.head.next.next.data).toEqual(15);
  });
  it('checks if you can collect all the node data and return it in an Array', () => { 
    expect(result.collect()).toEqual([5, 10, 15]);
  });
  it('checks if you can find a node by its index in the list', () => {
    var Node = new linked_list.Node(); 
    expect(result.findByIndex(0)).toEqual(Node({ data: 5, next: Node({ data: 10, next: Node({ data: 15, next: null }) }) }));
  });
  it('checks if you can find a node by its index in the list', () => {
    expect(result.findByIndex(4)).toEqual(-1);
  });
});
