// name & domain
const name = document.getElementById('userName');
const email = document.getElementById('userEmail');
const form = document.getElementById('form');

// modal & buttons
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');


function updateModal(name, email) {
    const modalNameField = document.querySelector('.modal-user-name');
    const modalEmailField = document.querySelector('.modal-user-email');

    modalNameField.innerText = name;
    modalEmailField.innerText = email;
} 

// validates
function validateForm(form) {
    const formFields = form.elements;
    const userName = formFields["userName"].value;
    const userEmail = formFields["userEmail"].value;
    let valid = true;

    // validate input field
    if (!(userEmail.length > 7) || !(userEmail.includes("@"))) {
        alert("Invalid email entered");
        valid = false;
    };

    // validate modal
    if (valid) {
        updateModal(userName, userEmail);
    }
    
    return valid;
}

// Validate our form when the user submits it
form.addEventListener('submit', (e) => {

    e.preventDefault();

    // now we need to validate the form
    formValid = validateForm(form);

    // show the modal if the form was validated
    if (formValid === true) {
        modal.classList.add("active");
        overlay.classList.add("active");
    }
});

// close modal button 
closeBtn.addEventListener('click', function(e) {
   e.preventDefault();
    modal.classList.remove("active");
    overlay.classList.remove("active");
});