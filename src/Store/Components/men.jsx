import React from 'react'
import { menData } from '../data/men'


const men = () => {

    const firstfiveimages = menData.slice(0,5)
    
  return (
    <>
    <div className='producttitle'>
    <h2>Men Wear</h2>
    </div>
    <div className='sec'> 
        {
         firstfiveimages.map((Product)=>{
            return(
                <div className='sec2'>
                <img className='sec3' src={Product.image} alt="" />
            </div>
            )

         })

         }
        
        
    </div>
    </>
  )
}

export default men