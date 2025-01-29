import React from 'react'
import { computerData } from '../data/computers'

const computers = () => {

    const Firstfiveobjects = computerData.slice(0,5)

  return (
    <>
    <div className='producttitle'>
    <h2>Computers</h2>
    </div>
    
    <div className='sec'>
        {   Firstfiveobjects.map((product)=>{
            return(
                    <div className='sec2'>
                        <img className='sec3' src={product.image} alt="" />
                    </div>
                )

        
            })
    
        }
    </div>
    </>
  )
}

export default computers