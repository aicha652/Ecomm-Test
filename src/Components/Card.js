import React from 'react'
import './Card.css'
import { BsFillBagHeartFill } from "react-icons/bs";

export default function Card({img, title, star, reviews, prevPrice, newPrice}) {
  return (
    <div className='container-img'>
        <img alt="img"  src={img}></img>
        <h3 className='img-title'>{title}</h3>
        <div className='stars-item'>
            {star}{star}{star}{star}
            <p className='reviews'>{reviews}</p>
        </div>
        <div className='price'>
            <del>{prevPrice}</del>{newPrice}
            <BsFillBagHeartFill className='bag' />
        </div>
    </div>
  )
}
