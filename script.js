
// name & domain

const name = document.getElementById('userName')
const email = document.getElementById('userEmail')
const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
    e.preventDefault();

})

// open and close buttons

const open = document.getElementById('open');
const modalContainer = document.getElementById('modalContainer');
// const close = document.getElementById('close');


open.addEventListener('submit', () => {
    modalContainer.classList.add('show');
});

// close.addEventListener('click', () => {
//     modalContainer.classList.remove('show');
// });

