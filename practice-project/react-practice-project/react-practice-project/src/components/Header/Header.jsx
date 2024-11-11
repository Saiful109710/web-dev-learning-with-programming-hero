import React from 'react'

const Header = ({selectedProducts,price}) => {
  return (
    <div className='bg-green-300' >
       <div className='flex justify-between container mx-auto py-5  px-2'>
       <div>
            Logo
        </div>
        <div>
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>Product</li>
                <li>Cart:{selectedProducts.length}</li>
                <li>${price}</li>
            </ul>
        </div>
       </div>
        
    </div>
  )
}

export default Header
