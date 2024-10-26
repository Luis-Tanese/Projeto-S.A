function adicionarAoCarrinho() {
    const nomeProdutoEl = document.querySelector('.nome-produto');
    const precoOriginalEl = document.querySelector('.valor-original-produto');
    const descontoEl = document.querySelector('.desconto');
    const precoComDescontoEl = document.querySelector('.preco-com-desconto');
    if (nomeProdutoEl && precoOriginalEl && descontoEl && precoComDescontoEl) {
        const nomeProduto = nomeProdutoEl.innerText.replace(/\s+/g, '-');
        const precoOriginal = precoOriginalEl.innerText.replace('R$: ', '').trim();
        const desconto = descontoEl.innerText.replace('%', '').trim();
        const precoComDesconto = precoComDescontoEl.innerText.replace('R$: ', '').trim();
        const imagemEl = document.getElementsByClassName("imagem-produto-central");
        var caminho = "";
        for (var i = 0; i < imagemEl.length; i++) {
            var imgTag = imagemEl[i].getElementsByTagName('img')[0];
            var srcLink = imgTag.src;
            caminho = srcLink.split('/').slice(-2).join('/');
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
    window.location.href = "https://arcadestop.netlify.app/";
}

let produtosCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function abrirCarrinho() {
    produtosCarrinho.forEach(item => adicionarCarrinho(item));
}

function adicionarCarrinho(item) {
    const container = document.getElementById("conteiner3");
    const produtoHTML = `
    <div class="produto-item1">
        <div class="imagem-produto">
            <img src="../${item.imagem}" alt="" class="imagen1">
        </div>
        <div class="produto-info">
            <h3>${item.nome}</h3>
            <p class="preco">
                <div class="preco-desconto">R$ ${item.precoComDesconto}</div>
            </p>
        </div>
    </div>
    `;
    container.innerHTML += produtoHTML;
}

const modalC = document.getElementById("modalCarrinho");
const fecharC = document.getElementById("fecharCarrinho");

function abrirCarrin() {
    modalC.showModal();
    abrirCarrinho()
}
fecharC.onclick = function () {
    modalC.close();
};