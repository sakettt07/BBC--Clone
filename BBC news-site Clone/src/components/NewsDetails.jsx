import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import randimg from "../../public/randimg.png"


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
      <div className="  h-screen w-full">
        <h1 className="p-28 pb-9 font-semibold text-5xl leading-[-50px]">
          {location.state.data.title}
        </h1>
        <h4 className=" text-right pr-44 mt-[-49px] text-[20px] text-gray-600">~{location.state.data.author}</h4>
        <div className="p-12 pl-16 pr-16 w-full overflow-hidden"><img className="w-full rounded-[30px] p-3 h-[23rem] object-cover" src={location.state.data.urlToImage} /></div>
        <p className="p-12 mt-[-56px] text-[20px] font-semibold">{location.state.data.description}</p>
      </div>
    </>
  );
};

export default NewsDetails;
