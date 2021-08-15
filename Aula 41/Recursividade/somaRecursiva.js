


const somaRecursiva = (num) => {

    if(num <= 0 ){
        return 0
    } 
    return num + somaRecursiva(num -1)
}


console.log(somaRecursiva(3))
console.log(somaRecursiva(10))
console.log(somaRecursiva(100))
