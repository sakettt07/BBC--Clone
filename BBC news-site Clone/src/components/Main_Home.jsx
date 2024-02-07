import React, { useEffect, useState } from "react";

function Main_Home() {
  const [news, setNews] = useState([]);
  const getNews = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=All&apiKey=c236908245c54482b8993b7af935a642"
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
      {news.map((data) => {
        return (
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={data.urlToImage} alt="Sunset in the mountains" />
            <div className="px-6 py-2">
              <div className="font-bold text-xl mb-2">{data.title}</div>
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
