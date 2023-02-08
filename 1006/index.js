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

let A = getLine() * 2
let B = getLine() * 3
let C = getLine() * 5

let media = (A + B + C)/10


console.log("MEDIA = " + media.toFixed(1))
