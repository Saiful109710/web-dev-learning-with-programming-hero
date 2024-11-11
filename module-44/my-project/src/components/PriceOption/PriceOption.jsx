import React from 'react'
import Feature from './Feature/Feature'

const PriceOption = ({option}) => {
    const {name,price,features} = option
  return (
    <div className='bg-blue-500 p-4 text-white rounded-md flex flex-col'>
        <h2 className='text-center'>
        <span className='text-7xl font-extrabold'>{price}</span>
        <span className='text-2xl'>/mon</span>
        </h2>
        <h3 className='text-3xl text-center'>{name}</h3>
      <div className='flex-grow'>
      {
            features.map((feature,index)=><Feature key={index} feature={feature}></Feature>)
        }
      </div>
        <button className='btn w-full bg-green-400 outline-none border-none hover:bg-green-800'>Buy Now</button>
    </div>
  )
}

export default PriceOption
