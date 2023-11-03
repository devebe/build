import { Node, DivNode, TextNode, ListNode, LinkNode, OrderedListNode, UnorderedListNode, ButtonNode, ImageNode } from "../objects";

const specials = new DivNode('specials');
specials.parentid = 'content';

const title = new TextNode('title');
title.parentid = specials.id;
title.setHeading('h3');
title.setText('Our Seasonal Favorites');

const text = new TextNode('text');
text.parentid = specials.id;
text.setText('Autumn is back, it is time to sin inside. Indulge and sin with one of our seasonal specials. Available for limited time only.');

const flexbox = new DivNode('flexbox');
flexbox.parentid = specials.id

let cards = ['Cheesy Spinach Artichoke Dip','Butter Chicken Curry','Melanzane alle Parmigiana','Pumpkin Spice Pie'];
let cardsList = [];
let imagesList = [];
let cardTitlesList = [];

cards.forEach((element) => {
    let card = new DivNode('card');
    card.parentid = flexbox.id;
    cardsList.push(card);
    let image = new ImageNode('image');
    image.parentid = card.id;
    imagesList.push(image);
    let cardTitle = new TextNode('cardTitle');
    cardTitle.parentid = card.id;
    cardTitle.setHeading('h4');
    cardTitle.setText(element)
    cardTitlesList.push(cardTitle);
});

export const specialsArray = [specials, title, text, flexbox, cardsList, imagesList, cardTitlesList];



