import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {

  return (
    <div>
        <p className='flex items-center gap-2'><FaCheckCircle className='text-green-400'></FaCheckCircle>{feature}</p>
    </div>
  )
}

export default Feature
