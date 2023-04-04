/* 3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário. 
Para realizar o cálculo receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transferido é calculado da seguinte maneira:

Valor bruto - percentual de imposto mediante a faixa salarial + adicional dos beneficios 

Para calcular o percentual de imposto segue as aliquotas:

De 0 a R$ 1100.00 = 5%
De R$ 1100.00 a R$ 2500.00 = 10%
Maior que R$ 2500.00 = 15% */

const {gets,print} = require('./funcoes-auxiliares');

function calculaImposto(valor, porcentagem) {
    return valor * (porcentagem / 100);
}

function pegarAliquota(salario) {
    if (salario <= 1100) {
        return 5;
    } else if (salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

const salarioBruto = gets()
const adicional = gets()
const aliquotaImposto = pegarAliquota(salarioBruto);
const imposto = calculaImposto(salarioBruto, aliquotaImposto);
const salarioLiquido = salarioBruto - imposto + adicional;

print(salarioLiquido);