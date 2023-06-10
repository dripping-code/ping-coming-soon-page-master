const email = document.querySelector('.email');
const submit = document.querySelector('.submit');
const form = document.querySelector('.form');

submit.addEventListener('click', (e) => {
    e.preventDefault();

    const regex = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;

    if (email.value.match(regex)) {
        console.log("valid");
        form.classList.remove('error');
    } else {
        console.log("error");
        form.classList.add('error');
    }
})