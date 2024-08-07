import React from 'react'
import './Card.css'
import { BsFillBagHeartFill } from "react-icons/bs";
import products from '../db/data.js'


export default function Card() {
  return (
    <div className='frame'> 
            {products.map((product) => (
                <div className='container-img'>
                    <img alt="img"  src={product.img}></img>
                    <h3 className='img-title'>{product.title}</h3>
                    <div className='stars-item'>
                        {product.star}{product.star}{product.star}{product.star}
                        <p className='reviews'>{product.reviews}</p>
                    </div>
                    <div className='price'>
                        <del>{product.prevPrice}</del>{product.newPrice}
                        <BsFillBagHeartFill className='bag' />
                    </div>
                </div>
            ))}
    </div>
  )
}
