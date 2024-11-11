import React from 'react'

const Cart = ({selectedProducts,handleRemove}) => {
  return (
    <div>
       {
        selectedProducts.map((product)=>(
          <div>
            <div className='flex gap-2'>
              <img src={product.recipe_image} className='w-20' alt="" />
              <p>{product.recipe_name}</p>
              <button onClick={()=>handleRemove(product.recipe_id)} className='bg-gray-300 p-2 rounded-lg'>Delete</button>
            </div>
          </div>
        ))
       }
    </div>
  )
}

export default Cart
