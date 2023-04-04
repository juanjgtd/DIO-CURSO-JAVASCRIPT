// Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
// Media = (nota1+nota2+nota3)/3
// Classificação:
// Média < 5 -> Reprovado
// Média <= 7 recuperação
// Média acima de 7 -> passou de semestre.

function calculaMedia(nota1, nota2, nota3) {
    return ((nota1 + nota2 + nota3)/3);
}

function verificaSituacao(media) {
    if (media < 5) {
        return 'Reprovado';
    } else if (media <= 7) {
        return 'Recuperação';
    } else {
        return 'Passou de semestre.';
    }
}


(function () {
    const nota1 = 10;
    const nota2 = 7;
    const nota3 = 5;

    const media = calculaMedia(nota1, nota2, nota3);
    console.log('A media foi: '+media);
    console.log(verificaSituacao(media));
}) ();