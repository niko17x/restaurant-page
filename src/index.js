import './style.css';
import { renderMainTitle, renderImg, renderTxt, renderClosingText } from './home.js';
import { renderMenuTitle, renderMenuItems } from './menu.js';
import { renderContactTitle, renderForm } from './contact.js'

// IMAGES:
import oatmeal1 from './oatmeal-item1.jpeg'
import oatmeal2 from './oatmeal-item2.jpeg'
import oatmeal3 from './oatmeal-item3.jpeg'
import oatmeal4 from './oatmeal-item4.jpeg'
import oatmeal5 from './oatmeal-item5.jpeg'




class Render {
    // FUNCTION FOR REMOVING ALL NODES:
    static removeNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    };

    static homePage() {
        renderMainTitle("Welcome to Delish Oatmeals!");
        renderImg();
        renderTxt();
        renderClosingText();
    };
    
    static menuPage(){
        renderMenuTitle("Here's the Menu!");
    
        // Enter in new menu items:
        // (img, title, description, price):
        renderMenuItems(oatmeal1, 'Berry Berry Oats', 'Try our delicious raspberry, blueberry oatmeal with almonds and honey to top it all off. The deliciousness will overload your taste buds!', 6.75);
        renderMenuItems(oatmeal2, 'Banana Berry Oats', 'Protein rich oatmeal perfect for after working out! Infused with organic peanut butter to help boost those nutrients.', 6.25);
        renderMenuItems(oatmeal3, 'Yoghurt-y Goodness', 'A bit of oatmeal, bananas, strawberries, granola and topped off with blueberries. All on top of homemade yoghurt. Delicious!', 8.75);
        renderMenuItems(oatmeal4, 'Fruity and Earthy', 'Nuts, nuts and more nuts! Oh and add some strawberries, cream and do not forget about the blueberries.', 6);
        renderMenuItems(oatmeal5, 'Brain Food', 'Raisons, oatmeal, healthy seeds, honey and lots of cereal. This is one hearty breakfast for anyone ready to tackle the day!', 7.70);
    };
  
    static contactPage() {
        renderContactTitle();
        renderForm();
    };
};




const tabHome = document.querySelector('#tab-home');
const tabMenu = document.querySelector('#tab-menu');
const tabContact = document.querySelector('#tab-contact');
const container = document.querySelector('#container');



tabHome.addEventListener('click', () => {
    Render.removeNodes(container); // Remove existing nodes.
    Render.homePage();
});

tabMenu.addEventListener('click', () => {
    Render.removeNodes(container);
    Render.menuPage();
});

tabContact.addEventListener('click', () => {
    Render.removeNodes(container);
    Render.contactPage();
});




// Default page load:
Render.homePage();

