import React from 'react'
import './Bottle.css'

const Bottle = ({bottle,handleAddCart}) => {
  
    const {name,img,price} = bottle
    
  return (
    <div className='bottle'>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>${price}</p>  
        <button onClick={()=>handleAddCart(bottle)}>Purchase</button>      
    </div>
  )
}

export default Bottle
