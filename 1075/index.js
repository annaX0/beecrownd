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

 for (let i = 1; i <= 10000; i++) {
    if(i%n===2){
        console.log(i)
    }
    
 }