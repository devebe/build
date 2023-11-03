import { render } from "./component";
import { footer, linkList, listItems, listLinks, copyright } from "./data/footer-data";

let footerArray = [footer, linkList, listItems, listLinks, copyright];

export function renderFooter() {
    render(footerArray);
};