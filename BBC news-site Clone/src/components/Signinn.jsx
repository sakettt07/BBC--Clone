import React from 'react';
import frontimg from "../images/frontimg.png";
import logo from "../images/logo_2.png";
import {signInWithPopup} from "firebase/auth";
import { auth,googleProvider } from '../firebase/setup';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Signinn = () => {

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
    <div className='bg-black w-full grid grid-cols-2 h-screen'>
      {/* creating the left part */}
      <div className='bg-black text-center'>
        <img className='h-16 ml-[6rem] md:ml-[20rem] mt-40 rounded-none cursor-pointer' src={logo} alt="" />
        <button onClick={googleSignin} type="button" className="text-white ml-[72px] mt-5 md:ml-9 md:mt-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-xl p-3 md:px-5 md:py-2.5 text-center w-[13rem] md:w-80 hover:scale-110 ">Sign In</button>
        <h1 onClick={onHome} className='text-blue-400 w-52 md:w-60 ml-[75px] md:ml-72 underline hover:text-blue-700 mt-3 text-[15px] md:text-[18px] font-semibold cursor-pointer'>Continue Without Sign in</h1>
      </div>

      {/* creating the right part */}
      <div className='relative '><img className='hidden md:block absolute right-1 h-screen w-[610px] object-cover' src={frontimg} /></div>
      <h1 className='text-white font-bold mt-[220px] text-[10px] md:text-[20px] md:mt-[319px] ml-6 hover:underline hover:text-slate-400'>Find out more about BBC on the official site</h1>
    </div>
    <Footer />
    </>
  )
}

export default Signinn;
