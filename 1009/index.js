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

let vendedor = getLine() 
let salario = parseFloat(getLine()) 
let vendas = parseFloat(getLine()) 
let total = salario + (vendas)*0.15


console.log("TOTAL = R$ " + total.toFixed(2))



