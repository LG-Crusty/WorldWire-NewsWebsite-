import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Stories() {
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
      const Data = val[5];
      const { id, headline, snippet, writtenby, category, imageUrl } = Data;
      setnewsState((prev) => ({
        ...prev,
        id: id,
        headline: headline,
        snippet: snippet,
        writtenby: writtenby,
        category: category,
        imageUrl: imageUrl,
      }));
    }
  }, [val]);
  if (newsState) {
    return (
      <div class="w-full h-[500px]  font-lora flex flex-row justify-between mt-10 ">
        <div className="w-[32.5%] h-auto  flex flex-col justify-center text-left px-3">
          <div className="w-full h-auto flex text-left">
            <p className="w-max h-auto  text-white pr-2 ">
              STORIES
            </p>
          </div>
          <a href="">
            <p className="text-[30px]">{newsState.headline}</p>
          </a>
          <p className="text-[16px] ">
            {newsState.snippet}
          </p>
          <p className="italic"> {newsState.writtenby}</p>
        </div>
        <img
          src={newsState.imageUrl}
          className="w-[71%] h-full"
          alt=""
        />
      </div>
    );
  }
}

export default Stories;
