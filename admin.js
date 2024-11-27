let produtosRecentes = JSON.parse(localStorage.getItem('produtosRecentesStorage')) || []; // Pega o produto do localStorage ou inicializa como array vazio, garantindo que não dê erro caso o storage esteja vazio.
let produtoSelecionado = null; // Índice do produto atualmente selecionado. Usado para ações como remoção ou edição.

// Adiciona um listener para exibir a imagem de pré-visualização
document.getElementById('url-imagem').addEventListener('input', function () {
    const url = this.value;
    const imagemPrevisao = document.getElementById('imagem-previsao');
    const img = new Image(); // Cria dinamicamente um objeto de imagem para validar a URL fornecida.
    img.src = url;
    img.onload = function () { // Executado somente quando a imagem carrega com sucesso.
        imagemPrevisao.innerHTML = `<img src="${url}" alt="Pré-visualização" style="max-width: 100%; max-height: 100%;">`;
    };
    img.onerror = function () { // Executado se a URL fornecida não corresponde a uma imagem válida.
        imagemPrevisao.innerHTML = '<span>Imagem inválida ou indisponível</span>';
    };
});

// Salva um produto no localStorage e atualiza a lista de produtos recentes
function salvarProdutoLocalStorage(produto) {
    produtosRecentes.push(produto); // Adiciona o novo produto ao array.
    localStorage.setItem('produtosRecentesStorage', JSON.stringify(produtosRecentes)); // Serializa o array para JSON antes de salvar.
}

// Calcula o preço com desconto e retorna o valor com duas casas decimais
function calcularPrecoComDesconto(preco, desconto) {
    return (preco - (preco * (desconto / 100))).toFixed(2); // `.toFixed(2)` formata o número como string com duas casas decimais.
}

// Adiciona um produto visualmente na lista de produtos recentes
function adicionarProduto(produto, index) {
    const container = document.getElementById('produtos-recentes');
    const precoDesconto = calcularPrecoComDesconto(produto.precoOriginal, produto.desconto); // Preço com desconto calculado antes de ser renderizado.
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
    container.insertAdjacentHTML('beforeend', produtoHTML); // Adiciona o HTML diretamente no DOM.
    document.querySelector(`[data-index="${index}"]`).addEventListener('click', function () {
        abrirModal(index); // Abre o modal ao clicar no produto. `index` é usado para saber qual produto foi clicado.
    });
}

// Carrega todos os produtos recentes na interface
function carregarProdutosRecentes() {
    const container = document.getElementById('produtos-recentes');
    container.innerHTML = ''; // Limpa o container antes de adicionar os itens, evitando duplicatas.
    produtosRecentes.forEach((produto, index) => adicionarProduto(produto, index)); // Itera sobre os produtos e os renderiza.
}

// Abre o modal de confirmação de remoção de um produto
function abrirModal(index) {
    if (index === null || produtosRecentes[index] === undefined) {
        return; // Retorna se o índice for inválido, prevenindo erros ao acessar elementos inexistentes.
    }
    const modal = document.getElementById('modal-confirmacao');
    const produto = produtosRecentes[index];
    document.getElementById('nome-produto-modal').innerText = produto.nome; // Exibe o nome do produto no modal.
    const imagemModal = document.getElementById('imagem-produto-modal');
    if (produto.imagem) {
        imagemModal.src = produto.imagem; // Define o `src` da imagem apenas se ela existir.
        imagemModal.style.display = 'block';
    } else {
        imagemModal.style.display = 'none'; // Oculta a imagem se não houver URL.
    }
    modal.style.display = 'flex'; // Torna o modal visível.
    produtoSelecionado = index; // Salva o índice do produto selecionado para outras ações.
}

// Fecha o modal de confirmação
function fecharModal() {
    const modal = document.getElementById('modal-confirmacao');
    modal.style.display = 'none'; // Oculta o modal.
    produtoSelecionado = null; // Reseta o índice selecionado para evitar inconsistências.
}

