function trocarImagem(src) {
    document.getElementById('main-img').src = src;
}

let currentIndex = 0;

const carrossel = document.querySelector('.carrossel');
const items = document.querySelectorAll('.produto-item');
const totalItems = items.length;

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < totalItems - 4) { // Subtrai 4 pois são os visíveis
        currentIndex++;
        updateCarrossel();
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarrossel();
    }
});

function updateCarrossel() {
    carrossel.style.transform = `translateX(-${currentIndex * 25}%)`; // Movimenta 25% a cada vez
}

document.querySelectorAll('.produto-item').forEach(item => {
    item.addEventListener('click', () => {
        // Ação ao clicar no produto, como abrir uma página de detalhes
        window.location.href = 'pagina-do-produto.html'; // Substitua pelo link real
    });
});
