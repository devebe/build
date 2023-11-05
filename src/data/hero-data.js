import { Node, DivNode, TextNode, ListNode, LinkNode, OrderedListNode, UnorderedListNode, ButtonNode, ImageNode } from "../objects";

const hero = new DivNode('hero');
hero.parentid = 'content';

const title = new TextNode('title');
title.parentid = hero.id;
title.setHeading('h1');
title.setText('We are all sinners');

const subtitle = new TextNode('subtitle');
subtitle.parentid = hero.id;
subtitle.setHeading('h2');
subtitle.setText('Scandalously delicious sin-sational dining');

const actions = new DivNode('actions');
actions.parentid = hero.id;

const menuButton = new ButtonNode('menuButton');
menuButton.parentid = actions.id;
menuButton.setText('View menu');

const reserveButton = new ButtonNode('reserveButton');
reserveButton.parentid = actions.id;
reserveButton.setText('Reserve a table');

export const heroArray = [hero, title, subtitle, actions, menuButton, reserveButton];