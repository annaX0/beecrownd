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


    for (let i = 1; i <= x; i++) {
        if(x%i===0){
            console.log(i)

        }
        
    }

