import React from 'react'
import { womanData } from '../data/woman'

const women = () => {
  const firstfiveimages = womanData.slice(0,5)
      return (
      <>
      <div className='producttitle'>
      <h2>Women Wear</h2>
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

export default women