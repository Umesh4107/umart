import React from 'react'
import { mobileData } from '../data/mobiles'

const mobiles = () => {

    const Firstfiveimages = mobileData.slice(0,5)

  return (
    
    <>
    <div className='producttitle'>
    <h2>Mobiles</h2>
    </div>
    <div className='sec'>
        {   Firstfiveimages.map((product)=>{
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

export default mobiles