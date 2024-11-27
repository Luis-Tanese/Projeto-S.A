let produtosCarrinho = JSON.parse(localStorage.getItem("carrinho")) || []; // Recupera o carrinho do localStorage ou inicializa como um array vazio.
let garantiaSelecionada = "sem-garantia"; // Valor padrão para a garantia.

// Função para exibir os produtos no carrinho
function carregarProdutos() {
    const containerItens = document.getElementById("container-itens");
    containerItens.innerHTML = ''; // Limpa o conteúdo atual para evitar duplicações.
    if (produtosCarrinho.length === 0) {
        containerItens.innerHTML = '<p>O carrinho está vazio.</p>'; // Adiciona mensagem de carrinho vazio se não houver itens.
    } else {
        // Itera sobre cada produto no carrinho
        produtosCarrinho.forEach((produto, indice) => {
            if (!produto.quantidade) produto.quantidade = 1; // Garante que todos os produtos tenham uma quantidade inicial de pelo menos 1.
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
            containerItens.innerHTML += produtoHTML; // Adiciona o HTML do produto ao container.
        });
    }
    atualizarTotal(); // Atualiza os valores totais do carrinho.
}

// Função que atualiza os valores totais do carrinho (itens, preço, garantia, entrega)
function atualizarTotal() {
    const quantidadeItensEl = document.getElementById("quantidade-itens");
    const precoItensEl = document.getElementById("preco-itens");
    const precoGarantiaEl = document.getElementById("preco-garantia");
    const precoEntregaEl = document.getElementById("preco-entrega");
    const totalGeralEl = document.getElementById("total-geral");

    let total = 0; // Soma dos preços de todos os produtos.
    let totalProdutos = 0; // Contador do número total de itens.
    let totalEntrega = 0; // Soma do frete total.
    produtosCarrinho.forEach((produto) => {
        total += produto.quantidade * produto.precoComDesconto; // Multiplica preço por quantidade para calcular o total por produto.
        totalProdutos += produto.quantidade; // Soma a quantidade de cada produto.
        totalEntrega += 23.90 * produto.quantidade; // Calcula o frete fixo por produto.
    });
    let valorGarantia = calcularValorGarantia(totalProdutos); // Calcula o custo da garantia com base no número de itens.

    // Atualiza os elementos no HTML com os valores calculados.
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
            return 12.90 * quantidade; // Calcula custo da garantia de 30 dias por item.
        case "1-ano":
            return 39.90 * quantidade; // Calcula custo da garantia de 1 ano por item.
        default:
            return 0; // Sem garantia não adiciona custo.
    }
}

// Função que atualiza a quantidade de um produto específico no carrinho
function atualizarQuantidade(indice) {
    const selectQuantidade = document.getElementById(`quantidade-${indice}`);
    const quantidade = parseInt(selectQuantidade.value); // Converte o valor do select para número inteiro.
    produtosCarrinho[indice].quantidade = quantidade; // Atualiza a quantidade no array.
    localStorage.setItem("carrinho", JSON.stringify(produtosCarrinho)); // Atualiza o carrinho no localStorage.
    carregarProdutos(); // Recarrega os produtos para refletir a nova quantidade.
}

// Função que remove um produto do carrinho pelo índice
function removerProduto(indice) {
    produtosCarrinho.splice(indice, 1); // Remove o produto do array pelo índice.
    localStorage.setItem("carrinho", JSON.stringify(produtosCarrinho)); // Atualiza o localStorage.
    carregarProdutos(); // Recarrega a lista de produtos.
}

// Função que atualiza o tipo de garantia selecionado
function atualizarGarantia() {
    const radiosGarantia = document.getElementsByName("garantia");
    radiosGarantia.forEach((radio) => {
        if (radio.checked) {
            garantiaSelecionada = radio.value; // Obtém o valor da garantia selecionada.
        }
    });
    atualizarTotal(); // Atualiza o total geral considerando a nova garantia.
}

// Inicializa os listeners para os botões de seleção de garantia
function inicializarListenersGarantia() {
    const radiosGarantia = document.getElementsByName("garantia");
    radiosGarantia.forEach((radio) => {
        radio.addEventListener("change", atualizarGarantia); // Adiciona evento de mudança para cada botão de garantia.
    });
}

// Executa funções de carregamento e inicialização quando a página é carregada
window.onload = function () {
    carregarProdutos(); // Exibe os produtos salvos no carrinho ao carregar a página.
    inicializarListenersGarantia(); // Configura os eventos de garantia.
};

function voltar() {
    window.location.href = "https://arcadestop.vercel.app/"; // Redireciona o usuário para a página principal.
}

// Abre o modal de visualização do carrinho
function abrirCarrinho() {
    const container = document.getElementById("container3");
    modalCarrinho.showModal(); // Mostra o modal de carrinho.
    container.innerHTML = ''; // Limpa o conteúdo anterior.
    produtosCarrinho.forEach((item, index) => adicionarCarrinho(item, index)); // Adiciona os itens do carrinho ao modal.
}

// Adiciona um produto específico no modal do carrinho
function adicionarCarrinho(item, index) {
    const container = document.getElementById("container3");
    const produtoHTML = `
    <div class="produto-item1" data-index="${index}">
        <div class="imagem-produto">
            <img src="${item.imagem}" alt="Imagem do produto" class="imagen1" onerror="this.onerror=null; this.src='default.jpg';"> 
        </div>
        <div class="produto-info">
            <h3>${item.nome}</h3>
            <p class="preco">
                <div class="preco-desconto">R$ ${item.precoComDesconto}</div>
            </p>
            <button class="botao-remover-carrinho" onclick="removerProdutoCarrinho(${index})">Remover</button>
        </div>
    </div>
    `;
    container.innerHTML += produtoHTML; // Adiciona o HTML do produto ao modal.
}

// Remove um produto do carrinho (apenas no modal)
function removerProdutoCarrinho(index) {
    produtosCarrinho.splice(index, 1); // Remove o produto do array usando o índice.
    localStorage.setItem("carrinho", JSON.stringify(produtosCarrinho)); // Atualiza o localStorage com o array modificado.
    modalCarrinho.close(); // Fecha o modal após a remoção.
}

document.getElementById("fecharCarrinho").onclick = function () {
    modalCarrinho.close(); // Fecha o modal de carrinho quando o botão é clicado.
};
