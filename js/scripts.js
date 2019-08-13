const inputs = document.querySelectorAll('form .field input');

inputs.forEach(input => {
    input.addEventListener('blur', validateInput);
    input.addEventListener('input', validateInput);
})

function validateInput(e) {
    const estados = ['valid', 'not-valid'];

    let clase = e.target.value.length === 0 ? estados[1] : estados[0];

    e.target.classList.remove(...estados);
    e.target.nextElementSibling.classList.remove(...estados);

    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    if (clase === 'not-valid') {
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alert') {
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alert');

            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
        }
    } else {
        if (e.target.parentElement.nextElementSibling.classList[0] === 'alert') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}


const mostrarPwd = document.querySelector('form .field span');

mostrarPwd.addEventListener('click', e => {
    const pswInput = document.querySelector('#password');
    if (e.target.classList.contains('mostrar')) {
        e.target.classList.remove('mostrar');
        e.target.textContent = 'Ocultar';
        pswInput.type = 'text';
    } else {
        e.target.classList.add('mostrar');
        e.target.textContent = 'Mostrar';
        pswInput.type = 'password';
    }

})
