/** Notas da 1ª unidade*/

function calcularUnidade1(){
    const teste1 = document.getElementById("teste1").value;
    const prova1 = document.getElementById("prova1").value;
    const final1 = document.getElementById("final1").value;

    const media1 = (parseFloat(teste1) + parseFloat(prova1) + parseFloat(final1))/3;
    document.getElementById("media1").value = media1.toFixed(2); 
}