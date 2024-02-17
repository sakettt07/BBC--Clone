import React, { useEffect, useState } from "react";
import randimg from "../../public/randimg.png"

function Main_Home(props) {
  const [news, setNews] = useState([]);
  const getNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=${props.menu ?props.menu:"All"}&apiKey=c236908245c54482b8993b7af935a642`
    )
      .then((res) => res.json())
      .then((json) => setNews(json.articles));
  };
  useEffect(() => {
    getNews();
  }, [news]);
//   console.log(news);
  return (
    <div className=" grid grid-cols-3 mt-[69px] p-6">
      {news?.filter(data=>data.title.includes(props.search)).map((data) => {
        return (
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
        );
      })}
    </div>
  );
  
}

export default Main_Home;
