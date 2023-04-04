// Receber peso e altura de alguém e calcular o IMC (peso/(altura*altura).
// Imprimir o IMC e a classificação da pessoa de acordo com a tabela abaixo:
// Menos de 18.5 -> abaixo do peso
// Entre 18.5 e 25 -> Peso normal
// Entre 25 e 30 -> Acima do peso
// Entre 30 e 40 -> Obeso
// Acima de 40 -> Obesidade grave

const peso = 75;
const altura = 1.75;

const imc = peso / Math.pow(altura, 2);

console.log ('O IMC é '+imc);

if (imc < 18.5) {
    console.log('Abaixo do peso.');
} else if (imc <= 25) {
    console.log('Peso normal.');
} else if (imc <= 30) {
    console.log('Acima do peso.');
} else if (imc <= 40) {
    console.log('Obesidade');
} else {
    console.log('Obesidade grave.');
}