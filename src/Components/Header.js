import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import "./Header.css"

export default function Header() {
  return (
    <div className='container'>
      <div>
        <input type="text" placeholder='Enter your search shoes'/>
      </div>
      <div>
        <FaRegHeart className='icons-items'/>
        <AiOutlineShoppingCart className='icons-items'/>
        <AiOutlineUserAdd className='icons-items'/>
      </div>
    </div>
  )
}
