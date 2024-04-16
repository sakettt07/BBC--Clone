import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Comments from "./Comments";
import randimg from "/randimg.png";

const NewsDetails = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row bg-pink-700 min-h-screen w-full">
        <div className=" md:w-[60%]">
          <h1 className="md:pl-14 pr-3 md:pt-24 pt-20 pl-10 w-full text-[28px] md:text-[47px] font-bold leading-tight">
            {location.state.data.title}
          </h1>
          <p className="md:pl-14 pr-5 pl-10 pt-3 md:pt-8 md:text-[24px]">
            {location.state.data.description}
          </p>
          {location.state.data.urlToImage ? (
            <img
              className="md:pl-14 md:w-[90%] h-[52%] md:rounded-lg object-cover pt-8"
              src={location.state.data.urlToImage}
              alt=""
            />
          ) : (
            <img
              className="md:pl-14 md:w-[90%] h-[52%] md:rounded-lg object-cover pt-8"
              src={randimg}
              alt=""
            />
          )}
        </div>
        <div className=" pt-1 md:mt-[80px] md:w-[45%]">
          <Comments url={location.state.data.url} />
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
