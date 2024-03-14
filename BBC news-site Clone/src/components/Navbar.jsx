import React from "react";
import logo from "../images/logo_2.png";
import { FaUser } from "react-icons/fa6";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/setup";
import { MdOutlineLogout } from "react-icons/md";
import { signOut } from "firebase/auth";
import { TiThMenu } from "react-icons/ti";

const Navbar = (props) => {
  const navigate=useNavigate();
  const logout=async()=>{
    try {
      signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="grid grid-cols-3 min-w-full bg-black h-[64px] text-white fixed">
      <div className="flex items-center">
        <img className="h-[56px] pl-[10px] md:pl-[130px] sm:pl-[80px] pr-1 pt-3" src={logo} alt="" />
        {auth.currentUser ? (
  <button onClick={logout} className="text-white flex gap-[6px] w-52 hover:underline text-[16px] font-bold items-center pl-3">
    <MdOutlineLogout className="h-6 w-[23px] md:hidden block" />
    <span className="md:block hidden">Log Out</span>
  </button>
) : (
  <Link to="/signin">
    <button className="text-white flex gap-[6px] w-52 hover:underline text-[13px] font-bold items-center pl-3">
      <FaUser className="h-6 w-[23px] md:hidden block" />
      <span className="md:block hidden">Sign in</span>
    </button>
  </Link>
)}
      </div>
      <div className=" hidden md:flex gap-[31px] font-bold text-[13px]">
        <button onClick={()=>props.setMenu("All")} className=" hover:border-solid hover:border-b-8 hover:border-white">
          Home
        </button>
        <button onClick={()=>props.setMenu("science")} className=" hover:border-solid hover:border-b-8 hover:border-red-500">
          Science
        </button>
        <button onClick={()=>props.setMenu("movies")} className=" hover:border-solid hover:border-b-8 hover:border-yellow-400">
          Movies
        </button>
        <button onClick={()=>props.setMenu("future")} className=" hover:border-solid hover:border-b-8 hover:border-green-400">
          Future
        </button>
        <button onClick={()=>props.setMenu("food")} className=" hover:border-solid hover:border-b-8 hover:border-blue-400">
          Food
        </button>
        <button onClick={()=>props.setMenu("worklife")} className=" hover:border-solid hover:border-b-8 hover:border-blue-600">
          Worklife
        </button>
        <button onClick={()=>props.setMenu("travel")} className=" hover:border-solid hover:border-b-8 hover:border-green-700">
          Travel
        </button>
        <button onClick={()=>props.setMenu("culture")} className=" hover:border-solid hover:border-b-8 hover:border-violet-600">
          Culture
        </button>
      </div>
      <div className="hidden md:flex items-center w-[120%] -gap-[10px] ml-20 md:pl-32">
          <PiMagnifyingGlassBold className="text-[29px] mr-2 md:text-[24px] sm:text-[19px]" />
        <input onChange={(e)=>props.setSearch(e.target.value.toLowerCase())} className="flex bg-slate-900 hover:bg-gray-800 pl-3 items-center h-[28px] md:h-[40px] w-[100px] md:w-[198px] text-[13px] font-bold" placeholder="Seach BBC"/>
      </div>
      <TiThMenu className="flex md:hidden text-[39px] text-center ml-40 mt-3" />

    </div>
  );
};

export default Navbar;