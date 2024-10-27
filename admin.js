let produtosRecentes = JSON.parse(localStorage.getItem('produtosRecentesStorage')) || [];
let produtoSelecionado = null;

document.getElementById('imagem').addEventListener('input', function () {
    const url = this.value;
    const imagemPreview = document.getElementById('imagem-preview');
    const img = new Image();
    img.src = url;
    img.onload = function () {
        imagemPreview.innerHTML = `<img src="${url}" alt="Pré-visualização" style="max-width: 100%; max-height: 100%;">`;
    };
    img.onerror = function () {
        imagemPreview.innerHTML = '<span>Imagem inválida ou indisponível</span>';
    };
});

function salvarProdutoLocalStorage(produto) {
    produtosRecentes.push(produto);
    localStorage.setItem('produtosRecentesStorage', JSON.stringify(produtosRecentes));
}

function calcularPrecoComDesconto(preco, desconto) {
    return (preco - (preco * (desconto / 100))).toFixed(2);
}

function adicionarProduto(produto, index) {
    const container = document.getElementById('produtos-recentes');
    const precoDesconto = calcularPrecoComDesconto(produto.precoOriginal, produto.desconto);
    const produtoHTML = `
        <div class="produto-item" data-index="${index}">
            <img src="${produto.imagem}" alt="${produto.nome}" width="100">
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p class="preco">
                    <span class="balao-desconto">${produto.desconto}%</span>
                    <span class="preco-original">R$ ${produto.precoOriginal}</span>
                    <div class="preco-desconto">Preço: R$ ${precoDesconto}</div>
                </p>
            </div>
        </div>
    `;
    container.innerHTML += produtoHTML;
    document.querySelector(`[data-index="${index}"]`).addEventListener('click', function () {
        abrirModal(index);
    });
}

function carregarProdutosRecentes() {
    produtosRecentes.forEach((produto, index) => adicionarProduto(produto, index));
}

function abrirModal(index) {
    const modal = document.getElementById('modal-confirmacao');
    const produto = produtosRecentes[index];
    document.getElementById('nome-produto-modal').innerText = produto.nome;
    const imagemModal = document.getElementById('imagem-produto-modal');
    if (produto.imagem) {
        imagemModal.src = produto.imagem;
        imagemModal.style.display = 'block';
    } else {
        imagemModal.style.display = 'none';
    }
    modal.style.display = 'flex';
    produtoSelecionado = index;
}

function fecharModal() {
    const modal = document.getElementById('modal-confirmacao');
    modal.style.display = 'none';
    produtoSelecionado = null;
}

function removerProduto() {
    if (produtoSelecionado !== null) {
        produtosRecentes.splice(produtoSelecionado, 1);
        localStorage.setItem('produtosRecentesStorage', JSON.stringify(produtosRecentes));
        document.getElementById('produtos-recentes').innerHTML = '';
        carregarProdutosRecentes();
        fecharModal();
    }
}

document.getElementById('confirmar-remocao').addEventListener('click', removerProduto);
document.getElementById('cancelar-remocao').addEventListener('click', fecharModal);
document.querySelector('.close-btn').addEventListener('click', fecharModal);

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
    adicionarProduto(novoProduto, produtosRecentes.length - 1);
    document.getElementById('form-produto').reset();
    document.getElementById('imagem-preview').innerHTML = '<span>Imagem ficará aqui</span>';
});

carregarProdutosRecentes();

function voltar() {
    window.location.href = "https://arcadestop.netlify.app/";
}
