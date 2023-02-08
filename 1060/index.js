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

let qtd = 0
    for (let i = 1; i <= 6; i++) {
        let valor = parseFloat(getLine());

        if(valor >= 0){
            qtd++
        }
        
    }
    console.log(qtd + " valores positivos")

