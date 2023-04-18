const btnAbrirNoticia =
document.querySelector("#btn-abrir-noticia");
const btnCerrarNoticia =
document.querySelector("#btn-cerrar-noticia");
const noticia =
document.querySelector("#noticia");

btnAbrirNoticia.addEventListener("click",()=>{
    noticia.showModal();
})

btnCerrarNoticia.addEventListener("click",()=>{
    noticia.close();
})  