let salario = 400.01



if(salario <= 400.00){
    console.log('Novo salario: ' + ((salario* 0.15)+ salario))
    console.log('Aumento: ' + ((salario* 0.15)))
} else if(salario<= 400.01  && salario <= 800.00){
    console.log('Novo salario: ' + ((salario* 0.12)+ salario))
    console.log('Aumento: ' + ((salario* 0.12)))
}else if(salario<= 800.01  && salario <= 2000.00){
    console.log('Novo salario: ' + ((salario* 0.10)+ salario))
    console.log('Aumento: ' + ((salario* 0.10)))
}
else if(salario >= 2000.00){
    console.log('Novo salario: ' + ((salario* 0.04)+ salario))
    console.log('Aumento: ' + ((salario* 0.04)))
}