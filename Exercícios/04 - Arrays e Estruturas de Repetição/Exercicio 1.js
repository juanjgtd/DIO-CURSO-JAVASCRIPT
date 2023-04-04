/* Crie um programa que dado um número imprima a sua tabuada */

const num = 7;

console.log('Tabuada do ' + num);

for (let i = 1; i <= 10; i++) {
    const resultado = num * i;
    console.log(num + ' x ' + i + ' = ' + resultado);
}
