const produtosBest = [
    {nome: "Gabinete Gamer Hyrax", precoOriginal: 100, precoDesconto: 80, imagem: "Imagens/produto4.png", desconto: 20},
    {nome: "Controle PS5", precoOriginal: 150, precoDesconto: 120, imagem: "Imagens/produto5.png", desconto: 20},
    {nome: "Joystick Sem Fio Nintendo Switch", precoOriginal: 408, precoDesconto: 367, imagem: "Imagens/produto6.png", desconto: 10},
    {nome: "Volante Logitech G29", precoOriginal: 2.105, precoDesconto: 1.804, imagem: "Imagens/produto25.png", desconto: 5},
    {nome: "Dancer Blanket ", precoOriginal: 500, precoDesconto: 228, imagem: "Imagens/produto26.png", desconto: 20},
    {nome: "Cadeira Cockpit", precoOriginal: 33.159, precoDesconto: 32.164, imagem: "Imagens/produto27.png", desconto: 3},
    {nome: "Mouse Pad Gamer Com Led", precoOriginal: 55, precoDesconto: 39, imagem: "Imagens/produto28.png", desconto: 20},
    {nome: "Monitor Gamer Mancer", precoOriginal: 759, precoDesconto: 519, imagem: "Imagens/produto29.png", desconto: 20},
    {nome: "Capacete Iron Man", precoOriginal: 2.299, precoDesconto: 1.935, imagem: "Imagens/produto30.png", desconto: 10},
    {nome: "Controle do Deadpool", precoOriginal: 500, precoDesconto: 299, imagem: "Imagens/produto31.png", desconto: 40},
    {nome: "Oculus Quest 2", precoOriginal: 3.915, precoDesconto: 2.889, imagem: "Imagens/Esgotadoproduto32.png", desconto: 26},
    {nome: "Asus Rog Phone", precoOriginal: 5.200, precoDesconto: 4.999, imagem: "Imagens/Esgotadoproduto33.png", desconto: 5},
];

produtosBest.forEach(produto => {
    adicionarProduto('best-sellers', produto);
});

const produtosPerifericos = [
    {nome: "Produto 7", precoOriginal: 300, precoDesconto: 200, imagem: "Imagens/produto7.png", desconto: 33},
    {nome: "Headset Fone de Ouvido Havit", precoOriginal: 189, precoDesconto: 147, imagem: "Imagens/produto18.png", desconto: 14},
    {nome: "Redragon TECLADO MECANICO GAMER", precoOriginal: 300, precoDesconto: 211, imagem: "Imagens/produto19.png", desconto: 30},
    {nome: "Teclado Mecânico sem fio Logitech POP", precoOriginal: 799, precoDesconto: 529, imagem: "Imagens/produto20.png", desconto: 34},
    {nome: "Teclado Gamer Logitech G213", precoOriginal: 408, precoDesconto: 300, imagem: "Imagens/produto21.png", desconto: 26},
    {nome: "Mouse Gamer Logitech G502 X", precoOriginal: 529, precoDesconto: 429, imagem: "Imagens/produto22.png", desconto: 15},
    {nome: "Headset Gamer Redragon", precoOriginal: 257, precoDesconto: 236, imagem: "Imagens/produto23.png", desconto: 8},
    {nome: "Mouse Gamer Fallen Pantera Pro", precoOriginal: 499, precoDesconto: 299, imagem: "Imagens/Esgotadoproduto24.png", desconto: 33},
];

produtosPerifericos.forEach(produto => {
    adicionarProduto('perifericos', produto);
});

