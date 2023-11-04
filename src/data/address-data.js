import { Node, DivNode, TextNode, ListNode, LinkNode, OrderedListNode, UnorderedListNode, ButtonNode, ImageNode } from "../objects";

const address = new DivNode('address');
address.parentid = 'content';

const title = new TextNode('title');
title.parentid = address.id;
title.setHeading('h3');
title.setText('Pay us a visit');

const location = new DivNode('location');
location.parentid = address.id;

const addressLine = new TextNode('addressLine');
addressLine.parentid = location.id;
addressLine.setHeading('45 Brixton Street');

const zipCodeLine = new TextNode('addressLine');
zipCodeLine.parentid = location.id;
zipCodeLine.setHeading('LH1 T86 London');

export const addressArray = [address, title, location, addressLine, zipCodeLine];