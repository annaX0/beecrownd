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
// ------- ---------------------------------------------------------------------------
let A = getLine()
let B = getLine()

let prod = A * B

console.log(`PROD = ${prod}`)