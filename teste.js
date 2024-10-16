// Recupera os produtos armazenados no localStorage ou inicializa o array vazio
let produtosRecentes = JSON.parse(localStorage.getItem('produtosRecentesStorage')) || [];

// Função para salvar produtos no localStorage
function salvarProdutoLocalStorage(produto) {
    produtosRecentes.push(produto);
    localStorage.setItem('produtosRecentesStorage', JSON.stringify(produtosRecentes));
}

// Função para calcular o preço com desconto
function calcularPrecoComDesconto(preco, desconto) {
    return (preco - (preco * (desconto / 100))).toFixed(2);
}

// Função para adicionar o produto à interface
function adicionarProduto(produto) {
    const container = document.getElementById('produtos-recentes');
    const precoDesconto = calcularPrecoComDesconto(produto.precoOriginal, produto.desconto);
    const produtoHTML = `
        <div class="produto-item">
            <a href="javascript:void(0);" style="text-decoration: none; color: black">
                <img src="${produto.imagem}" alt="${produto.nome}" width="100">
                <div class="produto-info">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <p class="preco">
                        <span class="balao-desconto">${produto.desconto}%</span>
                        <span class="preco-original">R$ ${produto.precoOriginal}</span>
                        <div class="preco-desconto">Preço: R$ ${precoDesconto}</div>
                    </p>
                </div>
            </a>
        </div>
    `;
    container.innerHTML += produtoHTML;
}

// Função para carregar os produtos recentes ao abrir a página
function carregarProdutosRecentes() {
    produtosRecentes.forEach(produto => adicionarProduto(produto));
}

// Função que cria a página do produto e a salva no localStorage
function abrirProduto(nomeProduto) {
    const produto = produtosRecentes.find(p => p.nome === nomeProduto);
    if (produto) {
        const paginaProduto = `
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${produto.nome}</title>
            </head>
            <body>
                <h1>${produto.nome}</h1>
                <img src="${produto.imagem}" alt="${produto.nome}" width="200">
                <p>Descrição: ${produto.descricao}</p>
                <p>Preço Original: R$ ${produto.precoOriginal}</p>
                <p>Preço com Desconto: R$ ${calcularPrecoComDesconto(produto.precoOriginal, produto.desconto)}</p>
            </body>
            </html>
        `;
        localStorage.setItem(`pagina_${produto.nome}`, paginaProduto);
        // Simula abrir a página salva
        document.write(paginaProduto);
    }
}

// Evento do formulário para adicionar um produto
document.getElementById('form-produto').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const precoOriginal = parseFloat(document.getElementById('preco').value);
    const desconto = parseFloat(document.getElementById('desconto').value);
    const imagem = document.getElementById('imagem').value;

    const novoProduto = {
        nome,
        descricao,
        precoOriginal,
        precoDesconto: calcularPrecoComDesconto(precoOriginal, desconto),
        imagem,
        desconto
    };

    salvarProdutoLocalStorage(novoProduto);
    adicionarProduto(novoProduto);
    
    // Limpa o formulário após salvar
    document.getElementById('form-produto').reset();
});

// Carregar produtos recentes ao abrir a página
carregarProdutosRecentes();