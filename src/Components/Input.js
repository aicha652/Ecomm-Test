import React from 'react'
import "./Input.css"

export default function Input({value}) {
  return (
    <div className='wrap'>
      <input className='input-radio' type="radio" value={value} />
    </div>
  )
}
