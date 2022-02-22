//Acesso e comandos do portal do aluno

function paginaInicial(){
    window.open("index.html");
}

function abrirPortalAluno(){
    let abrir = document.querySelector("#portalAluno");
    abrir.style.visibility = 'visible';
    let opcoes = document.getElementById("opcoesAcesso");
    opcoes.style.display = 'none';
}

function fechar(){
    let fechar = document.querySelector("#portalAluno");
    fechar.style.visibility = 'hidden';
    let opcoes = document.getElementById("opcoesAcesso");
    opcoes.style.display = 'flex';
}


//Acesso e métodos do portal do professor

function abrirPortalProfessor(){
    let acesso = document.getElementById("opcoesAcesso");
    acesso.style.display = 'none';
    let portalProf = document.getElementById("portalProfessor");
    portalProf.style.visibility = 'visible';
}

