document.addEventListener('DOMContentLoaded', function () {
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
            const produto = {
                nome: nomeProduto,
                precoOriginal: precoOriginal,
                desconto: desconto,
                precoComDesconto: precoComDesconto
            };
            localStorage.setItem(nomeProduto, JSON.stringify(produto));
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
});