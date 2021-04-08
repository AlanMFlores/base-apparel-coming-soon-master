const form = document.getElementById('email');
const inputEmail = document.getElementById('email-address');
const submitButton = document.getElementById('email-button');
const iconError = document.querySelector('.icon-error');
const messageError = document.querySelector('.message-error');

const correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;


const validarFormulario = (e) => {
    if(correo.test(e.target.value)) {
        inputEmail.classList.remove('error');
        iconError.style.display = 'none';
        messageError.style.opacity = '0';
    } else {
        inputEmail.classList.add('error');
        iconError.style.display = 'block';
        messageError.style.opacity = '1';

    }
}

submitButton.addEventListener('click', validarFormulario)

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(validarFormulario) {
        form.reset();
        inputEmail.classList.remove('error');
        iconError.style.display = 'none';
        messageError.innerHTML = 'Thanks for suscribing';
        messageError.style.color = 'hsl(0, 36%, 70%)'
    }
})

