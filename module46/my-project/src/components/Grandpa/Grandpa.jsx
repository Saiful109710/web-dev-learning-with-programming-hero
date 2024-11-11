import React, { createContext, useState } from 'react'
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './Grandpa.css'
export const AssetContext = createContext('gold')
export const MoneyContext = createContext(1000)

 const Grandpa = () => {
    const [money,setMoney] = useState(1000)
 
  return (
    <div className='grandpa '>
            <h2>Grandpa</h2>
            <p>balance:{money}</p>
            <MoneyContext.Provider value={[money,setMoney]}>
                <AssetContext.Provider value='gold'>
                <section className='flex' >
                    <Father></Father>
                    <Uncle ></Uncle>
                    <Aunty></Aunty>    
                </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
    </div>
  )
}

export default Grandpa
