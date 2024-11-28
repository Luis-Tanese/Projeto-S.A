const nome = document.getElementById('nome'); 
const spanNome = document.getElementById('spanNome');
validNome = false;
const sobrenome = document.getElementById('sobrenome');
const spanSobrenome = document.getElementById('spanSobrenome');
validSobrenome = false;
const email = document.getElementById('email');
const spanEmail = document.getElementById('spanEmail');
validEmail = false;
const senha = document.getElementById('senha');
const spanSenha = document.getElementById('spanSenha');
validSenha = false;
const confirmaSenha = document.getElementById('confirmaSenha');
const spanConfirmaSenha = document.getElementById('spanConfirmaSenha');
validConfirmaSenha = false;

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
});

// Validação do campo sobrenome
sobrenome.addEventListener('keyup', () => {
    if (sobrenome.value.length <= 2) { // Verifica se o sobrenome tem pelo menos 3 caracteres.
        validSobrenome = false;
        spanSobrenome.setAttribute('style', 'color :red');
        sobrenome.setAttribute('style', 'border-color: red');
    } else {
        validSobrenome = true;
        spanSobrenome.setAttribute('style', 'color: green');
        sobrenome.setAttribute('style', 'border-color: green');
    }
});

// Validação do campo nome
nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) { // Verifica se o nome tem pelo menos 3 caracteres.
        validNome = false;
        spanNome.setAttribute('style', 'color :red');
        nome.setAttribute('style', 'border-color: red');
    } else {
        validNome = true;
        spanNome.setAttribute('style', 'color: green');
        nome.setAttribute('style', 'border-color: green');
    }
});

// Validação do campo senha
senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) { // Verifica se a senha tem pelo menos 6 caracteres.
        validSenha = false;
        spanSenha.setAttribute('style', 'color :red');
        senha.setAttribute('style', 'border-color: red');
    } else {
        validSenha = true;
        spanSenha.setAttribute('style', 'color: green');
        senha.setAttribute('style', 'border-color: green');
    }
});

// Validação do campo confirmação de senha
confirmaSenha.addEventListener('keyup', () => {
    if (senha.value != confirmaSenha.value) { // Verifica se as senhas coincidem.
        validConfirmaSenha = false;
        spanConfirmaSenha.setAttribute('style', 'color :red');
        confirmaSenha.setAttribute('style', 'border-color: red');
    } else {
        validConfirmaSenha = true;
        spanConfirmaSenha.setAttribute('style', 'color: green');
        confirmaSenha.setAttribute('style', 'border-color: green');
    }
});

// Função para cadastrar
function cadastrar() {
    if (validEmail && validSenha && validSobrenome && validNome && validConfirmaSenha) {
        // Verifica se todos os campos estão válidos antes de prosseguir.
        const nameValue = document.getElementById('nome').value;
        const sobreNomeValue = document.getElementById('sobrenome').value;
        const emailValue = document.getElementById('email').value;
        const senhaValue = document.getElementById('senha').value;

        const registro = {
            nome: nameValue,
            sobreNome: sobreNomeValue,
            email: emailValue,
            senha: senhaValue
        };
        const registroString = JSON.stringify(registro);
        localStorage.setItem("registro", registroString);

        alert("Usuário cadastrado!");
        
    } else {
        alert('Algo está errado.'); // Alerta o usuário se alguma validação falhar.
    }
}
