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
    adicionarProduto('best-sellers', produto.nome, produto.precoOriginal, produto.precoDesconto, produto.imagem, produto.desconto);
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
    adicionarProduto('perifericos', produto.nome, produto.precoOriginal, produto.precoDesconto, produto.imagem, produto.desconto);
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
    adicionarProduto('mais-vendidos', produto.nome, produto.precoOriginal, produto.precoDesconto, produto.imagem, produto.desconto);
});

const produtosRecentes = []; 

function moverCarrossel(categoria, direcao) {
    const container = document.getElementById(categoria);
    const width = container.querySelector('.produto-item').offsetWidth;
    container.scrollLeft += width * direcao;
}

function adicionarProduto(categoria, nome, precoOriginal, precoDesconto, imagem, desconto) {
    const container = document.getElementById(categoria);
    let produtoHTML;
    if (imagem.includes("Esgotado")) {
        produtoHTML = `
        <div class="produto-item">
            <a href="javascript:void(0);" onclick="produtoEsgotado()" style="text-decoration: none; color: black">
            <img src="${imagem}" alt="${nome}">
            <div class="produto-info">
                <h3>${nome}</h3>
                <p class="preco">
                    <span class="preco-original">R$ ${precoOriginal}</span>
                    <span class="preco-desconto">R$ ${precoDesconto}</span>
                    <div class="balao-desconto">Desconto: ${desconto}%</div>
                </p>
            </div>
            </a>
        </div>
    `;
    } else {
        let linkProduto = nome.replace(" ", "%20");
        produtoHTML = `
        <div class="produto-item">
            <a href="${linkProduto}.html" style="text-decoration: none; color: black">
            <img src="${imagem}" alt="${nome}">
            <div class="produto-info">
                <h3>${nome}</h3>
                <p class="preco">
                    <span class="preco-original">R$ ${precoOriginal}</span>
                    <span class="preco-desconto">R$ ${precoDesconto}</span>
                    <div class="balao-desconto">Desconto: ${desconto}%</div>
                </p>
            </div>
            </a>
        </div>
    `;
    }
    container.innerHTML += produtoHTML;
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


