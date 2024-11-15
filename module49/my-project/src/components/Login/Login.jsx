import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { Result } from "postcss";
import { Link } from "react-router-dom";

const Login = () => {

    const [successMessage,setSuccessMessage] = useState(false)
    const [errorMessage,setErrorMessage] = useState('');
    const emailRef = useRef()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user);
            if(!result.user.emailVerified){
                setErrorMessage('please verify your email')

            }else{
                setSuccessMessage(true)
            }
        })
        .catch(error=>{
            console.log(error.message);
            setErrorMessage(error.message);
            setSuccessMessage(false)
        })
    }

    const handleForgetPassword=()=>{
        console.log(emailRef.current.value)
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth,email)
        .then(()=>console.log('reset email sent'))
    }
  return (
    <div className="hero bg-base-200 min-h-screen max-w-3xl mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {
            successMessage && <p className="text-green-500">Log in successfully</p>
          }
          {
            errorMessage && <p className="text-red-500">{errorMessage}</p>
          }
          <p>New to this website? Please <Link to='/register'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
