import React, { useEffect, useState } from "react";
import randimg from "../../public/randimg.png"
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../firebase/setup";

function Main_Home(props) {
  const [news, setNews] = useState([]);

  const addNews=async(data)=>{
    const newsDoc=doc(database,"News",`${data.url.substr(-10,10)}`)
    try {
      await setDoc(newsDoc,{
        title:data.title,
        description:data.description
      })
      
    } catch (error) {
      console.log(error);
    }
  }




  const getNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=${props.menu ?props.menu:"All"}&apiKey=a56046c2b5da413fa6da857f100a1f59`
    )
      .then((res) => res.json())
      .then((json) => setNews(json.articles.slice(0,7)));
  };
  useEffect(() => {
    getNews();
  }, [news]);
  console.log(news);
  return (
    <div className=" grid grid-cols-3 mt-[69px] p-6">
      {news?.filter(data=>data.title.includes(props.search)).map((data) => {
        return (
          <Link onClick={()=>addNews(data)} to="/details" state={{data:data}}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {data.urlToImage ? (
            <img className="w-full" src={data.urlToImage} alt={data.title} />
          ) : (
            <img className="w-full" src={randimg} alt="Custom Image" />
          )}
            <div className="px-6 py-2">
              <div className="font-bold text-xl mb-2">
                {data.title}
                </div>
              <p className="text-gray-700 text-base">
                {data.content}
              </p>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
  );
  
}

export default Main_Home;
