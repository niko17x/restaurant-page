// MAIN HOME PAGE OF WEBSITE.

import titleImg from './title-img.jpeg'

const renderMainTitle = () => {
    const container = document.querySelector('#container');

    const divHomePage = document.createElement('div');
    divHomePage.setAttribute('id', 'home-page');

    const divTitle = document.createElement('div');
    divTitle.setAttribute('id', 'title');

    const h1 = document.createElement('h1');
    h1.innerText = "Welcome to Delish Oatmeals!"

    divTitle.appendChild(h1);
    container.append(divTitle, divHomePage);
};
// //! TESTING - Attempting to create one title creating function for all pages.
// const renderMainTitle = (newDiv, att, innerTxt) => {
//     const container = document.querySelector('#container');

//     newDiv = document.createElement('div');
//     newDiv.setAttribute('id', att);

//     const divTitle = document.createElement('div');
//     divTitle.setAttribute('id', 'title');

//     const h1 = document.createElement('h1');
//     h1.innerText = innerTxt;

//     divTitle.appendChild(h1);
//     container.append(divTitle, newDiv);
// };

const renderImg = () => {
    const divHomePage = document.querySelector('#home-page');

    const div = document.createElement('div');
    div.setAttribute('id', 'title-img');

    const heroImg = new Image();
    heroImg.src = titleImg;
    heroImg.setAttribute('id', 'hero-img')

    div.appendChild(heroImg);
    divHomePage.appendChild(div);
};

const renderTxt = () => {
    const divHomePage = document.querySelector('#home-page');

    const divIntroText = document.createElement('div');
    divIntroText.setAttribute('id', 'intro-text');

    const divIntroTitle = document.createElement('div');
    divIntroTitle.className = "intro-title";

    const divIntroPara = document.createElement('div');
    divIntroPara.className = "intro-para";

    const h2 = document.createElement('h2');
    h2.innerText = "What's the deal with Oatmeal anyways?";

    const p1 = document.createElement('p');
    p1.innerText = 'There isn\’t a single morning when my grandmother doesn\'t start her day without a steaming bowl of freshly cooked oats doused in milk. It always made me look at her quizzically and wonder... Why oats? Yes, it\'s healthy, but can one really have it every single day? Nutritionist Gargi Sharma says, "Oats are rich in soluble fibers which help in lowering cholesterol levels. These soluble fibers help increase intestinal transit time and reduce glucose absorption. Oats also contain beta glucan which is a lipid lowering agent. A very healthy breakfast option - you can spruce your oats with fruits and crunchy nuts" Be it a quick fix for hunger pangs, a light and hearty evening snack or the much needed energy to carry you through your hectic morning, oats is the one superfood that can easily fit itself to suit your needs.';

    const p2 = document.createElement('p');
    p2.innerText = 'Protein-packed, full of fiber and low on fat, oats are designed to boost your energy levels and help you lead a healthy lifestyle. They are not only good for the stomach but are interestingly super filling, satisfying and versatile. Oats contain a wide range of nutrients like fiber, vitamin E, essential fatty acids, etc. which make them top the healthy food charts. We tell you benefits of oats.';

    const h3 = document.createElement('h3');
    h3.innerText = "Here are the some benefits of including oatmeal in your diet:"

    // Creating bullet points:
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.innerText = "Packed with nutrition"
    const li2 = document.createElement('li');
    li2.innerText = "Rich in antioxidants"
    const li3 = document.createElement('li');
    li3.innerText = "Contains a fiber called beta-glucan";
    const li4 = document.createElement('li');
    li4.innerText = "They can lower cholesterol";
    const li5 = document.createElement('li');
    li5.innerText = "Improves blood sugar control";

    // Appending everything together:
    ul.append(li1, li2, li3, li4, li5);
    divIntroTitle.append(h2);
    divIntroPara.append(p1, p2, h3, ul);
    divIntroText.append(divIntroTitle, divIntroPara); // '.append' allows multiple nodes to be used.
    divHomePage.appendChild(divIntroText); // '.appendChild' allows ONE node to be used.
};

const renderClosingText = () => {
    const homePage = document.querySelector('#home-page');

    const div = document.createElement('div');
    div.classList.add('closing-text');

    const p = document.createElement('p');
    p.innerText = "Now go get yourself a bowl... or two!";

    div.appendChild(p);
    homePage.appendChild(div);
};

export { 
    renderMainTitle,
    renderImg,
    renderTxt,
    renderClosingText,
};