const btnConfirm = document.querySelector('#confirm')
const containerForm = document.querySelector('.container--form')
const containerResponse = document.querySelector('#done')

const input = document.querySelector('input')
const inputs = document.querySelectorAll('input')

const inputsArray = [...inputs]
const rta = inputsArray.find(value => value.value === '')

console.log(input);
console.log(rta);








const showResponse = () => {
    if(input.value === ''){
        console.log('WRK');
    } else {
        containerForm.classList.add('active')
        containerResponse.classList.remove('active')
        containerResponse.classList.add('done')
    }
}

btnConfirm.addEventListener('click', showResponse)
