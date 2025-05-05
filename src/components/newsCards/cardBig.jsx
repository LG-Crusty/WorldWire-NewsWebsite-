import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Cardbig() {
  const [newsState, setnewsState] = useState({
    id: null,
    headline: null,
    snippet: null,
    imageUrl: null,
    writtenby: null,
    category: null,
  });
  const val = useSelector((state) => {
    return state.homenewsData;
  });

  useEffect(() => {
    if (val.length > 0) {
      const Data = val[0];
      const { id, headline, snippet, writtenby, category, imageUrl } = Data;
      setnewsState((prev) => ({
        ...prev,
        id: id,
        headline: headline,
        snippet: snippet,
        writtenby: writtenby,
        category: category,
        imageUrl: imageUrl
      }));
    }
  }, [val]);

  return (
    <div class="w-full h-[450px]  font-lora flex flex-row justify-between ">
      <div className="w-[32.5%] h-auto  flex flex-col justify-center text-center px-3">
        <div className="w-full h-auto flex justify-center">
          <p className="w-max h-auto bg-sky-600 text-white px-2 py-1">
            {newsState ? newsState.category : "no data"}
          </p>
        </div>
        <a href="">
          <p className="text-[30px]">
            {newsState ? newsState.headline : "no data"}
          </p>
        </a>
        <p className="text-[16px] ">
          {newsState ? newsState.snippet : "no data"}
        </p>
        <p className="italic">{newsState ? newsState.writtenby : "no data"}</p>
      </div>
      <img
        src={newsState ? newsState.imageUrl : "no data"}
        className="w-[68.5%] h-full"
        alt=""
      />
    </div>
  );
}
export default Cardbig;
