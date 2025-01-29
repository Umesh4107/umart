import React from 'react'
import { furnitureData } from '../data/furniture'

const furniture = () => {
    const firstfiveimages = furnitureData.slice(0,5)
    return (
    <>
    <div className='producttitle'>
    <h2>Furniture</h2>
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


    
  


export default furniture