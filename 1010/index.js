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

let cod = getLine();
let num = parseFloat(getLine());
let valor =  parseFloat(getLine());

let cod2 =  getLine();
let num2 =  parseFloat(getLine());
let valor2 =  parseFloat(getLine());

let total = parseFloat((num * valor) + (num2 * valor2))


console.log("VALOR A PAGAR: R$ " + total.toFixed(2))
