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
let pi = 3.14159
let raio = getLine()
let a = pi* (raio*raio)

console.log(`A=${a.toFixed(4)}` )