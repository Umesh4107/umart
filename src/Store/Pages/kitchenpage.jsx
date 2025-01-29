import React, { useState } from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const KitchenPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(item)=>{
            if(selectedProduct.includes(item)){
                setSelectedProduct(selectedProduct.filter((product) => product !== item))
            }else{
                setSelectedProduct([...selectedProduct, item]) 
            }
    }


    const filteredProduct = selectedProduct.length===0?
        kitchenData : kitchenData.filter((fitem)=>selectedProduct.includes(fitem.brand))

return (
<>
<Navbar />
<div className="fullpage">
    
<div className="pro-selected">

{kitchenData.map((data)=>{
    return(
        <div className='pro-input'>
            <label >
                <input type="checkbox" 
                checked = {selectedProduct.includes(data.brand)}
                onChange={()=>companyHandler(data.brand)}
                />
                {data.brand}
            </label>
        </div>
    )
})}

</div>

<div className='pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div>

            <Link to={`/kitchen/${item.id}`}>
                <div className="pageImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="proModel">
                    {item.brand}, {item.model}
                </div>
            </div>
        )
    })}

 </div>
</div>
</>
  )
}

export default KitchenPage