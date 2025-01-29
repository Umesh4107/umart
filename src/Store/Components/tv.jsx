import React from 'react'
import { tvData } from '../data/tv'

const tv = () => {
    const firstfiveimages = tvData.slice(0,5)
    return (
    <>
    <div className='producttitle'>
    <h2>Televisions</h2>
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



export default tv