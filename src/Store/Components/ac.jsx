import React from 'react'
import { acData } from '../data/ac'

const ac = () => {

    const firstfiveimage = acData.slice(0,5)

  return (
<>
    <div className='producttitle'>
    <h2>Air Conditioner</h2>
    </div>

    <div className='sec'> 
    
        {
        firstfiveimage.map((product=>{
            return(
                <div className='sec2'>
                    <img className='sec3' src={product.image} alt="" />
                </div>
            )
        }))
        
    }
    
    
    </div>
    </>
  )
}

export default ac