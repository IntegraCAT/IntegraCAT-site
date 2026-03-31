const sidebar = document.querySelector('.sidebar-nav');
const btnAbrir = document.getElementById('btn-abrir');
const btnFechar = document.getElementById('btn-fechar');

btnFechar.addEventListener('click', () =>{
    sidebar.classList.add('escondida');
    btnAbrir.style.display = 'block';
});

btnAbrir.addEventListener('click', () =>{
    sidebar.classList.remove('escondida');
    btnAbrir.style.display = 'none';
});