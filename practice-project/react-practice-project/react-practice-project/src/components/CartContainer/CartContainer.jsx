import React from 'react'
import './CartContainer.css'
import About from '../About/About'
import Cart from '../Cart/Cart'

const CartContainer = ({handleActiveStatus,isActive,selectedProducts,handleRemove}) => {
  return (
    <div>
      <h2>CartContainer.jsx</h2>
      <div className='toogle flex justify-around'>
        <div className={`${isActive.cart?'btn active':'btn'}`} onClick={()=>handleActiveStatus("cart")}>CART</div>
        <div className={`${isActive.cart?'btn ':'btn active'}`} onClick={()=>handleActiveStatus("about")}>About</div>

      </div>
        {
            isActive.cart?<Cart selectedProducts={selectedProducts} handleRemove={handleRemove}></Cart>:<About></About>
        }
    </div>
  )
}

export default CartContainer
