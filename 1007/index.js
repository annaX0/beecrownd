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

let A = getLine() 
let B = getLine() 
let C = getLine() 
let D = getLine() 

let diferenca = (A * B - C * D)


console.log("DIFERENCA = " + diferenca)


