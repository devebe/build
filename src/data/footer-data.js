import { Node, DivNode, TextNode, ListNode, LinkNode, OrderedListNode, UnorderedListNode, ButtonNode, ImageNode } from "../objects";

const footer = new DivNode('footer');
footer.parentid = 'content';

const socialsList = new UnorderedListNode('socialsList');
socialsList.parentid = footer.id;

let socials = ['Facebook', 'Instagram', 'Tiktok', 'Twitter'];
let socialLinks = [];
let socialItems = [];
let i = 1;

socials.forEach((element) => {
    const socialItem = new ListNode('socialItem');
    socialItem.parentid = socialsList.id;
    socialItem.id = socialItem.id + '-' + i;
    socialItems.push(socialItem);
    const socialLink = new LinkNode('socialLink');
    socialLink.parentid = socialItem.id;
    socialLink.id = socialLink.id + '-' + i;
    socialLink.setText(element);
    socialLink.setUrl('#');
    socialLinks.push(socialLink);
    i++;
});

const linkList = new UnorderedListNode('linkList');
linkList.parentid = footer.id;

let links = ['About us', 'Privacy Policy', 'Terms & Conditions', 'Cookie Settings'];
let listLinks = [];
let listItems = [];

links.forEach((element) => {
    const listItem = new ListNode('listItem');
    listItem.parentid = linkList.id;
    listItem.id = listItem.id + '-' + i;
    listItems.push(listItem);
    const listLink = new LinkNode('listLink');
    listLink.parentid = listItem.id;
    listLink.id = listLink.id + '-' + i;
    listLink.setText(element);
    listLink.setUrl('#');
    listLinks.push(listLink);
    i++;
});

let copyright = new TextNode('copyright');
copyright.setText('2023 Restaurant The Little Sinner. All rights reserved.');
copyright.parentid = footer.id;

export const footerArray = [footer, socialsList, socialItems, socialLinks, linkList, listItems, listLinks, copyright];