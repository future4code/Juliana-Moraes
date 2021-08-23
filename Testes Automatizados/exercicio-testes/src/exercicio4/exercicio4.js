import React from 'react'

const precoMacas = (macas) => {
    if(macas < 12) {
      return macas * 1.3
    }
  
    return macas
  }

export default precoMacas