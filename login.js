const email = document.getElementById('email')
const spanEmail = document.getElementById('spanEmail')
validEmail = false
const senha = document.getElementById('senha')
const spanSenha = document.getElementById('spanSenha')
validSenha = false
// Função genérica para validação de campos

// Validação do campo email

email.addEventListener('keyup', () => {
    const validDomains = ['@gmail.com', '@yahoo.com', '@outlook.com', '@hotmail.com', '@aol.com'];
    const isValidDomain = validDomains.some(domain => email.value.endsWith(domain));
    if (isValidDomain) {
        spanEmail.setAttribute('style', 'color: green');
        email.setAttribute('style', 'border-color: green');
        validEmail = true;
    } else {
        validEmail = false;
        spanEmail.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');
    }
})
// Validação do campo senha

senha.addEventListener('keyup', () => {
    if(senha.value.length < 6){
        validSenha = false
        spanSenha.setAttribute('style', 'color :red')
        senha.setAttribute('style', 'border-color: red')
    }else{
        validSenha = true
        spanSenha.setAttribute('style', 'color: green')
        senha.setAttribute('style', 'border-color: green')
    }
})
// Função para realizar login

function login(){
    const emailValue = email.value
    const senhaValue = senha.value
    const storedLogin = localStorage.getItem('login')
    if(storedLogin){
        const parsedLogin = JSON.parse(storedLogin)
        if (emailValue === parsedLogin.email && senhaValue === parsedLogin.senha) {
            alert('Login realizado com sucesso!')
            window.location.href = 'index.html'
        } else {
            alert('E-mail ou senha incorretos.');
        }
    } else {
        alert('Nenhuma conta registrada foi encontrada.');
    }
}
