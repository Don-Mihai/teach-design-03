const inputName = document.querySelector('.form__name')
const inputEmail = document.querySelector('.form__email')
const inputMessage = document.querySelector('.form__message')

const button = document.querySelector('.form__button')

// let obj = {}

 
// inputName.oninput = (e) => {
//     obj.name = e.target.value
//     console.log(obj)
// }

// inputEmail.oninput = (e) => {
//     obj.email = e.target.value
//     console.log(obj)
// }

// inputMessage.oninput = (e) => {
//     obj.message = e.target.value
//     console.log(obj)
// }

button.addEventListener('click', () => {
    const obj = {
        name: inputName.value,
        email: inputEmail.value,
        message: inputMessage.value,
    }

    if(!obj.name) {
        // вызов уведомления
        
    }





})