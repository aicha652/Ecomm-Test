import React from 'react'
import './Button.css'

export default function Button({value}) {
  return (
    <div>
      <button className='button'>{value}</button>
    </div>
  )
}
