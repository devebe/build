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
addressLine.setText('45 Brixton Street');

const zipCodeLine = new TextNode('addressLine');
zipCodeLine.parentid = location.id;
zipCodeLine.setText('LH1 T86 London');

const phoneLine = new LinkNode('addressLine');
phoneLine.parentid = location.id;
phoneLine.setText('+44 123456789');
phoneLine.setUrl('#');

export const addressArray = [address, title, location, addressLine, zipCodeLine, phoneLine];