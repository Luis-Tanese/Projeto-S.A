let produtosRecentes = JSON.parse(localStorage.getItem('produtosRecentesStorage')) || [];

function salvarProdutoLocalStorage(produto) {
    produtosRecentes.push(produto);
    localStorage.setItem('produtosRecentesStorage', JSON.stringify(produtosRecentes));
}

function calcularPrecoComDesconto(preco, desconto) {
    return (preco - (preco * (desconto / 100))).toFixed(2);
}

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

function carregarProdutosRecentes() {
    produtosRecentes.forEach(produto => adicionarProduto(produto));
}

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
    document.getElementById('form-produto').reset();
});

carregarProdutosRecentes();