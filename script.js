function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

function handleShare() {
    // Coloque a lógica para lidar com o ícone de compartilhamento aqui
    alert("Compartilhar função acionada.");
}

function handleLink() {
    // Coloque a lógica para lidar com o ícone de link aqui
    alert("Link função acionada.");
}

function handleCopy() {
    // Obtendo o link atual da página
    var link = window.location.href;

    // Criando um elemento de input para poder copiar o link
    var input = document.createElement('input');
    input.setAttribute('value', link);
    document.body.appendChild(input);

    // Selecionando o texto no input
    input.select();

    // Copiando o texto selecionado
    document.execCommand('copy');

    // Removendo o input criado
    document.body.removeChild(input);

    // Exibindo uma mensagem para o usuário
    alert("Link copiado para a área de transferência: " + link);
}

function handleBookmark() {
    // Coloque a lógica para lidar com o ícone de favoritos aqui
    alert("Adicionar aos favoritos função acionada.");
}

function handleReadMore() {
    // Coloque a lógica para lidar com o botão "Read More" aqui
    alert("Read More função acionada.");
}
