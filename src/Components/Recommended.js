import React from 'react'
import './Recommended.css'
import Button from './Button'

export default function Recommended() {
  return (
    <div className='recommended'>
      <h1>Recommended</h1>
      <div className='buttons'>
        <Button value="All Products" />
        <Button value="Nike" />
        <Button value="Adidas" />
        <Button value="Puma" />
        <Button value="Vans" />
      </div>
    </div>
  )
}
