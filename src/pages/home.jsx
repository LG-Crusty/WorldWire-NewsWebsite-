import React, { useEffect, useState } from "react";
import Cardbig from "@/components/newsCards/cardBig";
import Science from "@/components/newsCards/science";
import Stories from "@/components/newsCards/stories";
import Politics from "@/components/newsCards/politics";
import Nature from "@/components/newsCards/nature";
import Tech from "@/components/newsCards/tech";
import Footer from "@/components/footer";
import useNewsApi from "@/hooks/useNewsApi";
import { useDispatch } from "react-redux";
import {
  sethomeNews,
  setpoliticsNews,
  setscienceNews,
  settechNews,
  setwildlifeNews,
} from "../features/newsWeb/newsSlice";

function Home() {
  const dispatch = useDispatch();

  const homeNews = useNewsApi("home");
  const techNews = useNewsApi("technology");
  const scienceNews = useNewsApi("science");
  const wildlifeNews = useNewsApi("wildlife");
  const politicsNews = useNewsApi("politics");

  useEffect(() => {
    const newsConfig = {
      home: {
        data: homeNews,
        action: sethomeNews,
      },
      tech: {
        data: techNews,
        action: settechNews,
      },
      science: {
        data: scienceNews,
        action: setscienceNews,
      },
      wildlife: {
        data: wildlifeNews,
        action: setwildlifeNews,
      },
      politics: {
        data: politicsNews,
        action: setpoliticsNews,
      },
    };

    const valExtractor = (raw) =>
      raw.newsData.map((e) => ({
        id: e._id,
        headline: e.headline.main,
        snippet: e.abstract,
        imageUrl: e.multimedia.default.url,
        writtenby: e.byline.original,
        category: e.news_desk,
      }));

    Object.entries(newsConfig).forEach(([key, { data, action }]) => {
      if (data?.newsData?.length) {
        const extractedData = valExtractor(data);
        dispatch(action(extractedData));
      }
      console.log("inside useEffect");
    });
  }, [homeNews, techNews, scienceNews, wildlifeNews, politicsNews]);

  return (
    <div className="w-full h-screen flex flex-row flex-wrap gap-x-10  mt-5">
      <Cardbig />

      <Science />

      <div className="w-full h-auto pb-8 border-b border-gray-300">
        <div className="w-full px-5 h-auto min-h-80 mt-10 text-white flex flex-col pb-8  bg-black relative font-lora">
          <div className="w-full h-13 z-0  border-b border-gray-400 "></div>
          <div className=" w-max h-auto bg-black absolute top-4 pr-3 z-10 flex justify-center font-bold text-[45px]">
            STORIES
          </div>
          <Stories />
        </div>
      </div>

      <Politics />
      <Nature />
      <Tech />
      <Footer />
    </div>
  );
}

export default Home;
