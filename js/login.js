function logar(){
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
        if((usuario == "dvitorio2@gmail.com") && (senha == "dvc314900")){
            window.open("cadastroAluno.html");
            window.close("login.html");
            window.close("index.html");
        }
        else{
            alert("Usuário ou senha inválido(s)! Tente novamente!");
        }
}