const produtosMelhores = [
    {nome: "ONIKUMA-K10", precoOriginal: 245, precoDesconto: 80, imagem: "Imagens/produto8.png", desconto: 66},
    {nome: "Nintendo Switch Oled", precoOriginal: 2.599, precoDesconto: 1.889, imagem: "Imagens/produto9.png", desconto: 43},
    {nome: "Playstation 4", precoOriginal: 2.159, precoDesconto: 1.839, imagem: "Imagens/Produtos10.png", desconto: 18},
    {nome: "Xbox Series X", precoOriginal: 4.329, precoDesconto: 3.799, imagem: "Imagens/produtos11.png", desconto: 33},
    {nome: "Xbox One S", precoOriginal: 1.799, precoDesconto: 1.599, imagem: "Imagens/produto12.png", desconto: 20},
    {nome: "PlayStation 5 Slim", precoOriginal: 3.999, precoDesconto: 3.379, imagem: "Imagens/produto13.png", desconto: 8},
    {nome: "Nintendo Switch Lite", precoOriginal:  1.499, precoDesconto: 1.394, imagem: "Imagens/produto14.png", desconto: 5},
    {nome: "Xbox 360", precoOriginal: 789, precoDesconto: 600, imagem: "Imagens/produto15.png", desconto: 10},
    {nome: "PlayStation 5 Pro", precoOriginal: 6.999, precoDesconto: 6.509, imagem: "Imagens/Esgotadoproduto16.png", desconto: 3},
    {nome: "PlayStation 3", precoOriginal: 1.299, precoDesconto: 999, imagem: "Imagens/Esgotadoproduto17.png", desconto: 15},
];

produtosMelhores.forEach(produto => {
    adicionarProduto('mais-vendidos', produto);
});


function moverCarrossel(categoria, direcao) {
    const container = document.getElementById(categoria);
    const width = container.querySelector('.produto-item').offsetWidth;
    container.scrollLeft += width * direcao;
}

function adicionarProduto(categoria, produto) {
    const container = document.getElementById(categoria);
    let produtoHTML;
    if (produto.imagem.includes("Esgotado")) {
        produtoHTML = `
        <div class="produto-item">
            <a href="javascript:void(0);" onclick="produtoEsgotado()" style="text-decoration: none; color: black">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p class="preco">
                    <span class="balao-desconto"> ${produto.desconto}% </span>
                    <span class="preco-original">R$ ${produto.precoOriginal}</span>
                    <div class="preco-desconto">R$ ${produto.precoDesconto}</div>
                </p>
            </div>
            </a>
        </div>
    `;
    } else {
        produtoHTML = `
        <div class="produto-item">
            <a href="SitesProdutos/${produto.linkProduto}.html" style="text-decoration: none; color: black">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p class="preco">
                    <span class="balao-desconto"> ${produto.desconto}% </span>
                    <span class="preco-original">R$ ${produto.precoOriginal}</span>
                    <div class="preco-desconto">Preço: R$ ${produto.precoDesconto}</div>
                </p>
            </div>
            </a>
        </div>
    `;
    }
    container.innerHTML += produtoHTML;
}

const modal = document.getElementById ("modalEsgotado");
const buttonClose = document.getElementById ("fecharModal");

function produtoEsgotado() {
     
    modal.showModal();
}
buttonClose.onclick = function (){

    modal.close();
}

const modalC = document.getElementById ("modalCarrinho");
const fecharC = document.getElementById ("fecharCarrinho");

function abrirCarrin() {
     
    modalC.showModal();
}
fecharC.onclick = function (){

    modalC.close();
}

let images = [
    "Imagens/produto12.png", 
    "Imagens/produto13.png", 
    "Imagens/produto14.png"
];
let currentIndex = 0;
let intervalTime = 5000;
let bannerImage = document.getElementById('banner-image');
let buttons = document.querySelectorAll('.banner-btn');
let activeButtons = [false, false, false];

