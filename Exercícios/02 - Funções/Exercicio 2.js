// Receber peso e altura de alguém e calcular o IMC (peso/(altura*altura).
// Imprimir o IMC e a classificação da pessoa de acordo com a tabela abaixo:
// Menos de 18.5 -> abaixo do peso
// Entre 18.5 e 25 -> Peso normal
// Entre 25 e 30 -> Acima do peso
// Entre 30 e 40 -> Obeso
// Acima de 40 -> Obesidade grave

function calculaImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificaImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso.';
    } else if (imc <= 25) {
        return 'Peso normal.';
    } else if (imc <= 30) {
        return 'Acima do peso.';
    } else if (imc <= 40) {
        return ('Obesidade');
    } else {
        return 'Obesidade grave.';
    }
}

(function () {
    const peso = 75;
    const altura = 1.75;

    const imc = calculaImc(peso,altura);
    console.log ('O IMC é '+imc);
    console.log(classificaImc(imc));
})();



