function adicionarAoCarrinho() {
    const nomeProdutoEl = document.querySelector('.nome-produto');
    const precoOriginalEl = document.querySelector('.valor-original-produto');
    const descontoEl = document.querySelector('.desconto');
    const precoComDescontoEl = document.querySelector('.preco-com-desconto');
    if (nomeProdutoEl && precoOriginalEl && descontoEl && precoComDescontoEl) {
        const nomeProduto = nomeProdutoEl.innerText.replace(/\s+/g, '-');
        const precoOriginal = precoOriginalEl.innerText.replace('R$ ', '').trim();
        const desconto = descontoEl.innerText.replace('% OFF', '').trim();
        const precoComDesconto = precoComDescontoEl.innerText.replace('R$ ', '').trim();
        const imagemEl = document.getElementsByClassName("imagem-produto-central");
        let caminho = "";
        for (let i = 0; i < imagemEl.length; i++) {
            const imgTag = imagemEl[i].getElementsByTagName('img')[0];
            const srcLink = imgTag.src;
            if (srcLink.startsWith('http://') || srcLink.startsWith('https://')) {
                caminho = srcLink;
            } else {
                caminho = srcLink.split('/').slice(-2).join('/');
            }
        }
        const produto = {
            nome: nomeProduto,
            precoOriginal: precoOriginal,
            desconto: desconto,
            precoComDesconto: precoComDesconto,
            imagem: caminho
        };
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        const produtoExiste = carrinho.some(item => item.nome === nomeProduto);
        if (produtoExiste) {
            alert('O produto já está no carrinho!');
            return;
        }
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        alert('Produto adicionado ao carrinho!');
    } else {
        console.error("Erro: Elementos do produto não encontrados.");
    }
}

const botaoCarrinho = document.querySelector('.Adicionar-Carrinho');
if (botaoCarrinho) {
    botaoCarrinho.addEventListener('click', adicionarAoCarrinho);
} else {
    console.error("Erro: Botão 'Adicionar ao Carrinho' não encontrado.");
}

function voltar() {
    window.location.href = "https://arcadestop.vercel.app/";
}

let produtosCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function abrirCarrinho() {
    const container = document.getElementById("container3");
    modalCarrinho.showModal();
    container.innerHTML = '';
    produtosCarrinho.forEach((item, index) => adicionarCarrinho(item, index));
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
    container.innerHTML += produtoHTML;
}

// Remove um produto do carrinho
function removerProdutoCarrinho(index) {
    produtosCarrinho.splice(index, 1); // remove o item pelo índice
    localStorage.setItem("carrinho", JSON.stringify(produtosCarrinho)); // salva no localStorage
    modalCarrinho.close();
}

document.getElementById("fecharCarrinho").onclick = function () {
    modalCarrinho.close();
};