import React from "react";
import logo from "../images/logo_2.png";
import { FaUser } from "react-icons/fa6";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/setup";
import { MdOutlineLogout } from "react-icons/md";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate=useNavigate();
  const logout=async()=>{
    try {
      signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  console.log(auth.currentUser);
  return (
    <div className="grid grid-cols-3 bg-black h-[64px] text-white">
      <div className="flex items-center">
        <img className="h-[56px] pl-[130px] pr-1 pt-3" src={logo} alt="" />
        {auth.currentUser ? (
          <button onClick={logout} className="text-white flex gap-[6px] w-52 hover:underline text-[13px] font-bold items-center pl-3">
          <MdOutlineLogout className="h-6 w-[23px]" />
          Log Out
        </button>
        ) : (
          <Link to="/signin">
            <button className="text-white flex gap-[6px] w-52 hover:underline text-[13px] font-bold items-center pl-3">
              <FaUser className="h-6 w-[23px]" />
              Sign in
            </button>
          </Link>
        )}
      </div>
      <div className="flex gap-[31px] font-bold text-[13px]">
        <button className=" hover:border-solid hover:border-b-8 hover:border-white">
          Home
        </button>
        <button className=" hover:border-solid hover:border-b-8 hover:border-red-500">
          News
        </button>
        <button className=" hover:border-solid hover:border-b-8 hover:border-yellow-400">
          Sport
        </button>
        <button className=" hover:border-solid hover:border-b-8 hover:border-green-400">
          Earth
        </button>
        <button className=" hover:border-solid hover:border-b-8 hover:border-blue-400">
          Reel
        </button>
        <button className=" hover:border-solid hover:border-b-8 hover:border-blue-600">
          Worklife
        </button>
        <button className=" hover:border-solid hover:border-b-8 hover:border-green-700">
          Travel
        </button>
        <button className=" hover:border-solid hover:border-b-8 hover:border-violet-600">
          Culture
        </button>
      </div>
      <div className="flex items-center pl-32">
        <button className="flex bg-slate-900 hover:bg-gray-600 gap-1 pl-2 items-center h-10 w-[198px] text-[13px] font-bold">
          <PiMagnifyingGlassBold className="text-[19px]" />
          Search BBC
        </button>
      </div>
    </div>
  );
};

export default Navbar;
