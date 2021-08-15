import React from 'react'

const ladosTriangulo = (ladoA, ladoB, ladoC) => {
    if(ladoA >= ladoB + ladoC) {
        return false;
      }
    
      if(ladoB >= ladoA + ladoC) {
        return false
      }
    
      if(ladoC >= ladoA + ladoB) {
        return false;
      }
    
      return true;
}

export default ladosTriangulo