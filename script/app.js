const $ = document
const form = $.querySelector('form')
const usernameInput = $.getElementById('username-input')
const emailInput = $.getElementById('email-input')
const passwordInput = $.getElementById('password-input')
const repeatPasswordInput = $.getElementById('repeat-password-input')
const submitbtn = $.querySelector('.form__btn')
const usernameWarning = $.querySelector('.username__warning')
const emailWarning = $.querySelector('.email__warning')
const passwordWarning = $.querySelector('.password__warning')
const repeatPasswordWarning = $.querySelector('.repeat-password__warning')

let users = [
    {name:'bardyavahydy96' , email:'bardyavahydy96@gmail.com' , password:1234 },
    {name:'rezaqoreishi77' , email:'rezaqoreishi77@gmail.com' , password:5678 },
    {name:'sina-rezagholipour' , email:'sinarghlp@gmail.com' , password:9012 },
]

function checkUsername(){
    if( usernameInput.value.trim() !== '' ){
        let isTrue = users.some( user => user.name === usernameInput.value )
        if( isTrue ) failedToRegister(usernameWarning,usernameInput,'This username is already taken')
        else SuccessfulRegistration(usernameWarning,usernameInput,'')
    }else failedToRegister(usernameWarning,usernameInput,'This field cannot be empty. Choose a name for yourself.')
}

function checkEmail(){
    if( emailInput.value.trim() !== '' ){
        let isTrue = users.some( user => user.email === emailInput.value )
        if( isTrue ) failedToRegister(emailWarning,emailInput,'This email is already taken')
        else{
            if( emailInput.value.includes( '@gmail.com' ) ) SuccessfulRegistration(emailWarning,emailInput,'')
            else failedToRegister(emailWarning,emailInput,'Your email is not valid')
        }
    }else failedToRegister(emailWarning,emailInput,'The email value cannot be empty.')
}

function checkpassword(){
    if(passwordInput.value.trim() === '') failedToRegister(passwordWarning,passwordInput,'The password is empty. Please enter a password.')
    else if( passwordInput.value.length <=6 ) failedToRegister(passwordWarning,passwordInput,'Your password must be at least 6 characters long')
    else if( !isNaN(passwordInput.value) ) failedToRegister(passwordWarning,passwordInput,'Password must contain letters and numbers')
    else SuccessfulRegistration(passwordWarning,passwordInput,'')
}

function checkrepeatPass(){
    if(repeatPasswordInput.value.trim() === ''){
        failedToRegister(repeatPasswordWarning,repeatPasswordInput,'The password is empty. Please enter a password.')
    }else if( repeatPasswordInput.value.trim() !== passwordInput.value ){
        failedToRegister(repeatPasswordWarning,repeatPasswordInput,'Passwords do not match')
    }else{
        SuccessfulRegistration(repeatPasswordWarning,repeatPasswordInput,'')
    }
}

function SuccessfulRegistration(warning,input,warningText){
    warning.innerText = warningText
    warning.style.color = 'green'
    input.style.border = '.2rem solid green'
    input.nextElementSibling.nextElementSibling.style.display = 'none'
    input.nextElementSibling.style.display = 'block'
}

function failedToRegister(warning,input,warningText){
    warning.innerText = warningText
    warning.style.color = 'red'
    input.style.border = '.2rem solid red'
    input.nextElementSibling.nextElementSibling.style.display = 'block'
    input.nextElementSibling.style.display = 'none'
}

function submitHandler(event){
    event.preventDefault()
    checkUsername()
    checkEmail()
    checkpassword()
    checkrepeatPass()
}

form.onsubmit = event => submitHandler(event)
repeatPasswordInput.onpaste= event => event.preventDefault()