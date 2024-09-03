let nome = document.getElementById('nome')
let spanNome = document.getElementById('spanNome')
validNome = false
let sobrenome = document.getElementById('sobrenome')
let spanSobrenome = document.getElementById('spanSobrenome')
validSobrenome = false
let email = document.getElementById('email')
let spanEmail = document.getElementById('spanEmail')
validEmail = false
let senha = document.getElementById('senha')
let spanSenha = document.getElementById('spanSenha')
validSenha = false
let confirmaSenha = document.getElementById('confirmaSenha')
let spanConfirmaSenha  = document.getElementById('spanConfirmaSenha')
validConfirmaSenha = false
email.addEventListener('keyup', () => {
    if(email.value.endsWith('@gmail.com')){
        spanEmail.setAttribute('style', 'color: green')
        email.setAttribute('style', 'border-color: green')
        validEmail = true
    }else{
        validEmail = false
        spanEmail.setAttribute('style', 'color :red')
        email.setAttribute('style', 'border-color: red')
    }
})
sobrenome.addEventListener('keyup', () => {
    if(sobrenome.value.length <= 2){
        validSobrenome = false
        spanSobrenome.setAttribute('style', 'color :red')
        sobrenome.setAttribute('style', 'border-color: red')
    }else{
        validSobrenome = true
        spanSobrenome.setAttribute('style', 'color: green')
        sobrenome.setAttribute('style', 'border-color: green')
    }
})
nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        validNome  = false
        spanNome.setAttribute('style', 'color :red')
        nome.setAttribute('style', 'border-color: red')
    }else{
        validNome  = true
        spanNome.setAttribute('style', 'color: green')
        nome.setAttribute('style', 'border-color: green')
    }
})
senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
        validSenha = false
        spanSenha.setAttribute('style', 'color :red')
        senha.setAttribute('style', 'border-color: red')
    }else{
        validSenha = true
        spanSenha.setAttribute('style', 'color: green')
        senha.setAttribute('style', 'border-color: green')
    }
})
   
confirmaSenha.addEventListener('keyup', () => {
    if(senha.value != confirmaSenha.value){
        validConfirmaSenha = false
        spanConfirmaSenha.setAttribute('style', 'color :red')
        confirmaSenha.setAttribute('style', 'border-color: red')
    }else{
        validConfirmaSenha = true
        spanConfirmaSenha.setAttribute('style', 'color: green')
        confirmaSenha.setAttribute('style', 'border-color: green')
    }
})

function cadastrar(){
    if(validEmail && validSenha && validSobrenome && validNome  && validConfirmaSenha){
        window.location.href='login.html'
    }else{
        alert('algo está errado.')
    }
}
