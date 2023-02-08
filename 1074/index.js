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

let inicio = getLine()


    for (let i = 0; i < inicio; i++) {
        let x = getLine()
        
        if(x < 0 && x % 2 != 0){
            console.log("ODD NEGATIVE")
        }
        else if(x > 0 && x % 2 != 0){
            console.log("ODD POSITIVE")
        }
        else if(x == 0){
            console.log("NULL")
        }
        else if(x < 0 && x % 2 != 1){
            console.log("EVEN NEGATIVE")
        }
        else{
            console.log("EVEN POSITIVE")

        }
        
    }