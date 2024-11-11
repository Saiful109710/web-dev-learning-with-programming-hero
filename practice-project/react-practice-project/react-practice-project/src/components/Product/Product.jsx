import React from 'react'
import './Product.css'

const Product = ({product,handleSelectedProducts}) => {
    
    

    const {recipe_id,recipe_name,recipe_image,short_description,ingredients,preparing_time,calories} = product
  return (
    <div className='w-[300px] m-3 p-4'>
        <img src={recipe_image} alt="" />
        <h2>{recipe_name}</h2>
        <p>{short_description}</p>

        <button onClick={()=>handleSelectedProducts(product)} className='bg-gray-400 p-3 rounded-xl'>Add to cart</button>
    </div>
  )
}

export default Product
