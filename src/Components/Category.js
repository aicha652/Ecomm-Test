import React from 'react'
import './Category.css'
import Input from './Input'

export default function Category() {
  return (
    <div className='category'>
      <h3>Category</h3>
      <Input value="All products"/>
      <Input />
      <Input />
    </div>
  )
}
