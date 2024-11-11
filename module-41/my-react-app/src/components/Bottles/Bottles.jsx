import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToLs, getStoredCart, removeFromLs } from '../../Utils/localStorage';
import Cart from '../../Cart/Cart';

const Bottles = () => {
    const [bottles,setBottles] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('bottle.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])
    // load local storage
    useEffect(()=>{
      console.log('called the useEffect',bottles.length)
      if(bottles.length){
        const storedCart = getStoredCart();
        const saveCart =[]
        for(const id of storedCart){
          console.log(id)
          const bottle = bottles.find((bottle)=>bottle.id ===id)
          saveCart.push(bottle);
        }
        console.log(saveCart)
        setCart(saveCart)
      }
    },[bottles])

    const handleAddCart = (bottle)=>{
        const newArray = [...cart,bottle];
        setCart(newArray);
        addToLs(bottle.id)
    }
    const handleRemoveCart = (id)=>{
        removeFromLs(id);
        const remainingCart = cart.filter((bottle)=>bottle.id !==id)
        setCart(remainingCart)
    }
  return (
    <div>
        <h2>I am bottles</h2>
        <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
       <div className='bottle-container'>
       {
            bottles.map((bottle)=><Bottle key={bottle.id} 
            bottle={bottle}
            handleAddCart = {handleAddCart}
            
            ></Bottle>)
        }
       </div>
    </div>
  )
}

export default Bottles
