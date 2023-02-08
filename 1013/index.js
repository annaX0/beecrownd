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

let a = parseInt(getLine());
let b = parseInt(getLine());
let c = parseInt(getLine());


    if(a>b && a>c){
        console.log(a + " eh o maior")
    } else if(b>a && b> c){
        console.log(b + " eh o maior")
    } else{
        console.log(c + " eh o maior")
    }

