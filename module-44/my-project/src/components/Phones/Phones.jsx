import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio } from 'react-loader-spinner'
const Phones = () => {
    const [phones,setPhones] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data=>setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const phones = data.data.data
            const phoneWithFakeData = phones.map()           
            setPhones(phoneWithFakeData);
            setLoading(false)
        })
        
    },[])
    console.log(phones)
  return (
    <div>
        {
            loading && <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
            />
        }
        <h2>{phones.length}</h2>
        <BarChart width={800} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey='names'></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
    </div>
  )
}

export default Phones
