const produtosBest = [
    {nome: "Produto 4", precoOriginal: 100, precoDesconto: 80, imagem: "Imagens/produto4.png", desconto: 20},
    {nome: "Produto 5", precoOriginal: 150, precoDesconto: 120, imagem: "Imagens/produto5.png", desconto: 20},
    {nome: "Produto 6", precoOriginal: 200, precoDesconto: 100, imagem: "Imagens/produto6.png", desconto: 50},
    {nome: "Produto 25", precoOriginal: 100, precoDesconto: 80, imagem: "Imagens/produto25.png", desconto: 20},
    {nome: "Produto 26", precoOriginal: 500, precoDesconto: 80, imagem: "Imagens/produto26.png", desconto: 20},
    {nome: "Produto 27", precoOriginal: 500, precoDesconto: 80, imagem: "Imagens/produto27.png", desconto: 20},
    {nome: "Produto 28", precoOriginal: 500, precoDesconto: 80, imagem: "Imagens/produto28.png", desconto: 20},
    {nome: "Produto 29", precoOriginal: 500, precoDesconto: 80, imagem: "Imagens/produto29.png", desconto: 20},
    {nome: "Produto 30", precoOriginal: 500, precoDesconto: 80, imagem: "Imagens/produto30.png", desconto: 20},
    {nome: "Produto 31", precoOriginal: 500, precoDesconto: 80, imagem: "Imagens/produto31.png", desconto: 20},
    {nome: "Produto 32", precoOriginal: 500, precoDesconto: 80, imagem: "Imagens/produto32.png", desconto: 20},
    {nome: "Produto 33", precoOriginal: 500, precoDesconto: 80, imagem: "Imagens/produto33.png", desconto: 20}
];

produtosBest.forEach(produto => {
    adicionarProduto('best-sellers', produto.nome, produto.precoOriginal, produto.precoDesconto, produto.imagem, produto.desconto);
});

const produtosPerifericos = [
    {nome: "Produto 7", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto7.png", desconto: 33},
    {nome: "Produto 18", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto18.png", desconto: 33},
    {nome: "Produto 19", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto19.png", desconto: 33},
    {nome: "Produto 20", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto20.png", desconto: 33},
    {nome: "Produto 21", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto21.png", desconto: 33},
    {nome: "Produto 22", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto22.png", desconto: 33},
    {nome: "Produto 23", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto23.png", desconto: 33},
    {nome: "Produto 24", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto24.png", desconto: 33}
];

produtosPerifericos.forEach(produto => {
    adicionarProduto('perifericos', produto.nome, produto.precoOriginal, produto.precoDesconto, produto.imagem, produto.desconto);
});

const produtosMelhores = [
    {nome: "Produto 9", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto9.png", desconto: 33},
    {nome: "Produto 10", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/Produtos10.png", desconto: 33},
    {nome: "Produto 11", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produtos11.png", desconto: 33},
    {nome: "Produto 12", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto12.png", desconto: 33},
    {nome: "Produto 13", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto13.png", desconto: 33},
    {nome: "Produto 14", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto14.png", desconto: 33},
    {nome: "Produto 15", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto15.png", desconto: 33},
    {nome: "Produto 16", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto16.png", desconto: 33},
    {nome: "Produto 17", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto17.png", desconto: 33}
];

produtosMelhores.forEach(produto => {
    adicionarProduto('mais-vendidos', produto.nome, produto.precoOriginal, produto.precoDesconto, produto.imagem, produto.desconto);
});

const produtosRecentes = []; 

function moverCarrossel(categoria, direcao) {
    const container = document.getElementById(categoria);
    const width = container.querySelector('.produto-item').offsetWidth;
    container.scrollLeft += width * direcao;
}

function adicionarProduto(categoria, nome, precoOriginal, precoDesconto, imagem, desconto) {
    const container = document.getElementById(categoria);
    let linkProduto = nome.replace(" ", "-")
    const produtoHTML = `
        <div class="produto-item">
            <a href="${linkProduto}.html" style="text-decoration: none; color: black">
            <img src="${imagem}" alt="${nome}">
            <div class="produto-info">
                <h3>${nome}</h3>
                <p class="preco">
                    <span class="preco-original">R$ ${precoOriginal}</span>
                    <span class="preco-desconto">R$ ${precoDesconto}</span>
                    <div class="balao-desconto">Desconto: ${desconto}%</div>
                </p>
            </div>
            </a>
        </div>
    `;
    container.innerHTML += produtoHTML;
}
