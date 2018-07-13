
var num1, num2;

function ler_dados(){
    num1 = parseFloat(document.form_calcular.equipe.value);
    num2 = parseFloat(document.form_calcular.ers.value);
}

function somar(){
    ler_dados();
    var soma = nun1 + nun2;
    document.form_calcular.resultado.value = soma;
}

console.log(document.equipe.value);