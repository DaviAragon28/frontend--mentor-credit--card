//Nodes
const btnConfirm = document.querySelector('#confirm')
const btnContinue = document.querySelector('#continue')
const containerForm = document.querySelector('.container--form')
const containerResponse = document.querySelector('#done')
const form = document.querySelector('form')

//Inputs
const inputName = document.querySelector('#name')
const inputNumber = document.querySelector('#number--card')
const inputMonth = document.querySelector('#month')
// const inputYear = document.querySelector('#year')
const inputCvc = document.querySelector('#cvc')

//Spans
const spanName = document.querySelector('#span--name')
const spanNumber = document.querySelector('#span--number')
const spanMonth = document.querySelector('#span--month')
const spanYear = document.querySelector('#span--year')
const spanCvc = document.querySelector('#span--cvc')

let validForm;



//Utils
const hasNumber = (myString) => {
    return /\d/.test(myString);
}

function onInputs(input, span, ms1,
    length, ms2, callback, ms3) {
    if (input.value === '') {
        input.style.borderColor = 'hsl(0, 100%, 66%)'
        span.textContent = ms1
        validForm = false
    } else if (length) {
        input.style.borderColor = 'hsl(0, 100%, 66%)'
        span.textContent = ms2
        validForm = false
    } else if (callback) {
        input.style.borderColor = 'hsl(0, 100%, 66%)'
        span.textContent = ms3
        validForm = false
    } else {
        input.style.borderColor = 'green'
        span.textContent = ''
        validForm = true

    }
    return validForm
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
})


const showResponse = (conditional) => {
    if (conditional) {
        containerForm.classList.add('active')
        containerResponse.classList.remove('active')
        containerResponse.classList.add('done')
    }
}

btnConfirm.addEventListener('click', () => {
    onInputs(inputName, spanName, 
            'Ingresa un nombre', 
            inputName.value.length <= 8, 
            'La cantidad de caracteres tiene que ser mayor a 8', 
            hasNumber(inputName.value), 
            'No puede contener un número'
            );

    onInputs(inputNumber, spanNumber, 
            'Ingresa tu número de tarjeta', 
            inputNumber.value.length < 16 || inputNumber.value.length > 16,
            'La cantidad de caracteres tiene que ser igual a 16',
            );

            
    onInputs(inputCvc, spanCvc, 
            'Ingresa tu CVC',
            inputCvc.value.length < 3 || inputCvc.value.length > 3,
            'CVC = 3'
            );
                
    onInputs(inputMonth, spanMonth, 
            'Mes inválido'
            );

    setTimeout(() => {
        showResponse(validForm)
    }, 2500);
})

