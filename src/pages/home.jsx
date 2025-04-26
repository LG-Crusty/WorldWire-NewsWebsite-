import React, { useEffect, useState } from "react";
import Cardbig from "@/components/newsCards/cardBig";
import Cardsmall from "@/components/newsCards/cardSmall";
import Trending from "@/components/newsCards/trending";
import Newsletter from "@/components/newsCards/newsletter";
import Categories from "@/components/newsCards/categories";
import { useSelector, useDispatch } from "react-redux";
import { setNews } from "@/features/newsWeb/newsSlice";
import useNewsApi from "@/hooks/useNewsApi";

function Home() {
  const dispatch = useDispatch();
  const {newsData} = useNewsApi("home");

  useEffect(() => {
     if (newsData?.docs && newsData.docs.length > 0) {
       const valNews = newsData.docs.map((e) => {
         return {
           id: e._id,
           headline: e.headline.main,
           snippet: e.abstract,
           writtenby: e.byline.original,
           imageUrl: e.multimedia.default.url,
           newsDesk: e.news_desk,
         };
       });
       dispatch(setNews(valNews));
     }
  }, [newsData]);

  const newsVal = useSelector((state) => state.newsData);
  const cSmallNews = newsVal.slice(1, newsVal.length - 3);

  return (

    <div className="w-auto h-auto text-white mt-10 ml-3 p-3 relative ">
      <Cardbig val={newsVal[0] } />

      <div className="w-[750px] h-auto  mt-10 px-2 py-1 flex flex-row flex-wrap justify-between border-black border-2">
        <p className="text-[25px] text-black ">LatestNews</p>
        <button className="text-[25px] text-black w-max h-auto bg-blue-400 px-2 py-1 border-2 rounded-[10px] border-blue-700">
          ViewAll
        </button>
      </div>

      <div className="w-[830px] h-auto p-2 flex flex-row flex-wrap gap-x-5 ">
        {cSmallNews.map((e) => {
          return <Cardsmall key={e.id} />;
        })}
      </div>

      <div className=" w-[520px] h-auto absolute right-0 top-[550px] p-3 bg-red-600 mr-5 ">
        <Trending />
        <Categories />
        <Newsletter />
      </div>
    </div>
  );
}
export default Home;
