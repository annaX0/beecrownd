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

let distancia = getLine() 
let combustivel = parseFloat(getLine()) 



console.log((distancia/combustivel).toFixed(3), "km/l")



