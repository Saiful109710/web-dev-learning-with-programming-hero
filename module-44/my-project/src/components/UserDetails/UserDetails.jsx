import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UserDetails = () => {
    const user = useLoaderData();
    const {name,website} = user;
  return (
    <div>
      <h2>This is : {name}</h2>
      <p>and his website is {website}</p>
    </div>
  )
}

export default UserDetails
