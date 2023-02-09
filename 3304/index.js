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


let x = parseInt(getLine());



    for (let i = 1; i <= x; i++) {
    let x = parseInt(getLine());

    console.log("resposta " + i + ":" + x)
        
    }
   

  
    
    