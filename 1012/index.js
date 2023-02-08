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

let a = parseFloat(getLine());
let b = parseFloat(getLine());
let c = parseFloat(getLine());


let triangulo = ((a*c)/2)
let circulo = (3.14159 * (Math.pow(c, 2)))
let trapezio = (((a+ b)*c)/2)
let quadrado = (b* b)
let retangulo = (a * b)


console.log("TRIANGULO: " + triangulo.toFixed(3))
console.log("CIRCULO: " + circulo.toFixed(3))
console.log("TRAPEZIO: " + trapezio.toFixed(3))
console.log("QUADRADO: " + quadrado.toFixed(3))
console.log("RETANGULO: " + retangulo.toFixed(3))
