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


    const salario = parseFloat(getLine());

   


    if(salario >= 0 && salario <= 2000.00){
        console.log('isento')
    }
    else if(salario >= 2000.01 && salario <= 3000.00){
        console.log("R$" + (salario * 0.08).toFixed(2))
    }
    else if(salario >= 3000.01 && salario <= 4500.00){
        console.log("R$ " + (salario * 0.18))
    }
    else{
        console.log("28")
    }540
  