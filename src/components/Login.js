import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { user_Avatar } from "../utils/constants";
import { bg_img } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleBtnClick= ()=>{
    const message = validateData(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return;//IF SOME MSG STRING WE GOT THEN WILLL JUST DIRECTLY RETURN.... ELSE WILL GO FOR SIGNUP OR SIGN IN USER...

    if(!isSignInForm){//Code for signup first. to create account with email and password using firebase...
      //Sign Up logic.
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: user_Avatar
        }).then(() => {
          // Profile updated!
          // ...
          const {uid, email, displayName,photoURL} = auth.currentUser;//THIS WON'T BE USER IT WILL BE AUTH.CURRENTUSER BCZ THAT USER DOESNOT HAVE THE NAME AND THE PHOTOURL.
          dispatch(addUser({uid:uid, email:email,displayName:displayName, photoURL:photoURL}));

        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error);
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" "+errorMessage);
        // ..
      });
    }
    else{
      //Sign In logic.
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" "+errorMessage);
      });
    }

  }
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img
          src={bg_img}
          alt="bg-img"
        />
      </div>
      <form className="absolute bg-black text-white w-3/12 my-36 mx-auto right-0 left-0 p-8 opacity-90" onSubmit={(e)=>e.preventDefault()}>
        <h1 className="text-2xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-3 my-5 rounded-sm bg-gray-700"
          ></input>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full p-3 my-5 rounded-sm bg-gray-700"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 my-5 rounded-sm bg-gray-700"
        ></input>

        <p className="py-2 font-bold text-red-600">{errorMessage}</p>

        <button className="bg-red-700 w-full p-3 rounded-lg mt-2 mb-4 font-bold" onClick={handleBtnClick} >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-white text-xs font-semibold cursor-pointer hover:underline -mt-2 ml-1"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
