// Lista de produtos para a seção "Mais Vendidos"
const produtosMaisVendidos = [
    { nome: "Gabinete Gamer Hyrax", precoOriginal: 100, precoDesconto: 80, imagem: "Imagens/produto4.png", desconto: 20 },
    { nome: "Controle PS5", precoOriginal: 150, precoDesconto: 120, imagem: "Imagens/produto5.png", desconto: 20 },
    { nome: "Joystick Sem Fio Nintendo Switch", precoOriginal: 408, precoDesconto: 367, imagem: "Imagens/produto6.png", desconto: 10 },
    { nome: "Volante Logitech G29", precoOriginal: 2105, precoDesconto: 1804, imagem: "Imagens/produto25.png", desconto: 5 },
    { nome: "Dancer Blanket", precoOriginal: 500, precoDesconto: 228, imagem: "Imagens/produto26.png", desconto: 20 },
    { nome: "Cadeira Cockpit", precoOriginal: 33159, precoDesconto: 32164, imagem: "Imagens/produto27.png", desconto: 3 },
    { nome: "Mouse Pad Gamer Com Led", precoOriginal: 55, precoDesconto: 39, imagem: "Imagens/produto28.png", desconto: 20 },
    { nome: "Monitor Gamer Mancer", precoOriginal: 759, precoDesconto: 519, imagem: "Imagens/produto29.png", desconto: 20 },
    { nome: "Capacete Iron Man", precoOriginal: 2299, precoDesconto: 1935, imagem: "Imagens/produto30.png", desconto: 10 },
    { nome: "Controle do Deadpool", precoOriginal: 500, precoDesconto: 299, imagem: "Imagens/produto31.png", desconto: 40 },
    { nome: "Oculus Quest 2", precoOriginal: 3915, precoDesconto: 2889, imagem: "Imagens/Esgotadoproduto32.png", desconto: 26 },
    { nome: "Asus Rog Phone", precoOriginal: 5200, precoDesconto: 4999, imagem: "Imagens/Esgotadoproduto33.png", desconto: 5 },
];
produtosMaisVendidos.forEach(produto => adicionarProduto("mais-vendidos", produto)); // Adiciona cada produto da lista à seção "Mais Vendidos".

