const linked_list = require('../libs/linked_list');

describe('Singly Linked List', () => {
  var singlyLinkedList = new linked_list.SinglyLinkedList();
  var result = singlyLinkedList;
  it('checks if you can append new node to the top of the linked list', () => {
    result.append(5);
    result.append(10);
    result.append(15);
    expect(result.length).toEqual(3);
  });
});
