let produtos = JSON.parse(localStorage.getItem("carrinho")) || [];
let garantiaSelecionada = "sem-garantia";

function carregarProdutos() {
    const container = document.getElementById("item-container");
    container.innerHTML = '';
    if (produtos.length === 0) {
        container.innerHTML = '<p>O carrinho está vazio.</p>';
    } else {
        produtos.forEach((item, index) => {
            if (!item.quantidade) item.quantidade = 1;
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
    atualizarTotal();
}

function atualizarTotal() {
    const quantidadeItensEl = document.getElementById("quantidade-itens");
    const totalItensEl = document.getElementById("total-itens");
    const precoItensEl = document.getElementById("preco-itens");
    const precoGarantiaEl = document.getElementById("preco-garantia");
    const precoEntregaEl = document.getElementById("preco-entrega");
    const totalGeralEl = document.getElementById("total-geral");
    let total = 0;
    let totalProdutos = 0;
    let totalEntrega = 0;
    produtos.forEach((item) => {
        total += item.quantidade * item.precoComDesconto;
        totalProdutos += item.quantidade;
        totalEntrega += 23.90 * item.quantidade;
    });
    let valorGarantia = calcularValorGarantia(totalProdutos);
    quantidadeItensEl.innerText = `${totalProdutos} Itens`;
    totalItensEl.innerText = `${totalProdutos} item(s)`;
    precoItensEl.innerText = `R$ ${total.toFixed(2)}`;
    precoGarantiaEl.innerText = `R$ ${valorGarantia.toFixed(2)}`;
    precoEntregaEl.innerText = `R$ ${totalEntrega.toFixed(2)}`;
    totalGeralEl.innerText = `Total geral: R$ ${(total + valorGarantia + totalEntrega).toFixed(2)}`;
}

function calcularValorGarantia(quantidade) {
    switch (garantiaSelecionada) {
        case "30-dias":
            return 12.90 * quantidade;
        case "1-ano":
            return 39.90 * quantidade;
        default:
            return 0;
    }
}

function atualizarQuantidade(index) {
    const select = document.getElementById(`quantity-${index}`);
    const quantidade = parseInt(select.value);
    produtos[index].quantidade = quantidade;
    localStorage.setItem("carrinho", JSON.stringify(produtos));
    carregarProdutos();
}

function removerProduto(index) {
    produtos.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(produtos));
    carregarProdutos();
}

function atualizarGarantia() {
    const radios = document.getElementsByName("warranty");
    radios.forEach((radio) => {
        if (radio.checked) {
            garantiaSelecionada = radio.value;
        }
    });
    atualizarTotal();
}

function inicializarGarantiaListeners() {
    const radios = document.getElementsByName("warranty");
    radios.forEach((radio) => {
        radio.addEventListener("change", atualizarGarantia);
    });
}

window.onload = function () {
    carregarProdutos();
    inicializarGarantiaListeners();
};
