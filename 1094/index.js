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


 let n = getLine();
 let cobaias = []

    for (let i = 0; i < n; i++) {
        let x = getLine();
        cobaias.push(x)        
    }
    console.log(cobaias.length)