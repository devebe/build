import { Node, DivNode, TextNode, ListNode, LinkNode, OrderedListNode, UnorderedListNode, ButtonNode, ImageNode } from "../objects";

const header = new DivNode('header');
header.parentid = 'content';

const logo = new TextNode('logo');
logo.parentid = header.id;
logo.setText('Restaurant De Kleine Zondaar');
logo.setHeading('h3');

const navList = new UnorderedListNode('navlist');
navList.parentid = header.id;

let links = ['Menu', 'About us', 'Contact', 'Events'];
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

const reserveButton = new ButtonNode('reserve');
reserveButton.parentid = header.id;
reserveButton.setText('Reserve a table');

export {header, logo, navList, listItems, listLinks, reserveButton};



