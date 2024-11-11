import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title} = post;
    const navigate = useNavigate();

    const handleShowDetail=()=>{
        navigate(`/post/${id}`)
    }
  return (
    <div className='user'>
        <h2>id:{id}</h2>
        <p>{title}</p>
        <Link to={`/post/${id}`}>Show Details</Link>
        <button onClick={handleShowDetail}>click to show details</button>
    </div>
  )
}

export default Post
