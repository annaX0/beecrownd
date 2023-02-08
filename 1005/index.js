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

let A = getLine() * 3.5
let B = getLine() * 7.5

let media = (A + B)/11


console.log("MEDIA = " + media.toFixed(5))