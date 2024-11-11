import React, { useState } from 'react'
import "./country.css"

const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
   const {name,flags,area,population,cca3} = country;
   const [visited,setVisited] = useState(false);
   const handleVisited = ()=>{
        setVisited(!visited)
   }

   
  return (
    <div className={`country ${visited&&'visited'}`}>
        <h2 style={{color:`${visited?'purple':'white'}`}}>Name: {name.common}</h2>
        <img src={flags.png} alt="" />
        <p>Area: {area}</p>
        <p>Population:{population}</p>
        <p>Code:{cca3}</p>
        <button onClick={()=>{handleVisitedCountry(country)}}>Mark visited</button>
        <button onClick={handleVisited}>{visited?"Going":"Visited"}</button>
        {
            visited?"I am visited":"I want to going"
        }
        <br />
        <button onClick={()=>{handleVisitedFlags(flags)}}>Add Flag</button>
    </div>
  )
}

export default Country
