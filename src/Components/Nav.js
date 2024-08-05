import React from 'react'
import './Nav.css'
import { TiShoppingCart } from "react-icons/ti";
import Category from './Category';
import Price from './Price';
import Color from './Color';

export default function Nav() {
  return (
    <div className='sidebar'>
        <TiShoppingCart className='icon'/>
        <Category />
        <Price />
        <Color />
    </div>
  )
}
