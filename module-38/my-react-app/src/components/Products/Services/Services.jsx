import React from 'react'

export default function Services({message}) {
  return (
    <div>
        <h3>this is Service</h3>
        <button onClick={()=>{message("Hello i am from service")}}>Click from service</button>
    </div>
  )
}
