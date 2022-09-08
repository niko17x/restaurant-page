// TODO: CREATE THE CONTACTS PAGE!

const renderContactTitle = () => {
    const container = document.querySelector('#container');

    const divContactPage = document.createElement('div');
    divContactPage.setAttribute('id', 'contact-page');

    const divTitle = document.createElement('div');
    divTitle.setAttribute('id', 'title');

    const h1 = document.createElement('h1');
    h1.innerText = "We would love to hear from you!"

    divTitle.appendChild(h1);
    container.append(divTitle, divContactPage);
};


/* <div id="contact-form">
            <form action="">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required>
    
                <label for="email">email</label>
                <input type="email" name="email" id="email" required>
    
                <label for="textbox"></label>
                <textarea name="textbox" id="textbox" cols="30" rows="10"></textarea>
            </form>
        </div> */

const renderForm = () => {
    const contactPage = document.querySelector('#contact-page');

    const divContactForm = document.createElement('div');
    divContactForm.setAttribute('id', 'contact-form');

    const form = document.createElement('form');
    form.classList.add('form');

    const labelName = document.createElement('label');
    labelName.setAttribute('for', 'name');
    labelName.innerText = 'Name';

    const divName = document.createElement('div');
    divName.classList.add('input-form')

    const inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('name', 'name');
    inputName.setAttribute('id', 'name');
    inputName.setAttribute('required', '');

    const divEmail = document.createElement('div');
    divEmail.classList.add('input-form')

    const labelEmail = document.createElement('label');
    labelEmail.setAttribute('for', 'email');
    labelEmail.innerText = "Email";

    const inputEmail = document.createElement('input');
    inputName.setAttribute('type', 'email');
    inputName.setAttribute('name', 'email');
    inputName.setAttribute('id', 'email');
    inputName.setAttribute('required', '');

    const divTextArea = document.createElement('div');
    divTextArea.classList.add('input-form')

    const inputTextBox = document.createElement('label');
    inputTextBox.setAttribute('for', 'textbox');
    inputTextBox.innerText = "Write your message here"


    const textBox = document.createElement('textarea');
    textBox.setAttribute('name', 'text-box');
    textBox.setAttribute('id', 'text-box');
    textBox.setAttribute('cols', '30');
    textBox.setAttribute('rows', '10');
    
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.innerText = "Submit";


    divName.append(labelName, inputName);
    divEmail.append(labelEmail, inputEmail);
    divTextArea.append(inputTextBox, textBox);

    form.append(divName, divEmail, divTextArea, submitBtn);
    divContactForm.append(form);
    contactPage.append(divContactForm);
};

// const renderSubmitBtn = () => {
//     const contactForm = document.querySelector('#contact-form');

//     const submitBtn = document.createElement('button');
//     submitBtn.setAttribute('type', 'submit');
//     submitBtn.innerText = 'Submit';

//     contactForm.appendChild(submitBtn);
// }

//! TESTING - FUNCTION TO PASS IN PARAMETERS FOR MULTIPLE FORM LABELS/INPUTS:
// const labelName, attribute name, innerText name.
// function createLabel(attName, innerName) {
//     const labelName = document.createElement('label');
//     labelName.setAttribute('for', attName);
//     labelName.innerText = innerName;
//     return labelName;
// };

// function createInput(attType, attName) {
//     const inputName = document.createElement('input');
//     inputName.setAttribute('type', attType);
//     inputName.setAttribute('name', attName);
//     inputName.setAttribute('id', attName);
//     inputName.setAttribute('required');
//     return inputName;

// };

export {
    renderContactTitle,
    renderForm,
}