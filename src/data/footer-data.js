import { Node, DivNode, TextNode, ListNode, LinkNode, OrderedListNode, UnorderedListNode, ButtonNode, ImageNode } from "../objects";

const footer = new DivNode('footer');
footer.parentid = 'content';

const socialsList = new UnorderedListNode('socialsList');
socialsList.parentid = footer.id;

let socials = ['Facebook', 'Instagram', 'Tiktok', 'X'];
let socialLinks = [];
let socialItems = [];

socials.forEach((element) => {
    const socialItem = new ListNode('socialItem');
    socialItem.parentid = socialsList.id;
    socialItems.push(socialItem);
    const socialLink = new LinkNode('socialLink');
    socialLink.parentid = socialItem.id;
    socialLink.setText(element);
    socialLink.setUrl('#');
    socialLinks.push(socialLink);
});

const linkList = new UnorderedListNode('linkList');
linkList.parentid = footer.id;

let links = ['About us', 'Privacy Policy', 'Terms & Conditions', 'Cookie Settings'];
let listLinks = [];
let listItems = [];

links.forEach((element) => {
    const listItem = new ListNode('listItem');
    listItem.parentid = linkList.id;
    listItems.push(listItem);
    const listLink = new LinkNode('listLink');
    listLink.parentid = listItem.id;
    listLink.setText(element);
    listLink.setUrl('#');
    listLinks.push(listLink);
});

let copyright = new TextNode('copyright');
copyright.setText('2023 Restaurant The Little Sinner. All rights reserved.');
copyright.parentid = footer.id;

export const footerArray = [footer, socialsList, socialItems, socialLinks, linkList, listItems, listLinks, copyright];