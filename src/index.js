import { renderHeader } from "./header";
import { renderHero } from "./hero";
import { renderSpecials } from "./specials-section";
import { renderAddress } from "./address";
import { renderFooter } from "./footer";
import { renderMenu } from "./menu";
import './style.css';

const homePage = [renderHeader, renderHero, renderSpecials, renderFooter];
const menuPage = [renderHeader, renderMenu, renderFooter];
const contactPage = [renderHeader, renderAddress, renderFooter];

const renderPage = (pageObject) => {
    let page = document.getElementById('content');
    page.replaceChildren();
    for (let i = 0; i < pageObject.length; i++) {
        pageObject[i]();  
    };
};

renderPage(homePage);

document.addEventListener('click', (e) =>{
    let target = e.target.id;
    if (target == 'button-listButton-1') {
        renderPage(menuPage);
        let active = document.getElementById(target);
        active.classList.add('active');
    }
    if (target == 'button-menu') {
        renderPage(menuPage);
        let active = document.getElementById('button-listButton-1');
        active.classList.add('active');
    }
    if (target == 'h3-logo') {
        let page = document.getElementById('content');
        renderPage(homePage); 
        let active = document.getElementById(target);
        active.classList.add('active');
    }
    if (target == 'button-listButton-2') {
        let page = document.getElementById('content');
        renderPage(contactPage);
        let active = document.getElementById(target);
        active.classList.add('active');
    }
});