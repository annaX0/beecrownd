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

let n = parseFloat(getLine()) 

let horas  = Math.round(n/3600)
let minutos  = Math.round((n%3600)/60)
let segundos = Math.round(n%60)




console.log(horas+":"+minutos+ ":"+ segundos)



