import React from 'react'
import { booksData } from '../data/books'

const books = () => {

    const firstfiveobjects = booksData.slice(0,5)

  return (
    <>
    <div className='producttitle'>
    <h2>Books</h2>
    </div>
    <div className='sec'>
        {
            firstfiveobjects.map((product)=>{
                return(
                    <div className='sec2'>
                        <img className='sec3' src={product.image}/>
                    </div>    
                )
            })
        }
    </div>
    </>
    
        
    
  )

}
export default books