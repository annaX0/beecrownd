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


let num = parseInt(getLine());

for (let i = 1; i <= num; i++) {
    if(i%2 === 0){
        const result = Math.pow(i, 2)
        console.log(i + "^" + 2 + " = " +  result)
        
    }
    
}
       

  