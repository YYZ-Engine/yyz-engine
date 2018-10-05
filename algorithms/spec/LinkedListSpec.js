const linked_list = require('../libs/linked_list');

describe('Singly Linked List', () => {
  var singlyLinkedList = new linked_list.SinglyLinkedList();
  var result = singlyLinkedList;
  it('checks if you can add a new node to the top of the linked list', () => {
    result = singlyLinkedList.create(5);
    expect(result.length.toEqual(1));
  });
});
