let produtosRecentes = JSON.parse(localStorage.getItem('produtosRecentesStorage')) || []; // Pega o produto do local storage 🐈
let produtoSelecionado = null; // Armazena o índice do produto selecionado para remoção

// Adiciona um listener para exibir a imagem de pré-visualização
document.getElementById('url-imagem').addEventListener('input', function () {
    const url = this.value;
    const imagemPrevisao = document.getElementById('imagem-previsao');
    const img = new Image(); // Cria um objeto de imagem para validar a URL
    img.src = url;
    img.onload = function () { // Quando a imagem carrega com sucesso
        imagemPrevisao.innerHTML = `<img src="${url}" alt="Pré-visualização" style="max-width: 100%; max-height: 100%;">`;
    };
    img.onerror = function () { // Se houver erro no carregamento da imagem
        imagemPrevisao.innerHTML = '<span>Imagem inválida ou indisponível</span>';
    };
});

// Salva um produto no localStorage e atualiza a lista de produtos recentes
function salvarProdutoLocalStorage(produto) {
    produtosRecentes.push(produto); // Adiciona o novo produto na lista
    localStorage.setItem('produtosRecentesStorage', JSON.stringify(produtosRecentes)); // Salva a lista atualizada
}

// Calcula o preço com desconto e retorna o valor com duas casas decimais
function calcularPrecoComDesconto(preco, desconto) {
    return (preco - (preco * (desconto / 100))).toFixed(2); // Aplica o desconto no preço
}

// Adiciona um produto visualmente na lista de produtos recentes
function adicionarProduto(produto, index) {
    const container = document.getElementById('produtos-recentes');
    const precoDesconto = calcularPrecoComDesconto(produto.precoOriginal, produto.desconto); // Calcula o preço com desconto
    const produtoHTML = `
        <div class="produto-item" data-index="${index}">
            <img src="${produto.imagem}" alt="${produto.nome}" width="100">
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p class="preco">
                    <span class="balao-desconto">${produto.desconto}%</span>
                    <span class="preco-original">R$ ${produto.precoOriginal}</span>
                    <div class="preco-desconto">Preço: R$ ${precoDesconto}</div>
                </p>
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', produtoHTML); // Insere o HTML do produto no container
    document.querySelector(`[data-index="${index}"]`).addEventListener('click', function () {
        abrirModal(index); // Adiciona um listener para abrir o modal de confirmação ao clicar no produto
    });
}

// Carrega todos os produtos recentes na interface
function carregarProdutosRecentes() {
    const container = document.getElementById('produtos-recentes');
    container.innerHTML = ''; // Limpa a lista para evitar duplicações
    produtosRecentes.forEach((produto, index) => adicionarProduto(produto, index)); // Adiciona cada produto na interface
}

// Abre o modal de confirmação de remoção de um produto
function abrirModal(index) {
    const modal = document.getElementById('modal-confirmacao');
    const produto = produtosRecentes[index];
    document.getElementById('nome-produto-modal').innerText = produto.nome; // Exibe o nome do produto no modal
    const imagemModal = document.getElementById('imagem-produto-modal');
    if (produto.imagem) {
        imagemModal.src = produto.imagem; // Exibe a imagem no modal, se disponível
        imagemModal.style.display = 'block';
    } else {
        imagemModal.style.display = 'none';
    }
    modal.style.display = 'flex'; // Torna o modal visível
    produtoSelecionado = index; // Salva o índice do produto selecionado para remoção
}

// Fecha o modal de confirmação
function fecharModal() {
    const modal = document.getElementById('modal-confirmacao');
    modal.style.display = 'none'; // Oculta o modal
    produtoSelecionado = null; // Limpa a seleção de produto
}

// Remove o produto selecionado da lista e atualiza o localStorage
function removerProduto() {
    if (produtoSelecionado !== null) {
        produtosRecentes.splice(produtoSelecionado, 1); // Remove o produto da lista
        localStorage.setItem('produtosRecentesStorage', JSON.stringify(produtosRecentes)); // Atualiza o localStorage
        carregarProdutosRecentes(); // Recarrega a lista para refletir a remoção
        fecharModal(); // Fecha o modal de confirmação
    }
}

// Listeners para o modal de confirmação
document.getElementById('confirmar-remocao').addEventListener('click', removerProduto); // Confirma a remoção
document.getElementById('cancelar-remocao').addEventListener('click', fecharModal); // Cancela a remoção
document.querySelector('.fechar-btn').addEventListener('click', fecharModal); // Fecha o modal ao clicar no "x"

// Listener para o formulário de envio de produto
document.getElementById('formulario-produto').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário padrão
    // Coleta os dados do formulário
    const nome = document.getElementById('nome-produto').value;
    const descricao = document.getElementById('descricao-produto').value;
    const precoOriginal = parseFloat(document.getElementById('preco-produto').value);
    const desconto = parseFloat(document.getElementById('desconto-produto').value);
    const imagem = document.getElementById('url-imagem').value;
    const novoProduto = {
        nome,
        descricao,
        precoOriginal,
        precoDesconto: calcularPrecoComDesconto(precoOriginal, desconto),
        imagem,
        desconto
    };
    salvarProdutoLocalStorage(novoProduto); // Salva o novo produto no localStorage
    adicionarProduto(novoProduto, produtosRecentes.length - 1); // Adiciona o produto na interface
    document.getElementById('formulario-produto').reset(); // Limpa o formulário
    document.getElementById('imagem-previsao').innerHTML = '<span>Imagem ficará aqui</span>'; // Reseta a pré-visualização da imagem
});

// Carrega os produtos salvos assim que a página é carregada
carregarProdutosRecentes();

// Função para redirecionar o usuário de volta à página de compras
function voltar() {
    window.location.href = "https://arcadestop.netlify.app/";
}
