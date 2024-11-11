import React, { useEffect, useState } from 'react'
import Country from '../Country/Country';
import "./countries.css"


const Countries = () => {

    const [countries,setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([])
    const [visitedFlags,setVisitedFlags] = useState([])
    console.log(visitedFlags)
    
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    const handleVisitedCountry = country =>{
      console.log("add this to your visited country")
      const newArray = [...visitedCountries,country];
      setVisitedCountries(newArray)
      
    }

    const handleVisitedFlags = (flags)=>{
          const newArray = [...visitedFlags,flags.png]
          setVisitedFlags(newArray)
    }
    
  return (
    <div>
       <h3>Countries:{countries.length}</h3>
       <div>
            <h3>Visited country:{visitedCountries.length}</h3>
            <ul>
                
                  {visitedCountries.map((country)=> <li key={country.cca3}>{country.name.common}</li>
                  )}
                
            </ul>
       </div>
       <div className='flags-container'>
              {visitedFlags.map((flag,index)=><img key={index} src={flag}></img>)}
       </div>
        <div className='country-container'>
        {
        countries.map((country)=><Country 
        key={country.cca3} 
        country={country} 
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}></Country>)
       }
        </div>
     
    </div>
  )
}

export default Countries
