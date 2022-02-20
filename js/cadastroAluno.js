function paginaInicial(){
    window.open("index.html");
}

function abrirPortalAluno(){
    let abrir = document.querySelector("#portalAluno");
    abrir.style.visibility = 'visible';
}

function fecharPortalAluno(){
    let fechar = document.querySelector("#portalAluno");
    fechar.style.visibility = 'hidden';
}