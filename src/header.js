import { render } from "./component";
import { header, logo, navList, listItems, listLinks, reserveButton } from "./data/header-data";

let headerArray = [header, logo, navList, listItems, listLinks, reserveButton];

export function renderHeader() {
    render(headerArray);
};