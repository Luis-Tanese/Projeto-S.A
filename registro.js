const nome = document.getElementById('nome') // Campo de input para o nome
const spanNome = document.getElementById('spanNome') // Elemento para mostrar o status da validação do nome
validNome = false // Variável que indica se o campo nome é válido ou não
const sobrenome = document.getElementById('sobrenome') // Campo de input para o sobrenome
const spanSobrenome = document.getElementById('spanSobrenome') // Elemento para mostrar o status da validação do sobrenome
validSobrenome = false // Variável que indica se o campo sobrenome é válido ou não
const email = document.getElementById('email') // Campo de input para o email
const spanEmail = document.getElementById('spanEmail') // Variável que indica se o campo email é válido ou não
validEmail = false // Variável que indica se o campo email é válido ou não
const senha = document.getElementById('senha') // Campo de input para a senha
const spanSenha = document.getElementById('spanSenha') // Elemento para mostrar o status da validação da senha
validSenha = false  // Variável que indica se o campo senha é válido ou não
const confirmaSenha = document.getElementById('confirmaSenha') // Campo de input para confirmar a senha
const spanConfirmaSenha  = document.getElementById('spanConfirmaSenha') // Elemento para mostrar o status da validação da confirmação de senha
validConfirmaSenha = false // Variável que indica se o campo confirmaSenha é válido ou não

email.addEventListener('keyup', () => {
    const validDomains = ['@gmail.com', '@yahoo.com', '@outlook.com', '@hotmail.com', '@aol.com']; // Domínios válidos
    const isValidDomain = validDomains.some(domain => email.value.endsWith(domain)); // Verifica se o email tem um dos domínios válidos
    if (isValidDomain) {
        // Se o domínio for válido, muda a cor da borda e do texto para verde
        spanEmail.setAttribute('style', 'color: green');
        email.setAttribute('style', 'border-color: green');
        validEmail = true;// Marca o email como válido
    } else {
       // Se o domínio não for válido, muda a cor para vermelho
        validEmail = false;
        spanEmail.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');
    }
})
// Validação do sobrenome
sobrenome.addEventListener('keyup', () => {
    if(sobrenome.value.length <= 2){ // Se o sobrenome tem 2 ou menos caracteres
        validSobrenome = false
        spanSobrenome.setAttribute('style', 'color :red')
        sobrenome.setAttribute('style', 'border-color: red')
    }else{
        // Caso contrário, valida como correto
        validSobrenome = true
        spanSobrenome.setAttribute('style', 'color: green')
        sobrenome.setAttribute('style', 'border-color: green')
    }
})
// Validação do nome
nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){ // Se o nome tem 2 ou menos caracteres
        validNome  = false
        spanNome.setAttribute('style', 'color :red')
        nome.setAttribute('style', 'border-color: red')
    }else{
        // Caso contrário, valida como correto
        validNome  = true
        spanNome.setAttribute('style', 'color: green')
        nome.setAttribute('style', 'border-color: green')
    }
})
// Validação da senha
senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){ // Se a senha tem 5 ou menos caracteres
        validSenha = false
        spanSenha.setAttribute('style', 'color :red')
        senha.setAttribute('style', 'border-color: red')
    }else{
       // Caso contrário, valida como correto
        validSenha = true
        spanSenha.setAttribute('style', 'color: green')
        senha.setAttribute('style', 'border-color: green')
    }
})
   // Validação da confirmação de senha
confirmaSenha.addEventListener('keyup', () => {
    if(senha.value != confirmaSenha.value){ // Se a senha e a confirmação de senha não coincidem
        validConfirmaSenha = false;
        validConfirmaSenha = false
        spanConfirmaSenha.setAttribute('style', 'color :red')
        confirmaSenha.setAttribute('style', 'border-color: red')
    }else{
       // Caso contrário, valida como correto
        validConfirmaSenha = true
        spanConfirmaSenha.setAttribute('style', 'color: green')
        confirmaSenha.setAttribute('style', 'border-color: green')
    }
})
// Função para cadastrar o usuário
function cadastrar(){
    if(validEmail && validSenha && validSobrenome && validNome  && validConfirmaSenha){
        // Recupera os valores dos campos do formulário
        const nameValue = document.getElementById('nome').value
        const sobreNomeValue = document.getElementById('sobrenome').value
        const emailValue = document.getElementById('email').value
        const senhaValue = document.getElementById('senha').value
        const registro = {
            // Cria objetos para armazenar os dados do usuário e login
            nome: nameValue,
            sobreNome: sobreNomeValue,
            email: emailValue,
            senha: senhaValue
        }
        const senha = {
            email: emailValue,
            senha: senhaValue
        }
       // Converte os objetos para strings JSON
        const registroString = JSON.stringify(registro)
        const loginString = JSON.stringify(senha)
        // Exibe no console para depuração
        console.log(registroString + " " + registro)
        // Armazena os dados no localStorage (armazenamento local do navegador)
        localStorage.setItem("registro", registroString)
        localStorage.setItem("login", loginString)
    '  // Redireciona o usuário para a página de login
        window.location.href = 'http://127.0.0.1:5500/login.html'
    } else {
        // Caso algum campo não seja válido, exibe uma mensagem de erro
        alert('algo está errado.')
    }
}