function changeBanner() {
    bannerImage.src = images[currentIndex];
    buttons.forEach((btn, idx) => {
        if (idx === currentIndex) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeBanner, intervalTime);
changeBanner();

let produtosRecentes = JSON.parse(localStorage.getItem('produtosRecentesStorage')) || [];

function calcularPrecoComDesconto(preco, desconto) {
    return (preco - (preco * (desconto / 100))).toFixed(2);
}

function carregarProdutosRecentes() {
    produtosRecentes.forEach(produto => adicionarRecente(produto));
}

function adicionarRecente(produto) {
    const container = document.getElementById('adicionados-recente');
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

function abrirProduto(nomeProduto) {
    const produto = produtosRecentes.find(p => p.nome === nomeProduto);
    if (produto) {
        if (produto.descricao == null) {
            produto.descricao = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        }
        const novaPagina = window.open('', '_blank');
        const paginaProduto = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="Placeholder.css">
            <title>${produto.nome}</title>
        </head>
        <body>

            <div class="barra-de-cima">
                <nav>
                    <img src="../Imagens/ArcadeStop_Logo.png" class="Logo" alt="Logo" width="160" height="85">
                    <ul>
                        <li>
                            <div class="group">
                                <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                                <input placeholder="Search" type="search" class="input">
                            </div>
                        </li>
                        <li>
                            <a id="login" href="/login.html"><img src="../Imagens/user_login.png" alt="UserLogin" width="45" height="45"></a>
                        </li>
                        <li>
                            <a href="https://i.redd.it/silly-kitty-3-v0-4grm3kfbym1c1.jpg?width=3472&format=pjpg&auto=webp&s=b3a4a0390aada923298220b370f0aeec00cee1db" target="_blank"><img src="../Imagens/carrinho.png" alt="Carrinho" width="45" height="45"></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <br>
            <a href="index.html">Voltar ás compras </a>
            <br>
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
                        <h3 class="desconto">${produto.desconto}%</h3>
                        <h3 class="valor-original-produto">R$: ${produto.precoOriginal}</h3>
                    </div>
                    <h3 class="preco-com-desconto">R$: ${calcularPrecoComDesconto(produto.precoOriginal, produto.desconto)}</h3>
                    <button class="Adicionar-Carrinho">Adicionar ao Carrinho</button>
                </div>
                <div class="descricao">
                    <h1 id="Descricao">Descrição:</h1>
                    <br>
                    <p>${produto.descricao}</p>
                </div>
            
                <div class="outros-produtos">
                    <h1 class="titulo-outro-produto">Outros produtos:</h1>
                    <div class="outros-produtinhos">
                        <img  class="outros-produtos1" src="../Imagens/MouseGamer 2060x.png" alt="">
                        <div class="alinhar-outros-produtos">
                            <p class="p1">outro produto:</p>
                            <p class="p2">asd asdasd asdasd asdasd asd asdasdasdasd asdasdasdasd asdasd adsadasdas dasda sad asdasdasd!</p>
                        </div>
                    </div>
                    <div class="outros-produtinhos">
                        <img  class="outros-produtos1" src="../Imagens/MouseGamer 2060x.png" alt="">
                        <div class="alinhar-outros-produtos">
                            <p class="p1">outro produto:</p>
                            <p class="p2">asd asdasd asdasd asdasd asd asdasdasdasd asdasdasdasd asdasd adsadasdas dasda sad asdasdasd!</p>
                        </div>
                    </div>
                    <div class="outros-produtinhos">
                        <img  class="outros-produtos1" src="../Imagens/MouseGamer 2060x.png" alt="">
                        <div class="alinhar-outros-produtos">
                            <p class="p1">outro produto:</p>
                            <p class="p2">asd asdasd asdasd asdasd asd asdasdasdasd asdasdasdasd asdasd adsadasdas dasda sad asdasdasd!</p>
                        </div>
                    </div>
                    <div class="outros-produtinhos">
                        <img  class="outros-produtos1" src="../Imagens/MouseGamer 2060x.png" alt="">
                        <div class="alinhar-outros-produtos">
                            <p class="p1">outro produto:</p>
                            <p class="p2">asd asdasd asdasd asdasd asd asdasdasdasd asdasdasdasd asdasd adsadasdas dasda sad asdasdasd!</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        <script src="Placeholder.js"></script>
        </html>
        `;
        novaPagina.document.write(paginaProduto);
        novaPagina.document.close();
    }
}