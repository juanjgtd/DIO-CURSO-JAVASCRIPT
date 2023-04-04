/*
 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.

 Imprima o maior número par e o menor número impar. 
*/

const { gets , print} = require('./funcoes-auxiliares')
const quantidadeNumeros = gets();

let maiorPar = 0;
let menorImpar = 0;

for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = gets()
    
    if (numero % 2 === 0) {
        if (maiorPar < numero) {
            maiorPar = numero;
        }
    } else {
        if (menorImpar > numero || menorImpar === 0) {
            menorImpar = numero;
        }
    }
    
}

print('O maior número par é ' + maiorPar);
print('O menor número impar é ' + menorImpar);