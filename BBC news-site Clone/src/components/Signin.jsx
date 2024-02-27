import React from 'react';
import frontimg from "../images/frontimg.png";
import logo from "../images/logo_2.png";
import {signInWithPopup} from "firebase/auth";
import { auth,googleProvider } from '../firebase/setup';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

  const navigate=useNavigate();
  const googleSignin=async()=>{
    try {
      await signInWithPopup(auth,googleProvider);
      auth.currentUser && navigate("/");
      
    } catch (error) {
      console.log(error);
    }
    // console.log(auth);
  }
  const onHome=()=>{
    navigate("/");
  }
  return (
    <>
    <div className='bg-black max-w-screen grid grid-cols-2 max-h-screen md:h-screen'>
      {/* creating the left part */}
      <div className='bg-black text-center'>
        <img className='h-16 ml-[6rem] md:ml-[18rem] mt-40 rounded-none cursor-pointer' src={logo} alt="" />
        <h1  className='text-white w-36 text-3xl ml-28 md:ml-[19rem] mt-7 font-bold'>Sign in</h1>
        <button onClick={googleSignin} type="button" className="text-white ml-9 mt-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-xl px-5 py-2.5 text-center w-80 hover:scale-110 ">Sign In</button>
        <h1 onClick={onHome} className='text-blue-400 w-52 md:w-52 ml-24 md:ml-72 underline hover:text-blue-700 mt-6 text-lg font-semibold cursor-pointer'>Continue Without Sign in</h1>
      </div>

      {/* creating the right part */}
      <div className='relative '><img className='hidden md:block absolute right-1 h-screen w-[610px] object-cover' src={frontimg} /></div>
      <h1 className='text-white font-bold mt-[64px] text-[14px] md:text-[20px] md:mt-[222px] ml-6 hover:underline hover:text-slate-400'>Find out more about BBC on the official site</h1>
    </div>
    <Footer />
    </>
  )
}

export default Signin;