// Lista de produtos para a seção "Periféricos"
const produtosPerifericos = [
    { nome: "Controle Powera Wired Super Mario Bros", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto7.png", desconto: 33 },
    { nome: "Headset Fone de Ouvido Havit", precoOriginal: 189, precoDesconto: 147, imagem: "Imagens/produto18.png", desconto: 14 },
    { nome: "Redragon TECLADO MECANICO GAMER", precoOriginal: 300, precoDesconto: 211, imagem: "Imagens/produto19.png", desconto: 30 },
    { nome: "Teclado Mecânico sem fio Logitech POP", precoOriginal: 799, precoDesconto: 529, imagem: "Imagens/produto20.png", desconto: 34 },
    { nome: "Teclado Gamer Logitech G213", precoOriginal: 408, precoDesconto: 300, imagem: "Imagens/produto21.png", desconto: 26 },
    { nome: "Mouse Gamer Logitech G502 X", precoOriginal: 529, precoDesconto: 429, imagem: "Imagens/produto22.png", desconto: 15 },
    { nome: "Headset Gamer Redragon", precoOriginal: 257, precoDesconto: 236, imagem: "Imagens/produto23.png", desconto: 8 },
    { nome: "Mouse Gamer Fallen Pantera Pro", precoOriginal: 499, precoDesconto: 299, imagem: "Imagens/Esgotadoproduto24.png", desconto: 33 },
];
produtosPerifericos.forEach(produto => adicionarProduto("perifericos", produto)); // Adiciona cada produto da lista à seção "Periféricos".

// Lista de produtos para a seção "Melhores Video Games"
const produtosMelhores = [
    { nome: "ONIKUMA-K10", precoOriginal: 245, precoDesconto: 80, imagem: "Imagens/produto8.png", desconto: 66 },
    { nome: "Nintendo Switch Oled", precoOriginal: 2599, precoDesconto: 1889, imagem: "Imagens/produto9.png", desconto: 43 },
    { nome: "Playstation 4", precoOriginal: 2159, precoDesconto: 1839, imagem: "Imagens/Produtos10.png", desconto: 18 },
    { nome: "Xbox Series X", precoOriginal: 4329, precoDesconto: 3799, imagem: "Imagens/produtos11.png", desconto: 33 },
    { nome: "Xbox One S", precoOriginal: 1799, precoDesconto: 1599, imagem: "Imagens/produto12.png", desconto: 20 },
    { nome: "PlayStation 5 Slim", precoOriginal: 3999, precoDesconto: 3379, imagem: "Imagens/produto13.png", desconto: 8 },
    { nome: "Nintendo Switch Lite", precoOriginal: 1499, precoDesconto: 1394, imagem: "Imagens/produto14.png", desconto: 5 },
    { nome: "Xbox 360", precoOriginal: 789, precoDesconto: 600, imagem: "Imagens/produto15.png", desconto: 10 },
    { nome: "PlayStation 5 Pro", precoOriginal: 6999, precoDesconto: 6509, imagem: "Imagens/Esgotadoproduto16.png", desconto: 3 },
    { nome: "PlayStation 3", precoOriginal: 1299, precoDesconto: 999, imagem: "Imagens/Esgotadoproduto17.png", desconto: 15 },
];
produtosMelhores.forEach(produto => adicionarProduto("melhores-video-games", produto)); // Adiciona cada produto da lista à seção "Melhores Video Games".

// Função para movimentar o carrossel de produtos horizontalmente
function moverCarrossel(categoria, direcao) {
    const container = document.getElementById(categoria);
    const largura = container.querySelector(".produto-item").offsetWidth; // Obtém a largura de um item do carrossel.
    container.scrollLeft += largura * direcao; // Move o carrossel para a direita ou esquerda.
}

// Função que adiciona um produto em uma categoria específica na página
function adicionarProduto(categoria, produto) {
    const container = document.getElementById(categoria);
    let produtoHTML;
    if (produto.imagem.includes("Esgotado")) { // produto esgotado tem um visual diferente
        produtoHTML = `
        <div class="produto-item">
            <a href="javascript:void(0);" onclick="produtoEsgotado()" style="text-decoration: none; color: black">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p class="preco">
                    <span class="balao-desconto">${produto.desconto}%</span>
                    <span class="preco-original">R$ ${produto.precoOriginal}</span>
                    <div class="preco-desconto">R$ ${produto.precoDesconto}</div>
                </p>
            </div>
            </a>
        </div>
    `;
    } else { // produto disponível com link para a página específica
        let linkProduto = produto.nome.replace(/\s+/g, "-"); // Gera um link baseado no nome do produto, substituindo espaços por hifens.
        produtoHTML = `
        <div class="produto-item">
            <a href="SitesProdutos/${linkProduto}.html" style="text-decoration: none; color: black">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p class="preco">
                    <span class="balao-desconto">${produto.desconto}%</span>
                    <span class="preco-original">R$ ${produto.precoOriginal}</span>
                    <div class="preco-desconto">Preço: R$ ${produto.precoDesconto}</div>
                </p>
            </div>
            </a>
        </div>
    `;
    }
    container.innerHTML += produtoHTML; // Adiciona o HTML do produto ao container da categoria.
}

// Modal de produto esgotado
const modal = document.getElementById("modalEsgotado");
const botaoFechar = document.getElementById("fecharModal");

function produtoEsgotado() {
    modal.showModal(); // Abre o modal para produtos esgotados.
}
botaoFechar.onclick = function () {
    modal.close(); // Fecha o modal ao clicar no botão.
};

// Troca de banners a cada intervalo de tempo
let imagens = ["Imagens/produto12.png", "Imagens/produto13.png", "Imagens/produto14.png"];
let indiceAtual = 0;
let tempoIntervalo = 5000; // Tempo de troca do banner em milissegundos.
let imagemBanner = document.getElementById("imagem-banner");
let botoes = document.querySelectorAll(".botao-banner");

function mudarBanner() {
    imagemBanner.src = imagens[indiceAtual]; // Atualiza a imagem do banner.
    botoes.forEach((btn, idx) => {
        btn.classList.toggle("active", idx === indiceAtual); // Define qual botão do banner está ativo.
    });
    indiceAtual = (indiceAtual + 1) % imagens.length; // Incrementa o índice e reinicia quando atinge o final da lista.
}
setInterval(mudarBanner, tempoIntervalo); // Altera o banner automaticamente.
mudarBanner();

let produtosRecentes = JSON.parse(localStorage.getItem("produtosRecentesStorage")) || [];

// Calcula o preço com desconto aplicado
function calcularPrecoComDesconto(preco, desconto) {
    return (preco - (preco * (desconto / 100))).toFixed(2);
}

// Função para carregar produtos recentes armazenados no localStorage
function carregarProdutosRecentes() {
    produtosRecentes.forEach(produto => adicionarRecente(produto));
}

// Adiciona um produto recente na seção "Adicionados Recentemente"
function adicionarRecente(produto) {
    const container = document.getElementById("adicionados-recentemente");
    const precoDesconto = calcularPrecoComDesconto(produto.precoOriginal, produto.desconto);
    const produtoHTML = `
        <div class="produto-item">
            <a href="javascript:void(0);" onclick="abrirProduto('${produto.nome}')" style="text-decoration: none; color: black">
                <img src="${produto.imagem}" alt="${produto.nome}" width="100">
                <div class="produto-info">
                    <h3>${produto.nome}</h3>
                    <p class="preco">
                        <span class="balao-desconto">${produto.desconto}%</span>
                        <span class="preco-original">R$ ${produto.precoOriginal}</span>
                        <div class="preco-desconto">Preço: R$ ${precoDesconto}</div>
                    </p>
                </div>
            </a>
        </div>
    `;
    container.innerHTML += produtoHTML;
}
carregarProdutosRecentes();

// Abre uma nova janela com informações detalhadas do produto
function abrirProduto(nomeProduto) {
    const produto = produtosRecentes.find(p => p.nome === nomeProduto); // Procura o produto pelo nome.
    if (produto) {
        const novaPagina = window.open("", "_blank"); // Abre uma nova aba no navegador.
        // Gera a página do produto com as informações.
        const paginaProduto = `<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../Placeholder.css">
            <title>${produto.nome}</title>
        </head>
        <body>
            <div class="barra-de-cima">
                <nav>
                    <img onclick="voltar()" src="../Imagens/ArcadeStop_Logo.png" class="Logo" alt="Logo" width="160" height="85">
                    <ul>
                        <li>
                            <div class="group">
                                <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
                                    <g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g>
                                </svg>
                                <input placeholder="Procure aqui..." type="search" class="input">
                            </div>
                        </li>
                        <li><a id="login" href="/login.html"><img src="../Imagens/user_login.png" alt="UserLogin" width="45" height="45"></a></li>
                        <li><a id="carrinho" onclick="abrirCarrin()" target="_blank"><img src="../Imagens/carrinho.png" alt="Carrinho" width="45" height="45"></a></li>
                    </ul>
                </nav>
            </div>
            
            <button class="voltar-tela-inicial" onclick="voltar()">Voltar às compras</button>
            
            <div class="flex-container">
                <div class="imagem-produto-central">
                    <img class="produto1" src="${produto.imagem}" alt="${produto.nome}">
                </div>
                <div class="avaliacao-adicionarCarrinho">
                    <h1 class="nome-produto">${produto.nome}</h1>
                    <div class="alinhas-flex">
                        <img class="notas" src="../Imagens/Design sem nome.png" alt="">
                        <img class="notas" src="../Imagens/Design sem nome.png" alt="">
                        <img class="notas" src="../Imagens/Design sem nome.png" alt="">
                        <img class="notas" src="../Imagens/Design sem nome.png" alt="">
                    </div>
                    <div class="sobre-desconto">
                        <h3 class="desconto">${produto.desconto}% OFF</h3>
                        <h3 class="valor-original-produto">R$ ${produto.precoOriginal}</h3>
                    </div>
                    <h3 class="preco-com-desconto">R$ ${calcularPrecoComDesconto(produto.precoOriginal, produto.desconto)}</h3>
                    <button class="Adicionar-Carrinho">Adicionar ao Carrinho</button>
                </div>

                <div class="descricao">
                    <h1 id="Descricao">Descrição:</h1>
                    <p>${produto.descricao}</p>
                </div>

                <div class="outros-produtos">
                    <h1 class="titulo-outro-produto">Outros produtos:</h1>
                    <div class="outros-produtinhos">
                        <img class="outros-produtos1" src="../Imagens/MouseGamer 2060x.png" alt="Produto">
                        <div class="alinhar-outros-produtos">
                            <p class="p1">Produto: Mouse Gamer</p>
                            <p class="p2">Descrição breve do produto...</p>
                        </div>
                    </div>
                    <div class="outros-produtinhos">
                        <img class="outros-produtos1" src="../Imagens/MouseGamer 2060x.png" alt="Produto">
                        <div class="alinhar-outros-produtos">
                            <p class="p1">Produto: Teclado Mecânico</p>
                            <p class="p2">Descrição breve do produto...</p>
                        </div>
                    </div>
                </div>

                <div class="modal-carrinho">
                    <dialog id="modalCarrinho">
                        <button id="fecharCarrinho"><strong>X</strong></button>
                        <h1 class="titulo-carrinho">Suas compras</h1>
                        <div class="conteiner3" id="container3"></div>
                        <div class="container-botao">
                            <button id="comprarCarrinho" onclick="comprarCarrinho()">Comprar</button>
                        </div>
                    </dialog>
                </div>
            </div>
        </body>
        <script src="../Placeholder.js"></script>
        </html>
        `; // conteúdo da página do produto
        novaPagina.document.write(paginaProduto); // Insere o conteúdo na nova aba.
        novaPagina.document.close();
    }
}

function voltar() {
    window.location.href = "https://arcadestop.vercel.app/";
}

// Gerenciamento de carrinho
let produtosCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function abrirCarrinho() {
    const container = document.getElementById("container3");
    modalCarrinho.showModal(); // Mostra o modal duh
    container.innerHTML = ''; // Limpa pra n duplicar
    produtosCarrinho.forEach((item, index) => adicionarCarrinho(item, index)); // Pega o objeto e o índice desse objeto com o foreach
    // Bonus: O foreach vc pode pegar tanto o objeto quanto o índice desse objeto oq deixa a vida mais fácil
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
    // Bonus: onerror define uma imagem alternativa caso a imagem do produto não carregue corretamente.
    container.innerHTML += produtoHTML;
}

// Remove um produto do carrinho
function removerProdutoCarrinho(index) {
    produtosCarrinho.splice(index, 1); // Remove o item pelo índice no array.
    localStorage.setItem("carrinho", JSON.stringify(produtosCarrinho)); // Atualiza o localStorage com o carrinho modificado.
    modalCarrinho.close(); // Fecha o modal para aplicar as alterações.
    abrirCarrinho(); // Reabre o modal para exibir o carrinho atualizado.
}

document.getElementById("fecharCarrinho").onclick = function () {
    modalCarrinho.close();
};

// Contador de cliques no logo para abrir o modal de login escondido
const logo = document.getElementById("imagem-logo");
let contagemCliques = 0;

const EMAIL_VALIDO = "admin@arcadestop.com";
const SENHA_VALIDO = "admin123";

logo.addEventListener("click", () => {
    contagemCliques++;
    if (contagemCliques >= 10) {
        document.getElementById("loginModal").style.display = "block";
        contagemCliques = 0;
    }
});

document.getElementById("fecharModalLogin").onclick = function() {
    document.getElementById("loginModal").style.display = "none";
};

// Valida o login com email e senha predefinidos
document.getElementById("botaoLogin").onclick = function() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    
    if (email === EMAIL_VALIDO && senha === SENHA_VALIDO) {
        window.location.href = "https://arcadestop.vercel.app/admin.html"; // redireciona para a página de admin se os dados estiverem corretos
    } else {
        document.getElementById("erro").textContent = "Email ou senha inválidos."; // mensagem de erro
    }
};

window.onclick = function(event) {
    const modal2 = document.getElementById("loginModal");
    if (event.target === modal) {
        modal2.style.display = "none";
    }
};

function comprarCarrinho(){
    window.location.href = "https://arcadestop.vercel.app/compra.html";
}