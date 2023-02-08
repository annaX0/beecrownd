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

let qtd = 1
    while (qtd <= 6) {
        if(x % 2 != 0){
            qtd++ 
            console.log(x)
        }
        x++
            
    }