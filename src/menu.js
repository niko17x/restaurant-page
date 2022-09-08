
const renderMenuTitle = (txt) => {
    const container = document.querySelector('#container');
    const divMenuPage = document.createElement('div');
    divMenuPage.setAttribute('id', 'menu-page');

    const divTitle = document.createElement('div');
    divTitle.setAttribute('id', 'title');

    const h1 = document.createElement('h1');
    h1.innerText = "Check out the Menu!";

    divTitle.appendChild(h1);
    container.append(divTitle, divMenuPage);
};

// ! PUT EACH MENU ITEM INTO AN ARRAY, LOOP THROUGH EACH TO GENERATE:
const renderMenuItems = (img, title, description, price) => {
    const container = document.querySelector('#container');
    const menuPage = container.querySelector('#menu-page');

    const divMenuItems = document.createElement('div');
    divMenuItems.classList.add('menu-items'); // Should be linked to this tag.

    const menuTitle = document.createElement('h3');
    menuTitle.classList.add('menu-title');
    menuTitle.innerText = title;

    const divMenuImg = document.createElement('div');
    divMenuImg.classList.add('menu-img');
    const newImg = new Image();
    newImg.src = img;

    const menuDescription = document.createElement('p');
    menuDescription.classList.add('menu-description');
    menuDescription.innerText = description;

    const menuPrice = document.createElement('span');
    menuPrice.classList.add('menu-price');
    menuPrice.innerText = price;

    divMenuImg.appendChild(newImg);
    divMenuItems.append(menuTitle, divMenuImg, menuDescription, menuPrice);
    menuPage.append(divMenuItems)

};





export {
    renderMenuTitle,
    renderMenuItems,
};