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
        let entrada = getLine();
        
        if(entrada >= 8000){
            console.log("Mais de 8000!")
        } else{
            console.log(entrada)
        }
        
    }

