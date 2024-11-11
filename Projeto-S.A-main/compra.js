let produtos = JSON.parse(localStorage.getItem("carrinho")) || [];

function carregarProdutos() {
    const container = document.getElementById("item-container");
    container.innerHTML = '';
    if (produtos.length === 0) {
        container.innerHTML = '<p>O carrinho está vazio.</p>';
    } else {
        produtos.forEach((item, index) => {
            const produtoHTML = `
            <div class="item" data-index="${index}">
                <img src="${item.imagem}" alt="Imagem do Produto" class="imagen1" onerror="this.onerror=null; this.src='default.jpg';">
                <div class="item-info">
                    <h3>${item.nome}</h3>
                    <p><strong>Preço com desconto:</strong> R$ ${item.precoComDesconto}</p>
                    <div class="quantity-section">
                        <label for="quantity-${index}">Quantidade:</label>
                        <select id="quantity-${index}" onchange="atualizarQuantidade(${index})">
                            <option value="1" ${item.quantidade === 1 ? 'selected' : ''}>1</option>
                            <option value="2" ${item.quantidade === 2 ? 'selected' : ''}>2</option>
                            <option value="3" ${item.quantidade === 3 ? 'selected' : ''}>3</option>
                        </select>
                    </div>
                    <button onclick="removerProduto(${index})">Excluir</button>
                </div>
            </div>
            `;
            container.innerHTML += produtoHTML;
        });
    }
}

function removerProduto(index) {
    produtos.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(produtos));
    carregarProdutos();
}

carregarProdutos();
