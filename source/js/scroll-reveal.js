const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        // Se o elemento entrou na tela (isIntersecting)
        if (entry.isIntersecting) {
            // Adiciona a classe que faz ele aparecer
            entry.target.classList.add('mostrar');
            observer.unobserve(entry.target);
        } 
    })
})
const elementosEscondidos = document.querySelectorAll('.hidden');

elementosEscondidos.forEach((elemento) => {
    observer.observe(elemento)
});