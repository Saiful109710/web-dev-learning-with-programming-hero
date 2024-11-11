import React from 'react'
import './users.css'
import { useLoaderData } from 'react-router-dom'
import User from '../User/User';

const Users = () => {
  const users = useLoaderData();
  console.log(users)
  return (
    <div>
      <h2>{users.length}</h2>
      <div className='users'>
        {
          users.map(user=><User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  )
}

export default Users
