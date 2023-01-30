const meses = [
    {id: 1, mes: 'January'},
    {id: 2, mes: 'February'},
    {id: 3, mes: 'March'},
    {id: 4, mes: 'April'},
    {id: 5, mes: 'May'},
    {id: 6, mes: 'June'},
    {id: 7, mes: 'July'},
    {id: 8, mes: 'August'},
    {id: 9, mes: 'September'},
    {id: 10, mes: 'October'},
    {id: 11, mes: 'November'},
    {id: 12, mes: 'December'},

]

const entrada = 2

meses.map(({id, mes})=> {
    if(entrada === id){
        console.log(mes)
    }
})

