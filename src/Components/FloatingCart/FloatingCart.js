import React from 'react'
import './FloatingCart.css'
import cart from './shopping-cart.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function FloatingCart() {

  const shoppingCart = useSelector(state => state)
  console.log(shoppingCart);
  let totalItems = 0
  for (const items of shoppingCart.cart) {
    totalItems += items.quantity
  }
    
  
  
  return (
    <Link to='/shoppingCart'>
        <div className='floating-cart'>
                <p>Votre Panier</p>
            <div className="img-notif-container">
                <img src={cart} alt="" />
                <span className="notif">{totalItems}</span>
            </div>
        </div>
    </Link>
  )
}
