import React from 'react'

const SimpleForm = ({formTitle,submitBtnText='submit',handleSubmit,children,props}) => {
    console.log(children)
  const handleLocalData = (e)=>{
      e.preventDefault();
      const data = {
        name:e.target.name.value,
        email:e.target.email.value,
        password:e.target.password.value,
      }
      handleSubmit(data)
  }

  return (
    <div>
          {children}
        <form action="" onSubmit={handleLocalData}>
            <input name='name' type="text" />
            <br />
            <input name='email' type="email" />
            <br />
            <input name='password' type="password" />
            <br />
            <input type="submit" value={submitBtnText} />
        </form>
    </div>
  )
}

export default SimpleForm
