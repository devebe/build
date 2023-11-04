import { renderHeader } from "./header";
import { renderHero } from "./hero";
import { renderSpecials } from "./specials-section";
import { renderAddress } from "./address";
import { renderFooter } from "./footer";
import './style.css';

renderHeader();
renderHero();
renderSpecials();
renderAddress();
renderFooter();

document.addEventListener('click', (e) =>{
    let target = e.target.firstChild.textContent;
    if (target == 'Menu') {
        let page = document.getElementById('content');
        page.replaceChildren();
        renderHeader();
        renderSpecials();
        renderAddress();
        renderFooter();   
    }
    if (target == 'The Little Sinner') {
        let page = document.getElementById('content');
        page.replaceChildren();
        renderHeader();
        renderHero();
        renderSpecials();
        renderAddress();
        renderFooter();  
    }
});