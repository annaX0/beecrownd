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

let x = getLine();
let n = []


for (let i = 0; i < x; i++) {
    let x = getLine();
    const word = x.split(' ');
    let numeros = (word[1])
    console.log(numeros)
}

  
    
    