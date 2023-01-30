const lista = [{ddd:61, destino: 'brasilia'},
               {ddd:71, destino: 'salvador'},
               {ddd:11, destino: 'SP'},
               {ddd:21, destino: 'RJ'},
               {ddd:32, destino:'Juiz de fora'} ,
               {ddd:19, destino: 'Campinas'},
               {ddd:27, destino:'Vitoria'},
               {ddd:31, destino:'BH'}
]

let num = 11

    lista.map(({ddd, destino})=> {
        if(ddd === num)
            console.log(destino)
        
    })