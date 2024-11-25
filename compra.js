let produtosCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let garantiaSelecionada = "sem-garantia"; // Configuração inicial da garantia

// Função para exibir os produtos no carrinho
function carregarProdutos() {
    const containerItens = document.getElementById("container-itens");
    containerItens.innerHTML = ''; // Limpa o conteúdo atual
    if (produtosCarrinho.length === 0) {
        containerItens.innerHTML = '<p>O carrinho está vazio.</p>'; // Mostra mensagem se o carrinho estiver vazio
    } else {
        // Itera sobre cada produto no carrinho
        produtosCarrinho.forEach((produto, indice) => {
            if (!produto.quantidade) produto.quantidade = 1; // Define a quantidade padrão para 1 se não estiver definida
            const produtoHTML = `
            <div class="item" data-indice="${indice}">
                <img src="${produto.imagem}" alt="Imagem do Produto" class="imagem" onerror="this.onerror=null; this.src='default.jpg';">
                <div class="item-info">
                    <h3>${produto.nome}</h3>
                    <p><strong>Preço com desconto:</strong> R$ ${produto.precoComDesconto}</p>
                    <div class="secao-quantidade">
                        <label for="quantidade-${indice}">Quantidade:</label>
                        <select id="quantidade-${indice}" onchange="atualizarQuantidade(${indice})">
                            <option value="1" ${produto.quantidade === 1 ? 'selected' : ''}>1</option>
                            <option value="2" ${produto.quantidade === 2 ? 'selected' : ''}>2</option>
                            <option value="3" ${produto.quantidade === 3 ? 'selected' : ''}>3</option>
                        </select>
                    </div>
                    <button onclick="removerProduto(${indice})">Excluir</button>
                </div>
            </div>
            `;
            containerItens.innerHTML += produtoHTML; // Adiciona o produto ao HTML do carrinho
        });
    }
    atualizarTotal(); // Atualiza o total de itens e preços
}

// Função que atualiza os valores totais do carrinho (itens, preço, garantia, entrega)
function atualizarTotal() {
    const quantidadeItensEl = document.getElementById("quantidade-itens");
    const precoItensEl = document.getElementById("preco-itens");
    const precoGarantiaEl = document.getElementById("preco-garantia");
    const precoEntregaEl = document.getElementById("preco-entrega");
    const totalGeralEl = document.getElementById("total-geral");

    let total = 0; // Total de preço dos produtos
    let totalProdutos = 0; // Contador de itens
    let totalEntrega = 0; // Total do frete
    produtosCarrinho.forEach((produto) => {
        total += produto.quantidade * produto.precoComDesconto; // Calcula o valor total de cada produto (preço x quantidade)
        totalProdutos += produto.quantidade; // Incrementa o total de itens
        totalEntrega += 23.90 * produto.quantidade; // Calcula frete fixo por produto
    });
    let valorGarantia = calcularValorGarantia(totalProdutos); // Calcula o custo da garantia baseada na seleção

    // Atualiza os elementos no HTML com os valores calculados
    quantidadeItensEl.innerText = `${totalProdutos} Itens`;
    precoItensEl.innerText = `R$ ${total.toFixed(2)}`;
    precoGarantiaEl.innerText = `R$ ${valorGarantia.toFixed(2)}`;
    precoEntregaEl.innerText = `R$ ${totalEntrega.toFixed(2)}`;
    totalGeralEl.innerText = `Total geral: R$ ${(total + valorGarantia + totalEntrega).toFixed(2)}`;
}

// Função que calcula o valor da garantia dependendo da quantidade de itens e tipo de garantia
function calcularValorGarantia(quantidade) {
    switch (garantiaSelecionada) {
        case "30-dias":
            return 12.90 * quantidade; // Garantia de 30 dias
        case "1-ano":
            return 39.90 * quantidade; // Garantia de 1 ano
        default:
            return 0; // Sem garantia
    }
}

// Função que atualiza a quantidade de um produto específico no carrinho
function atualizarQuantidade(indice) {
    const selectQuantidade = document.getElementById(`quantidade-${indice}`);
    const quantidade = parseInt(selectQuantidade.value);
    produtosCarrinho[indice].quantidade = quantidade; // Atualiza a quantidade no array
    localStorage.setItem("carrinho", JSON.stringify(produtosCarrinho)); // Salva no localStorage
    carregarProdutos(); // Recarrega os produtos para refletir a nova quantidade
}

// Função que remove um produto do carrinho pelo índice
function removerProduto(indice) {
    produtosCarrinho.splice(indice, 1); // Remove o produto do array
    localStorage.setItem("carrinho", JSON.stringify(produtosCarrinho)); // Atualiza o localStorage
    carregarProdutos(); // Recarrega a lista de produtos
}

// Função que atualiza o tipo de garantia selecionado
function atualizarGarantia() {
    const radiosGarantia = document.getElementsByName("garantia");
    radiosGarantia.forEach((radio) => {
        if (radio.checked) {
            garantiaSelecionada = radio.value; // Define a garantia selecionada
        }
    });
    atualizarTotal(); // Recalcula o total com a nova garantia
}

// Inicializa os listeners para os botões de seleção de garantia
function inicializarListenersGarantia() {
    const radiosGarantia = document.getElementsByName("garantia");
    radiosGarantia.forEach((radio) => {
        radio.addEventListener("change", atualizarGarantia); // Adiciona evento de mudança
    });
}

// Executa funções de carregamento e inicialização quando a página é carregada
window.onload = function () {
    carregarProdutos(); // Carrega e exibe os produtos no carrinho
    inicializarListenersGarantia(); // Configura os listeners de garantia
};

function voltar() {
    window.location.href = "https://arcadestop.vercel.app/";
}
