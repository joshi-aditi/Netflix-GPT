import { signOut } from 'firebase/auth';
import React from 'react';
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const aditi = useSelector((store)=>store.user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
      
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className='absolute l-0 r-0 w-screen h-20 font-bold bg-gradient-to-b from-black z-10 flex justify-between  '>
    <img className='w-40 ml-4 mt-1' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix-logo'/>

    {aditi && <div className='flex p-5 gap-3'>
    <img  className='w-12 h-10 p-1' src={aditi.photoURL} alt='user icon'/>

    <button className='text-white bg-red-600 rounded-xl p-2' onClick={handleSignOut}>Sign Out</button>
    </div>
    }
    </div>

  )
}

export default Header