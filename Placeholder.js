let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; // Recupera o carrinho do localStorage ou inicializa como um array vazio se não existir.

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho() {
    const nomeProdutoEl = document.querySelector('.nome-produto');
    const precoOriginalEl = document.querySelector('.valor-original-produto');
    const descontoEl = document.querySelector('.desconto');
    const precoComDescontoEl = document.querySelector('.preco-com-desconto');
    
    if (nomeProdutoEl && precoOriginalEl && descontoEl && precoComDescontoEl) {
        // Extrai os valores do DOM, formatando strings para remover espaços e símbolos desnecessários
        const nomeProduto = nomeProdutoEl.innerText.replace(/\s+/g, '-'); // Substitui espaços no nome por hifens.
        const precoOriginal = precoOriginalEl.innerText.replace('R$ ', '').trim(); // Remove o "R$ " do preço original.
        const desconto = descontoEl.innerText.replace('% OFF', '').trim(); // Remove o "% OFF" do desconto.
        const precoComDesconto = precoComDescontoEl.innerText.replace('R$ ', '').trim(); // Remove o "R$ " do preço com desconto.
        
        const imagemEl = document.getElementsByClassName("imagem-produto-central");
        let caminho = ""; // Variável para armazenar o caminho da imagem.
        
        for (let i = 0; i < imagemEl.length; i++) {
            const imgTag = imagemEl[i].getElementsByTagName('img')[0]; // Obtém a tag `<img>` da imagem.
            const srcLink = imgTag.src;
            if (srcLink.startsWith('http://') || srcLink.startsWith('https://')) {
                // Se a imagem tiver um link completo, usa diretamente.
                caminho = srcLink;
            } else {
                // Se for um caminho relativo, extrai as últimas partes para criar um caminho relativo.
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
        
        // Verifica se o produto já existe no carrinho (comparando o nome do produto).
        const produtoExiste = carrinho.some(item => item.nome === nomeProduto);
        if (produtoExiste) {
            alert('O produto já está no carrinho!'); // Alerta o usuário se o produto já estiver no carrinho.
            return;
        }
        
        carrinho.push(produto); // Adiciona o produto ao array do carrinho.
        localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage com o novo carrinho.
        alert('Produto adicionado ao carrinho!'); // Exibe mensagem de sucesso.
    } else {
        // Exibe um erro no console se algum elemento necessário não for encontrado.
        console.error("Erro: Elementos do produto não encontrados.");
    }
}
//-----------------------------------------------------------------------------------------------------------------------

// Adiciona um listener ao botão "Adicionar ao Carrinho".
const botaoCarrinho = document.querySelector('.Adicionar-Carrinho');
if (botaoCarrinho) {
    botaoCarrinho.addEventListener('click', adicionarAoCarrinho); // Associa a função ao clique do botão.
} else {
    console.error("Erro: Botão 'Adicionar ao Carrinho' não encontrado."); // Loga um erro se o botão não for encontrado.
}

// Função para redirecionar o usuário para outra página.
function voltar() {
    window.location.href = "https://arcadestop.vercel.app/";
}

// Abre o modal que exibe o carrinho.
function abrirCarrinho() {
    const container = document.getElementById("container3");
    modalCarrinho.showModal(); // Exibe o modal.
    container.innerHTML = ''; // Limpa o conteúdo anterior do modal.
    carrinho.forEach((item, index) => adicionarCarrinho(item, index)); // Adiciona os produtos ao modal do carrinho.
}

// Adiciona um produto ao modal do carrinho.
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
    container.innerHTML += produtoHTML; // Adiciona o HTML do produto ao container do modal.
}

// Remove um produto do carrinho.
function removerProdutoCarrinho(index) {
    carrinho.splice(index, 1); // Remove o produto do array pelo índice.
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o carrinho no localStorage.
    modalCarrinho.close(); // Fecha o modal do carrinho.
}

// Fecha o modal do carrinho quando o botão de fechar é clicado.
document.getElementById("fecharCarrinho").onclick = function () {
    modalCarrinho.close();
};

// Alias para abrir o carrinho (função com outro nome que chama a função existente).
function abrirCarrin() {
    abrirCarrinho();
}

function comprarCarrinho(){
    window.location.href = "https://arcadestop.vercel.app/compra.html";
}
