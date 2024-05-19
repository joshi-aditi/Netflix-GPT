import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='bg-img'/>
      </div>
      <form className='absolute bg-black text-white w-3/12 my-36 mx-auto right-0 left-0 p-8 opacity-90'>
        <h1 className='text-2xl font-bold'>{isSignInForm? "Sign In" :"Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='w-full p-3 my-5 rounded-sm bg-gray-700'></input>}
        <input type='text' placeholder='Email or Phone Number' className='w-full p-3 my-5 rounded-sm bg-gray-700'></input>
        <input type='password' placeholder='Password' className='w-full p-3 my-5 rounded-sm bg-gray-700'></input>
        <button className='bg-red-700 w-full p-3 rounded-lg my-5 font-bold'>{isSignInForm? "Sign In" : "Sign Up"}</button>
        <p className='text-white text-xs font-semibold cursor-pointer hover:underline -mt-2 ml-1' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already Registered? Sign In"}</p>
      </form>
    </div>
  )
}

export default Login