let op1 = 'invertebrado'
let op2 = 'anelideo'
let op3 = 'onivoro'

if(op1 === 'vertebrado'){
    if(op2 === 'ave'){
        if(op3 === 'carnivoro'){
            console.log('aguia')
        }
            if(op3 === 'onivoro'){
                console.log('pomba')
        }
    }
    if(op2 === 'mamifero'){
        if(op3 === 'onivoro'){
            console.log('homem')
        }
            if(op3 === 'herbivaro'){
                console.log('vaca')
        }
    }
}

if(op1 === 'invertebrado'){
    if(op2 === 'inseto'){
        if(op3 === 'hematofago'){
            console.log('pulga')
        }
            if(op3 === 'herbivoro'){
                console.log('lagarta')
        }
    }
    if(op2 === 'anelideo'){
        if(op3 === 'hematofago'){
            console.log('sanguessuga')
        }
            if(op3 === 'onivoro'){
                console.log('minhoca')
        }
    }
}
