/* Crie uma classe para representar pessoas. 
Para cada pessoa teremos os atributos nome, peso e altura. 
As pessoas devem ter a capacidade de dizer o valor de IMC;
Instancie uma pessoa chamada José, que tenha 70 kg e 1,75 e peça ao José para dizer o valor de seu IMC. */

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaImc() {
        return this.peso / (this.altura * this.altura)
    }

    classificaImc() {
        const imc = this.calculaImc();
        if (imc < 18.5) {
            return 'Abaixo do peso.';
        } else if (imc <= 25) {
            return 'Peso normal.';
        } else if (imc <= 30) {
            return 'Acima do peso.';
        } else if (imc <= 40) {
            return 'Obesidade';
        } else {
            return 'Obesidade grave.';
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log('O IMC de ' + jose.nome + ' é ' + jose.calculaImc(), 'este valor é considerado ' + jose.classificaImc());