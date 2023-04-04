// Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
// Media = (nota1+nota2+nota3)/3
// Classificação:
// Média < 5 -> Reprovado
// Média <= 7 recuperação
// Média acima de 7 -> passou de semestre.

const nota1 = 10;
const nota2 = 7;
const nota3 = 5;

const media = (nota1 + nota2 + nota3)/3

if (media < 5) {
    console.log('A media foi: '+media);
    console.log('Reprovado');
} else if (media <= 7) {
    console.log('A media foi: '+media);
    console.log('Recuperação');
} else {
    console.log('A media foi: '+media);
    console.log('Passou de semestre.');
}