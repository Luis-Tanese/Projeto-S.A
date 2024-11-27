const email = document.getElementById('email'); // Seleciona o campo de e-mail.
const spanEmail = document.getElementById('spanEmail'); // Seleciona o elemento de feedback visual para o campo de e-mail.
validoEmail = false; // Variável de controle para validação do e-mail.
const senha = document.getElementById('senha'); // Seleciona o campo de senha.
const spanSenha = document.getElementById('spanSenha'); // Seleciona o elemento de feedback visual para o campo de senha.
validoSenha = false; // Variável de controle para validação da senha.

// Validação do campo email
email.addEventListener('keyup', () => {
    const validDomains = ['@gmail.com', '@yahoo.com', '@outlook.com', '@hotmail.com', '@aol.com']; // Domínios aceitos para e-mail.
    const isValidDomain = validDomains.some(domain => email.value.endsWith(domain)); // Verifica se o e-mail termina com um dos domínios válidos.
    if (isValidDomain) {
        spanEmail.setAttribute('style', 'color: green'); // Altera a cor do texto para verde.
        email.setAttribute('style', 'border-color: green'); // Altera a cor da borda do campo para verde.
        validoEmail = true; // Marca o e-mail como válido.
    } else {
        validoEmail = false; // Marca o e-mail como inválido.
        spanEmail.setAttribute('style', 'color: red'); // Altera a cor do texto para vermelho.
        email.setAttribute('style', 'border-color: red'); // Altera a cor da borda do campo para vermelho.
    }
});

// Validação do campo senha
senha.addEventListener('keyup', () => {
    if (senha.value.length < 6) { // Verifica se a senha tem pelo menos 6 caracteres.
        validoSenha = false; // Marca a senha como inválida.
        spanSenha.setAttribute('style', 'color :red'); // Altera a cor do texto para vermelho.
        senha.setAttribute('style', 'border-color: red'); // Altera a cor da borda do campo para vermelho.
    } else {
        validoSenha = true; // Marca a senha como válida.
        spanSenha.setAttribute('style', 'color: green'); // Altera a cor do texto para verde.
        senha.setAttribute('style', 'border-color: green'); // Altera a cor da borda do campo para verde.
    }
});

// Função para realizar login
function login() {
    const emailValue = email.value; // Obtém o valor do campo de e-mail.
    const senhaValue = senha.value; // Obtém o valor do campo de senha.
    const bancoDeDados = localStorage.getItem('registro'); // Recupera o registro do localStorage.

    if (bancoDeDados) {
        const loginUser = JSON.parse(bancoDeDados); // Converte o registro do formato string para objeto.
        if (emailValue === loginUser.email && senhaValue === loginUser.senha) {
            // Verifica se o e-mail e senha fornecidos correspondem ao registrado.
            alert("Login realizado com sucesso!");
            
        } else {
            alert('E-mail ou senha incorretos.'); // Alerta o usuário se os dados não coincidirem.
        }
    } else {
        alert('Nenhuma conta registrada foi encontrada.'); // Informa que não há registros no banco de dados.
    }
}
