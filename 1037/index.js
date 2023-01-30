let inputNumber = parseFloat(-25.02)



if(inputNumber >= 0 && inputNumber <= 25){
    console.log("Intervalo (0, 25)")

}
else if(inputNumber >= 25 && inputNumber <= 50){
console.log("Intervalo (25,50)")

}
else if(inputNumber >= 50 && inputNumber <= 75){
    console.log("Intervalo (50,75]")
    
    }

else if(inputNumber >= 75 && inputNumber <= 100){
    console.log("Intervalo (75,100)") 
}
else{
    console.log("Fora do intervalo") 
}