var input = []
try{
    input = require('fs').readFileSync('/dev/stdin', 'utf8');
    
}catch (e){
    input = require('fs').readFileSync('stdin', 'utf8');
}

var lines = input.split('\n');

const getLine = () => {
    return lines.shift()
}

let numFunc = getLine() 
let ht = getLine() 
let vh = getLine()

let salario = ht * vh



console.log("NUMBER = " + numFunc)
console.log("SALARY = U$ " + salario.toFixed(2))



