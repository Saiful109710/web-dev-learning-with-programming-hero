import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {postId} = useParams();
    const {id,title,body} = post

    const handleGoBack=()=>{
        navigate(-1)
    }
    console.log(postId)

  return (
    <div>
        <h2>{id}</h2>
        <p>{title}</p>
        <small>{body}</small>
        <button onClick={handleGoBack}>Go back</button>
    </div>
  )
}

export default PostDetail
