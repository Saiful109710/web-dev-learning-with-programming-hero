import React from 'react'
import Cousin from '../Cousin/Cousin'

const Uncle = ({asset}) => {
  return (
    <div>
        <h2>Uncle</h2>
        <section className='flex'>
            <Cousin asset={asset} name={'Nayeem'}></Cousin>
            <Cousin name={'Ali'}></Cousin>
        </section>
    </div>
  )
}

export default Uncle