// Remove o produto selecionado da lista e atualiza o localStorage
function removerProduto() {
    if (produtoSelecionado !== null) {
        produtosRecentes.splice(produtoSelecionado, 1); // Remove o produto do array na posição `produtoSelecionado`.
        localStorage.setItem('produtosRecentesStorage', JSON.stringify(produtosRecentes)); // Atualiza o localStorage com a lista atualizada.
        carregarProdutosRecentes(); // Atualiza a interface para refletir as mudanças.
        fecharModal(); // Fecha o modal após a remoção.
    }
}

// Abre o modal de edição com os dados do produto preenchidos
function abrirEdicao() {
    if (produtoSelecionado === null || produtosRecentes[produtoSelecionado] === undefined) {
        return; // Retorna se não houver produto válido selecionado.
    }
    const modalEdicao = document.getElementById('modal-editar');
    const produto = produtosRecentes[produtoSelecionado];
    document.getElementById('editar-nome-produto').value = produto.nome; // Preenche os campos do modal com os dados do produto.
    document.getElementById('editar-descricao-produto').value = produto.descricao;
    document.getElementById('editar-preco-produto').value = produto.precoOriginal;
    document.getElementById('editar-desconto-produto').value = produto.desconto;
    document.getElementById('editar-url-imagem').value = produto.imagem;
    modalEdicao.style.display = 'flex'; // Torna o modal de edição visível.
}

// Fecha o modal de edição
function fecharModalEdicao() {
    const modalEdicao = document.getElementById('modal-editar');
    modalEdicao.style.display = 'none'; // Oculta o modal de edição.
    produtoSelecionado = null; // Reseta a seleção do produto.
    fecharModal();
}

// Salva as edições feitas em um produto
function salvarEdicaoProduto(e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página).
    if (produtoSelecionado !== null && produtosRecentes[produtoSelecionado] !== undefined) {
        // Atualiza o produto no array com os valores do formulário.
        produtosRecentes[produtoSelecionado] = {
            nome: document.getElementById('editar-nome-produto').value,
            descricao: document.getElementById('editar-descricao-produto').value,
            precoOriginal: parseFloat(document.getElementById('editar-preco-produto').value),
            desconto: parseFloat(document.getElementById('editar-desconto-produto').value),
            imagem: document.getElementById('editar-url-imagem').value,
            precoDesconto: calcularPrecoComDesconto(
                parseFloat(document.getElementById('editar-preco-produto').value),
                parseFloat(document.getElementById('editar-desconto-produto').value)
            )
        };
        localStorage.setItem('produtosRecentesStorage', JSON.stringify(produtosRecentes)); // Atualiza o localStorage.
        carregarProdutosRecentes(); // Recarrega a lista de produtos na interface.
        fecharModalEdicao(); // Fecha o modal de edição.
    }
}

// Listeners para ações de interface
document.querySelector('#modal-confirmacao .fechar-btn').addEventListener('click', fecharModal);
document.querySelector('#modal-editar .fechar-btn').addEventListener('click', fecharModalEdicao);
document.getElementById('confirmar-remocao').addEventListener('click', removerProduto);
document.getElementById('abrir-edicao').addEventListener('click', abrirEdicao);
document.getElementById('form-editar-produto').addEventListener('submit', salvarEdicaoProduto);

// Listener para o formulário de envio de produto
document.getElementById('formulario-produto').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário.
    // Coleta os dados do formulário.
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
    salvarProdutoLocalStorage(novoProduto); // Adiciona o produto no localStorage.
    adicionarProduto(novoProduto, produtosRecentes.length - 1); // Atualiza a interface.
    document.getElementById('formulario-produto').reset(); // Limpa os campos do formulário.
    document.getElementById('imagem-previsao').innerHTML = '<span>Imagem ficará aqui</span>'; // Reseta a pré-visualização da imagem.
});

// Carrega os produtos salvos assim que a página é carregada
carregarProdutosRecentes();

// Função para redirecionar o usuário de volta à página de compras
function voltar() {
    window.location.href = "https://arcadestop.vercel.app/"; // Redireciona para uma URL externa.
}
