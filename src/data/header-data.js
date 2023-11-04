import { Node, DivNode, TextNode, ListNode, LinkNode, OrderedListNode, UnorderedListNode, ButtonNode, ImageNode } from "../objects";

const header = new DivNode('header');
header.parentid = 'content';

const logo = new TextNode('logo');
logo.parentid = header.id;
logo.setText('The Little Sinner');
logo.setHeading('h3');

const navList = new UnorderedListNode('navlist');
navList.parentid = header.id;

let links = ['Menu', 'Contact'];
let listButtons = [];
let listItems = [];
let i = 1;

links.forEach((element) => {
    const listItem = new ListNode('listItem');
    listItem.parentid = navList.id;
    listItem.id = listItem.id + '-' + i;
    listItems.push(listItem);
    const listButton = new ButtonNode('listButton');
    listButton.parentid = listItem.id;
    listButton.id = listButton.id + '-' + i;
    listButton.setText(element);
    listButtons.push(listButton);
    i++;
});

const reserveButton = new ButtonNode('reserve');
reserveButton.parentid = header.id;
reserveButton.setText('Reserve a table');

export const headerArray = [header, logo, navList, listItems, listButtons, reserveButton];