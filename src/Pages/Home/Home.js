import React from 'react'
import './Home.css'
import open from './shopimg.jpg'

export default function Home() {
  return (
    <div className='global-container'>
        <h1 className='home-title'>Bienvenue au <span>shop</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae neque repellat animi dolorum dolore rem aperiam possimus a dolores voluptate quia suscipit assumenda maxime sed corrupti laudantium nam, fuga ipsa.</p>
        <img src={open} alt="acceuil shop" />
    </div>
  )
}
