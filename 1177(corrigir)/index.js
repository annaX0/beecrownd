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

let t = getLine();
let n = [];

for (let i = 0; i < 10; i++) {
    let qtd = t-i
    n.push(qtd)
    console.log("N" + "[" +i +"]" + "=" + qtd)
    
}
    
    
    