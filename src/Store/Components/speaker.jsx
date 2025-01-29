import React from 'react'
import { speakerData } from '../data/speaker'


const speaker = () => {
    const firstfiveobjects = speakerData.slice(0,5)
  return (

<>
    <div className='producttitle'>

    <h2>Speakers</h2>
    </div>
    <div className='sec'> 
    {
        firstfiveobjects.map((products)=>
        {
            return(
                <div className='sec2'>
                    <img className='sec3' src={products.image} alt="" />
                </div>
            )
        })
    }
    </div>
</>
        
  )
}

export default speaker