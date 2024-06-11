import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { SUPPORTED_LANGUAGES, netflix_logo } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';
import { changeLang } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const aditi = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  const gptSearchValue = useSelector((store)=>store.gpt.showGptSearch)


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email:email,displayName:displayName, photoURL:photoURL}));
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmount...
    return ()=>unsubscribe();
  },[])

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleGptSearch = ()=>{
    dispatch(toggleGptSearch());
  }

  const handleLang = (e)=>{
    dispatch(changeLang(e.target.value));
  }

  return (
    <div className='absolute l-0 r-0 w-[98.5vw] h-20 font-bold bg-gradient-to-b from-black z-10 flex justify-between  '>
    

    <img className='w-40 ml-4 mt-1' src= {netflix_logo} alt='netflix-logo'/>

    
    {aditi && <div className='flex p-5 gap-3'>

    {gptSearchValue && <select className='bg-gray-800 px-2 mx-1 rounded-md text-white font-semibold' onChange={handleLang}>
    {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
    </select>}

    <button className='text-white bg-purple-700 px-2 rounded-lg' onClick={handleGptSearch}>{gptSearchValue? "Home Page":"GPT Search"}</button>

    <img  className='w-12 h-10 p-1' src={aditi.photoURL} alt='user icon'/>

    <button className='text-white bg-red-600 rounded-xl px-4' onClick={handleSignOut}>Sign Out</button>

    </div>
    }
    </div>

  )
}

export default Header