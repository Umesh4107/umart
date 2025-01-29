import React from 'react'
import { kitchenData } from '../data/kitchen'

const kitchen = () => {
    const firstfiveobjects=kitchenData.slice(0,5)

  return (
    <>
    <div className='producttitle'>
    <h2>Kitchen</h2>
    </div>
    <div className='sec'>
        {
            firstfiveobjects.map((products)=>{
                return (
                <div className='sec2'>
                    <img src={products.image} alt="" />
                </div>
                )
            })
        }
    </div>
    </>
    
    
  )
}

export default kitchen