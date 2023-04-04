/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal e a etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Condição de pagamento:
01 - A vista no débito - recebe 10% de desconto.
02 - A vista no dinheiro ou pix - 15% de desconto.
03 - Em duas vezes - preço da etiqueta sem juros.
04 - Acima de duas vezes - 10% de juros.

 */

const precoEtiqueta = 100;
const condPagamento = "04";
let valorFinalProduto = precoEtiqueta;

if (condPagamento ==="01") {
    valorFinalProduto = precoEtiqueta * 0.9;
    console.log('O valor a ser pago é ' + valorFinalProduto.toFixed(2));
} else if (condPagamento === "02") {
    valorFinalProduto = precoEtiqueta * 0.85;
    console.log('O valor a ser pago é ' + valorFinalProduto.toFixed(2));
} else if (condPagamento === "03") {
    console.log('O valor a ser pago é ' + valorFinalProduto.toFixed(2));
} else {
    valorFinalProduto = precoEtiqueta * 1.1;
    console.log('O valor a ser pago é ' + valorFinalProduto.toFixed(2));
}


