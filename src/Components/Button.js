import React from 'react'
import './Button.css'
import products from '../db/data.js'

export default function Button({value}) {
  
  function handleButtonClick() {
    products.filter((product) => 
        product.company === value
    )
  }

  return (
    <div>
      <button className='button' onClick={handleButtonClick}>{value}</button>
    </div>
  )
}
