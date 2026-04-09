function trocarDestaque(cardClicado) {
    const cardDestaque = document.getElementById('especialista-destaque')

    cardDestaque.classList.add('animar-troca')
    cardClicado.classList.add('animar-troca')

    setTimeout(() => {
        const imgDestaque = cardDestaque.querySelector('.img-perfil')
        const nomeDestaque = cardDestaque.querySelector('h4')
        const cargoDestaque = cardDestaque.querySelectorAll('p')[0]
        const descDestaque = cardDestaque.querySelectorAll('p')[1]

        const imgClicado = cardClicado.querySelector('.img-perfil')
        const nomeClicado = cardClicado.querySelector('h4')
        const cargoClicado = cardClicado.querySelector('p')
        const descClicada = cardClicado.getAttribute('data-descricao')

        const tempImg = imgDestaque.src;
        const tempNome = nomeDestaque.innerText;
        const tempCargo = cargoDestaque.innerText;
        const tempDesc = descDestaque.innerText;

        // JOGANDO OS DADOS CLICADOS PRO DESTAQUE
        imgDestaque.src = imgClicado.src;
        nomeDestaque.innerText = nomeClicado.innerText;
        cargoDestaque.innerText = cargoClicado.innerText;
        descDestaque.innerText = descClicada;

        // JOGANDO O DESTAQUE ANTIGO PRO CARD MENOR
        imgClicado.src = tempImg;
        nomeClicado.innerText = tempNome;
        cargoClicado.innerText = tempCargo;
        cardClicado.setAttribute('data-descricao', tempDesc);

        cardDestaque.classList.remove('animar-troca')
        cardClicado.classList.remove('animar-troca')
    }, 300)
}