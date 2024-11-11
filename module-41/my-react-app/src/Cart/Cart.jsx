import React from 'react'
import PropTypes from 'prop-types';
import './Cart.css'

const Cart = ({cart,handleRemoveCart}) => {
  return (
    <div className='cart-container'>
        {cart.map(bottle=>{
            return(
                <div key={bottle.id}>
                    <img src={bottle.img}></img>
                    <button onClick={()=>{handleRemoveCart(bottle.id)}}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}

Cart.PropTypes ={
    cart:PropTypes.array.isRequired
}

export default Cart
