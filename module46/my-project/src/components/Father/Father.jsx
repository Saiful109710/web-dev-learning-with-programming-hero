import React from 'react'
import Me from '../Me/Me'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'


const Father = ({asset}) => {
  return (
    <div>
         <h2>Father</h2>
         <section className='flex'>
                <Me asset={asset}></Me>
                <Brother></Brother>
                <Sister></Sister>
                
         </section>
    </div>
  )
}

export default Father
