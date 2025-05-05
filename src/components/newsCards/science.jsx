import React, { useEffect, useState } from "react";
import Cardsmall from "./cardSmall";
import { useSelector } from "react-redux";

function Science() {
 
  const [scienceNews, setscienceNews] = useState(null);
  const val = useSelector((state) => state.sciencenewsData);
  useEffect(() => {
    val?.length > 0 ? setscienceNews(val.slice(0, 3)) : "random";
  }, [val]);
  if (scienceNews  && scienceNews.length > 0) {
    return (
      <div className="w-full h-auto pb-8 border-b border-gray-400 mb-5  flex flex-col flex-wrap gap-y-5 pt-8 ">
        <div className="w-full h-auto border-t border-gray-400 flex justify-between font-lora pt-3 ">
          <p></p>
          <p className="text-[45px] uppercase font-bold">Science</p>
          <div className="w-max h-auto pt-5 text-blue-500">
            <p>View all {">>"}</p>
          </div>
        </div>
        <div className="w-full h-auto min-h-52 grid grid-cols-[1fr_1.15fr_1fr] grid-rows-1 gap-x-px gap-y-0">
          {scienceNews.map((e, index) => {
            // Determine column index (0, 1, 2)
            const column = index % 3;

            // Apply different padding based on column
            let paddingClass = "";
            if (column === 0) paddingClass = "pr-10"; // First column
            else if (column === 1) paddingClass = "px-10"; // Second column
            else if (column === 2) paddingClass = "pl-10"; // Third column

            const borderClass = column < 2 ? "border-r border-black" : "";

            return (
              <div key={e.id} className={`${paddingClass} ${borderClass}`}>
                <Cardsmall val ={e} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Science;
