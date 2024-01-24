import React from 'react';
import frontimg from "../images/frontimg.png";
import logo from "../images/logo_2.png";
import {signInWithPopup} from "firebase/auth";
import { auth,googleProvider } from '../firebase/setup';

const Signin = () => {
  const googleSignin=async()=>{
    try {
      await signInWithPopup(auth,googleProvider);
      
    } catch (error) {
      console.log(error);
    }
    // console.log(auth);
  }
  return (
    <div className='bg-black grid grid-cols-2 h-screen'>
      {/* creating the left part */}
      <div className='bg-black text-center'>
        <img className='h-16 ml-[18rem] mt-40 rounded-none cursor-pointer' src={logo} alt="" />
        <h1  className='text-white text-3xl mt-7 font-bold'>Sign in</h1>
        <button onClick={googleSignin} type="button" class="text-white mt-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-xl px-5 py-2.5 text-center w-80 hover:scale-110 ">Next</button>
        <h1 className='text-blue-400 underline hover:text-blue-700 mt-6 text-lg font-semibold'>Sign In now</h1>
      </div>

      {/* creating the right part */}
      <div className='relative '><img className='absolute right-1 h-screen w-[610px] object-cover' src={frontimg} /></div>
      <h1 className='text-white font-bold mt-[272px] ml-6 hover:underline hover:text-slate-400'>Find out more about BBC on the official site</h1>
    </div>
  )
}

export default Signin;
