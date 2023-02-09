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


let entrada = getLine();

for (let i = 0; i < entrada; i++) {
    console.log('I am Toorg!')
        
    }