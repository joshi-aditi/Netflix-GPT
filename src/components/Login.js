import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleBtnClick= ()=>{
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = validateData(email.current.value,password.current.value);
    // console.log(message);
    setErrorMessage(message);
    if(message) return;//IF SOME MSG STRING WE GOT THEN WILLL JUST DIRECTLY RETURN.... ELSE WILL GO FOR SIGNUP OR SIGN IN USER...

    if(!isSignInForm){//Code for signup first. to create account with email and password using firebase...
      //Sign Up logic.
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/110401628?v=4"
        }).then(() => {
          // Profile updated!
          // ...
          const {uid, email, displayName,photoURL} = auth.currentUser;//THIS WON'T BE USER IT WILL BE AUTH.CURRENTUSER BCZ THAT USER DOESNOT HAVE THE NAME AND THE PHOTOURL.
          dispatch(addUser({uid:uid, email:email,displayName:displayName, photoURL:photoURL}));
          navigate("/browse")

        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error);
        });
        // console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" "+errorMessage);
        // ..
        navigate("/")
      });
    }
    else{
      //Sign In logic.
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log(user);
        // ...
        navigate("/browse");
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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
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
          placeholder="Email or Phone Number"
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
