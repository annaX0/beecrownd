let n1 = 2.0 * 2;
let n2 = 6.5 * 3;
let n3 = 4.0 * 4;
let n4 = 9.0 * 1;

const totalNotas = n1 + n2 + n3 + n4
const totalMedia = 2 + 3 + 4 + 1
const total = (totalNotas / totalMedia)


console.log("média: ", total);


if (total >= 7) {
    console.log("Aluno aprovado")
}
else if (total > 5.0 && total < 6.9) {
    console.log("Aluno em exame")

    let exame = 6.4
    let totalRecuperacao = ((total + exame) / 2)

    console.log("nota no exame: ", exame)

    if (totalRecuperacao => 5.0) {
        console.log("aluno aprovado")
    } else {
        console.log("aluno reprovado")

    }
    console.log("media final: ", (totalRecuperacao))

} else {
    console.log("Aluno reprovado")

}





