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


let positivo = 0
let negativo = 0
let par = 0
let impar = 0

    for (let i = 1; i <= 5; i++) {
    let x = parseInt(getLine());

        if(x>0){
            positivo++
        }
        else if(x<0){
            negativo++
        }
        if(x%2==0){
            par++
        }else{
            impar++
        }

        
    }
    console.log("positivos: " + positivo)
    console.log("negativo: " + negativo)
    console.log("par: " + par)
    console.log("impar: " + impar)


  
    
    