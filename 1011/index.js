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

let x = parseInt(getLine());

let volume = ((4/3) * 3.14159 * (Math.pow(x, 3)))
let total = parseFloat(volume).toFixed(3)
console.log("VOLUME = " + total)
