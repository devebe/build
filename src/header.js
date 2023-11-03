import Component from "./component";
import { header, logo, navList, listItems, listLinks, reserveButton } from "./data/header-data";

function buildUpComponent(obj) {
    let component = new Component(obj);
    component.build();
};

export function renderHeader() {
    let headerArray = [header, logo, navList, listItems, listLinks, reserveButton];

    headerArray.forEach((element) => {
        if (element.id) {
            buildUpComponent(element)
            return;
        }
        if (!element.id) {
            element.forEach((item) => {
                buildUpComponent(item);
            });
        }
        else {
            console.log(['weird', element]);
        }; 
    });
};