let n = 800

let ano = Math.round(n/365)
let mes = Math.round((n%365)/30)
let dias = Math.round((n%365)%30)



console.log(ano, mes, dias)