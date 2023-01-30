const ordem = [7, 21, -14]
// const ordem = [-14, 21, 7]

function ordena (a, b){
    return a - b
}



console.log(ordem.sort(ordena))
// console.log(ordem)