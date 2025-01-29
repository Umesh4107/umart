import React, { useState } from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const bookspage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(item)=>{
            if(selectedProduct.includes(item)){
                setSelectedProduct(selectedProduct.filter((product) => product !== item))
            }else{
                setSelectedProduct([...selectedProduct, item]) 
            }
    }

    const filteredProduct = selectedProduct.length === 0 ? 
        booksData : booksData.filter((fitem) => selectedProduct.includes(fitem.category));

    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="filter-section">
                    <h3 className="filter-title">Filter by Category</h3>
                    <div className="pro-selected">
                        {booksData.map((data) => {
                            return (
                                <div className='pro-input' key={data.id}>
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={selectedProduct.includes(data.category)}
                                            onChange={() => companyHandler(data.category)}
                                        />
                                        <span>{data.category}</span>
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='pageSection'>
                    {filteredProduct.map((item) => {
                        return (
                            <div key={item.id} className="book-card">
                                <Link to={`/books/${item.id}`}>
                                    <div className="pageImg">
                                        <img src={item.image} alt={item.title} className="book-image" />
                                    </div>
                                </Link>
                                <div className="proModel">
                                    <p className="book-title">{item.title}</p>
                                    <p className="book-author">by {item.author}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default bookspage;
