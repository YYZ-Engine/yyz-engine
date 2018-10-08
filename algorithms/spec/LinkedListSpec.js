const linked_list = require('../libs/linked_list');

describe('Singly Linked List', () => {
  it('checks if you can append new node to the linked list', () => {
    var list = new linked_list.SinglyLinkedList();
    list.append(5);
    list.append(10);
    list.append(15);
    expect(list.length).toEqual(3);
    expect(list.head.data).toEqual(5);
    expect(list.head.next.data).toEqual(10);
    expect(list.head.next.next.data).toEqual(15);
  });
  it('checks if you can collect all the node data and return it in an Array', () => {
    var list = new linked_list.SinglyLinkedList();
    list.append(5);
    list.append('abc');
    list.append(25);
    expect(list.collect()).toEqual([5, 'abc', 25]);
  });
  it('checks if you can find a node by its index in the list', () => {
    var list = new linked_list.SinglyLinkedList();
    list.append(5);
    list.append(10);
    list.append(15);
    var node1 = new linked_list.Node(5);
    var node2 = new linked_list.Node(10);
    var node3 = new linked_list.Node(15);
    node1.next = node2;
    node2.next = node3;
    expect(list.findByIndex(0)).toEqual(node1);
  });
  it('checks if you can find a node by its index in the list', () => {
    var list = new linked_list.SinglyLinkedList();
    list.append(1);
    expect(list.findByIndex(4)).toEqual(-1);
  });
  it('checks if you can remove a node that does not exist from the linked list', () => {
    var list = new linked_list.SinglyLinkedList();
    list.append(1);
    expect(list.remove(4)).toEqual(-1);
  });
  it('checks if you can remove the first node from the linked list', () => {
    var list = new linked_list.SinglyLinkedList();
    list.append(5);
    list.append(10);
    list.append(15);
    var node1 = new linked_list.Node(5);
    var node2 = new linked_list.Node(10);
    var node3 = new linked_list.Node(15);
    node1.next = node2;
    node2.next = node3;
    expect(list.remove(0)).toEqual(node2);
    expect(list.length).toEqual(2);
  });
  it('checks if you can remove a node that is not the first node from the linked list', () => {
    var list = new linked_list.SinglyLinkedList();
    list.append(5);
    list.append(10);
    list.append(15);
    var node1 = new linked_list.Node(5);
    var node2 = new linked_list.Node(15);
    node1.next = node2;
    expect(list.remove(1)).toEqual(node1);
    expect(list.length).toEqual(2);
  });
  it('checks if you can remove the last node from the linked list', () => {
    var list = new linked_list.SinglyLinkedList();
    list.append(5);
    list.append(10);
    list.append(15);
    var node1 = new linked_list.Node(5);
    var node2 = new linked_list.Node(10);
    node1.next = node2;
    expect(list.remove(2)).toEqual(node1);
    expect(list.length).toEqual(2);
  });
  it('checks if the removed node is no longer in memory', () => {
    var list = new linked_list.SinglyLinkedList();
    list.append(5);
    list.append(10);
    list.append(15);
    var node1 = new linked_list.Node(5);
    var node2 = new linked_list.Node(10);
    var node3 = new linked_list.Node(15);
    node1.next = node2;
    expect(list.remove(2)).toEqual(node1);
    expect(list.findByIndex(3)).toEqual(-1);
    expect(list.length).toEqual(2);
  });

});
