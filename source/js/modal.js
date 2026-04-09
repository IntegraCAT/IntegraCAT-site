const modalRegistro = document.getElementById('modal-registro')
const btnFecharRegistro = document.getElementById('btn-fechar-registro')
const btnAbrirRegistro = document.getElementById('btn-abrir-registro')

if (btnAbrirRegistro){
  btnAbrirRegistro.addEventListener('click', (event) => {
    event.preventDefault()
    modalRegistro.showModal()
  })
}
if (btnFecharRegistro) {
    btnFecharRegistro.addEventListener('click', () => {
        modalRegistro.close();
    });
}
// Fecha o modal se o usuário clicar do lado de fora 
modalRegistro.addEventListener('click', (event) => {
    if (event.target === modalRegistro) {
        modalRegistro.close();
    }
});