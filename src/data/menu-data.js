import { Node, DivNode, TextNode, ListNode, LinkNode, OrderedListNode, UnorderedListNode, ButtonNode, ImageNode } from "../objects";

const menu = new DivNode('menu');
menu.parentid = 'content';

const title = new TextNode('title');
title.parentid = menu.id;
title.setHeading('h1');
title.setText('Our Menu');

const starters = new DivNode('starters');
starters.parentid = menu.id;

const startersTitle = new TextNode('startersTitle');
startersTitle.parentid = starters.id;
startersTitle.setHeading('h3');
startersTitle.setText('Starters');

let starterDishes = ['Cheesy Spinach Artichoke Dip', 'Ceviche Peruano', 'Garlic Lentil Soup'];
let starterDishesList = [];
let i = 1;

starterDishes.forEach((element) => {
    const starterDish = new TextNode('starterdish');
    starterDish.id = starterDish.id + '-' + i;
    starterDish.parentid = starters.id;
    starterDish.setText(element);
    starterDishesList.push(starterDish);
    i++;
});

const mains = new DivNode('starters');
mains.parentid = menu.id;

const mainsTitle = new TextNode('mainsTitle');
mainsTitle.parentid = mains.id;
mainsTitle.setHeading('h3');
mainsTitle.setText('Main Courses');

let mainCourses = ['Butter Chicken Curry','Melanzane alla Parmigiana','Mole Pulled Pork Fajitas'];
let mainCoursesList = [];
let j = 1;

mainCourses.forEach((element) => {
    const mainCourse = new TextNode('maincourse');
    mainCourse.id = mainCourse.id + '-' + j;
    mainCourse.parentid = mains.id;
    mainCourse.setText(element);
    mainCoursesList.push(mainCourse);
    j++;
})

export const menuArray = [menu, title, starters, startersTitle, starterDishesList, mains, mainsTitle, mainCoursesList];