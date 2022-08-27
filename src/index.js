//Nodes
const btnConfirm = document.querySelector('#confirm')
const containerForm = document.querySelector('.container--form')
const containerResponse = document.querySelector('#done')

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

//Utils
const hasNumber = (myString) => {
    return /\d/.test(myString);
}

function onInputs(input, span, ms1,
    length, ms2, callback, ms3 ) {
    if (input.value === '') {
        input.style.borderColor = 'hsl(0, 100%, 66%)'
        span.textContent = ms1
    } else if (length) {
        input.style.borderColor = 'hsl(0, 100%, 66%)'
        span.textContent = ms2
    } else if (callback) {
        input.style.borderColor = 'hsl(0, 100%, 66%)'
        span.textContent = ms3
    } else {
        input.style.borderColor = 'green'
        span.textContent = ''
    }
}

// const onInputs2 = (input, number) => {
//     input.addEventListener(oninput, () => {
//         if (input.value.length > number) {
//             input.value = input.value.slice(0, number); 
//         } 
//     })   
// }

// const showResponse = (conditional) => {
//     if (conditional) {
//         containerForm.classList.add('active')
//         containerResponse.classList.remove('active')
//         containerResponse.classList.add('done')
//     } else {
//         console.log('Not wrk');
//     }
// }

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

    onInputs(inputMonth, spanMonth, 
            'Mes invalido'
            );

    onInputs(inputCvc, spanCvc, 
            'Ingresa tu CVC',
            inputCvc.value.length < 3 || inputCvc.value.length > 3,
            'CVC = 3',
            );
})











// const onInputName = () => {
//     if (inputName.value === '') {
//         inputName.style.borderColor = 'hsl(0, 100%, 66%)'
//         spanName.textContent = 'Ingresa un nombre'
//     } 
//     else if (inputName.value.length <= 8) {
//         inputName.style.borderColor = 'hsl(0, 100%, 66%)'
//         spanName.textContent = 'La cantidad de caracteres tiene que ser mayor a 8'
//     } else if (hasNumber(inputName.value)) {
//         inputName.style.borderColor = 'hsl(0, 100%, 66%)'
//         spanName.textContent = 'No puede contener un numero'

//     } else {
//         inputName.style.borderColor = 'green'
//         spanName.textContent = ''
//     }

// }

// const onInputNumber = () => {
//     if (inputNumber.value === '') {
//         inputNumber.style.borderColor = 'hsl(0, 100%, 66%)'
//         spanNumber.textContent = 'Ingresa tu numero de tarjeta'
//     } else if (inputNumber.value.length < 16) {

//     }
// }