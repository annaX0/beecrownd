

const table = [ 
    {codigo: 1, nome: 'Cachorro quente', valor: 4.00}, 
    {codigo: 2, nome: 'X salada', valor: 4.50},
    {codigo: 3, nome: 'X-bacon', valor: 5.00},
    {codigo: 4, nome: 'Torrada', valor: 2.00},
    {codigo: 5, nome: 'Refri', valor: 1.50},
]
const pedido = 4
const qtd = 3

table.map(({valor, codigo, nome})=> {
if(pedido === codigo ){
console.log(qtd, nome, ":", "R$", (valor*qtd) )
}

})