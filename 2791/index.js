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

let arr = []

for (let i = 0; i < 4; i++) {
        let entrada = parseInt(getLine());
        
        arr.push(entrada)
    }

    console.log(arr.indexOf(1)+1)