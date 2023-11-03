import { Node, DivNode, TextNode, ListNode, LinkNode, OrderedListNode, UnorderedListNode, ButtonNode, ImageNode } from "../objects";

let links = ['About us', 'Privacy Policy', 'Terms & Conditions', 'Cookie Settings'];
let listLinks = [];
let listItems = [];

links.forEach((element) => {
    const listItem = new ListNode('listItem');
    listItem.parentid = navList.id;
    listItems.push(listItem);
    const listLink = new LinkNode('listLink');
    listLink.parentid = listItem.id;
    listLink.setText(element);
    listLink.setUrl('#');
    listLinks.push(listLink);
});

let copyright = new TextNode('copyright');
copyright.setText('2023 Restaurant De Kleine Zondaar. All rights reserved.');

export { listItems, listLinks, copyright };