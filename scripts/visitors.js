function updateVisitorCount() {
    // Verifica se o contador já existe no localStorage.
    let count = localStorage.getItem('visitorCount');

    if (count === null) {
        // Se o contador não existir, defina-o como 1 (primeira visita).
        count = 1;
    } else {
        // Se o contador existir, converta-o para um número.
        count = parseInt(count);
        // Incremente o contador.
        count++;
    }

    // Armazene o contador atualizado no localStorage.
    localStorage.setItem('visitorCount', count);

    // Atualize o elemento HTML com o contador.
    document.getElementById('visitorCount').textContent = count;
}

// Chame a função para atualizar o contador de visitantes.
updateVisitorCount();
