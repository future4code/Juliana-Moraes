

const imprimirArray = (array)  => {
   
    const i = array.length
    console.log(i)
  
    if( i >= 1) {
        imprimirArray(array[i])
        
    }
    
    // for(let i=0; i <= array.length; i++){
    //     console.log(array[i])
    // }
}


imprimirArray([8, 9, 10, 12])