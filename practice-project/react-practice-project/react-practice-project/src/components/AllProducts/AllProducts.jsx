import React, { useEffect, useState } from 'react'
import './AllProducts.css'
import Product from '../Product/Product';

const AllProducts = ({handleSelectedProducts}) => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    fetch('./products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])
  
  return (
    <div>
        
        {
          products.map((product,index)=><Product handleSelectedProducts={handleSelectedProducts} key={index} product={product}></Product>)
        }
    </div>
  )
}

export default AllProducts
