import React from 'react'
import { fridgeData } from '../data/fridge'

const fridge = () => {

    const firstfiveobjects = fridgeData.slice(0,5)

  return (
    <>
    <div className='producttitle'>
    <h2>Fridge</h2>
    </div>
        <div className='sec'>
            
           {
            firstfiveobjects.map((product=>
            {
                return(
                       <div className='sec2'>
                         <img className='sec3' src={product.image} />
                        </div>
                )
            }
            ))
           } 
            
        </div>
    </>
    
  )
}

export default fridge