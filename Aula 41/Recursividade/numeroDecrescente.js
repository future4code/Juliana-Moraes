const numeroDecrescente = (numero) => {

    if( numero >= 0) {
        console.log(numero)
        numeroDecrescente(numero - 1)
        
        
    }    
}

console.log(numeroDecrescente(100))