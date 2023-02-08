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


let into = 0
let out = 0
let fist = parseInt(getLine());

for (let i = 1; i <= fist ;i++) {
        let x = getLine()
        if(x >= 10 && x<=20){
            into++
            } 
            else {
                out++
            }
        }
        console.log(into + " in")
        console.log(out + " out")


  