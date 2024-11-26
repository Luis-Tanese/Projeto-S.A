const email = document.getElementById('email')
const spanEmail = document.getElementById('spanEmail')
validoEmail = false
const senha = document.getElementById('senha')
const spanSenha = document.getElementById('spanSenha')
validoSenha = false
// Função genérica para validação de campos

// Validação do campo email

email.addEventListener('keyup', () => {
    const validDomains = ['@gmail.com', '@yahoo.com', '@outlook.com', '@hotmail.com', '@aol.com'];
    const isValidDomain = validDomains.some(domain => email.value.endsWith(domain));
    if (isValidDomain) {
        spanEmail.setAttribute('style', 'color: green');
        email.setAttribute('style', 'border-color: green');
        validoEmail = true;
    } else {
        validoEmail = false;
        spanEmail.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');
    }
})
// Validação do campo senha

senha.addEventListener('keyup', () => {
    if(senha.value.length < 6){
        validoSenha = false
        spanSenha.setAttribute('style', 'color :red')
        senha.setAttribute('style', 'border-color: red')
    }else{
        validoSenha = true
        spanSenha.setAttribute('style', 'color: green')
        senha.setAttribute('style', 'border-color: green')
    }
})
// Função para realizar login

function login(){
    const emailValue = email.value
    const senhaValue = senha.value
    const bancoDeDados = localStorage.getItem('registro');
    if(bancoDeDados){
        const loginUser = JSON.parse(bancoDeDados);
        if (emailValue === loginUser.email && senhaValue === loginUser.senha) {
            alert('Login realizado com sucesso!');
            window.location.href="https://arcadestop.vercel.app";
        } else {
            alert('E-mail ou senha incorretos.');
        }
    } else {
        alert('Nenhuma conta registrada foi encontrada.');
    }
}
