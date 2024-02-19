import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
// import randimg from "../../public/randimg.png"


const NewsDetails = () => {
  const data = [
    {
      title: "location.state.data.title",
      img: "urlToImage",
      author: "data.author",
      content: "data.content",
    },
  ];
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Navbar />
      <div className="flex h-screen w-full">
        <div className=" w-[60%]">
          <h1 className="pl-14 pt-24 text-[47px] font-bold leading-tight">{location.state.data.title}</h1>
          <p className="pl-14 pt-8 text-[24px]">{location.state.data.description}</p>
          <img className="pl-14 w-[90%] h-[52%] object-cover rounded-s-full rounded-full pt-8" src={location.state.data.urlToImage} alt="" />
        </div>
        <div className="bg-yellow-600 w-[50%]"></div>
      </div>
    </>
  );
};

export default NewsDetails;
