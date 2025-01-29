import React, { useState } from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const AcPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(item)=>{
            if(selectedProduct.includes(item)){
                setSelectedProduct(selectedProduct.filter((product) => product !== item))
            }else{
                setSelectedProduct([...selectedProduct, item]) 
            }
    }


    const filteredProduct = selectedProduct.length===0?
        acData : acData.filter((fitem)=>selectedProduct.includes(fitem.company))

return (
<>
<Navbar />
<div className="fullpage">
    
<div className="pro-selected">

{acData.map((data)=>{
    return(
        <div className='pro-input'>
            <label >
                <input type="checkbox" 
                checked = {selectedProduct.includes(data.company)}
                onChange={()=>companyHandler(data.company)}
                />
                {data.company}
            </label>
        </div>
    )
})}

</div>

<div className='pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div>

            <Link to={`/ac/${item.id}`}>
                <div className="pageImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="proModel">
                    {item.company}, {item.model}
                </div>
            </div>
        )
    })}

 </div>
</div>
</>
  )
}

export default AcPage