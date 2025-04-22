import React from "react";
import Cardbig from "@/components/newsCards/cardBig";
import Cardsmall from "@/components/newsCards/cardSmall";
import Categories from "@/components/newsCards/categories";
import Newsletter from "@/components/newsCards/newsletter";
import Trending from "@/components/newsCards/trending";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setNews } from "@/features/newsWeb/newsSlice";
import UseNewsApi from "@/hooks/useNewsApi";
  
function Home() {
  const addNews = useDispatch();
  // const query = "home";
  const reqData = UseNewsApi("home");
  console.log(reqData)

  reqData.response.docs.map((e) => {
    console.log(e);
    addNews(
      setNews(
        e._id,
        e.headline.main,
        e.abstract,
        e.byline.original,
        e.multimedia.default.url
      )
    );
  });

  const numArr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-auto h-auto text-white mt-10 ml-3 p-3 relative ">
      <Cardbig />

      <div className="w-[750px] h-auto  mt-10 px-2 py-1 flex flex-row flex-wrap justify-between border-black border-2">
        <p className="text-[25px] text-black ">LatestNews</p>
        <button className="text-[25px] text-black w-max h-auto bg-blue-400 px-2 py-1 border-2 rounded-[10px] border-blue-700">
          ViewAll
        </button>
      </div>

      <div className="w-[830px] h-auto p-2 flex flex-row flex-wrap gap-x-5 ">
        {numArr.map((e) => {
          return <Cardsmall key={e} />;
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
