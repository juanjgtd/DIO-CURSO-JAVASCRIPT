/* Crie uma classe para representar carros (Marca, cor, gasto médio de combustível por km). Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizar este percurso. */

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calculaGastoPercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * precoCombustivel * this.gastoMedioPorKm;
    }
}

const uno = new Carro('Fiat','Branco',1/12);
const palio = new Carro('Fiat','Preto',1/10);


console.log(uno.calculaGastoPercurso(70,5));
console.log(palio.calculaGastoPercurso(70,5));
