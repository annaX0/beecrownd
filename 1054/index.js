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

let idade = parseInt(getLine());
let todos = []

    while(idade >= 0){
        idade = getLine();
        if(idade < 0){
            break
        }

        todos.push(idade)
        
    //    todos += todos[idade]
        
        
    }
    console.log(todos)
    
    
    