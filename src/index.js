import { TextNode, LinkNode } from "./objects";
import Component from "./component";
import { renderHeader } from "./header";

renderHeader();

let poep = new TextNode('poep');
poep.setText('poep');
poep.parentid = 'body';

let kak = new Component(poep);

kak.build();