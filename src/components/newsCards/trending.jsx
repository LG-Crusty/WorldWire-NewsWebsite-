import React from "react";
import "boxicons";

function Trending() {
  return (
    <div className="w-auto h-auto bg-black text-white flex flex-col flex-wrap gap-y-3 p-2">
      <div className="w-auto h-auto flex flex-row flex-wrap gap-x-3 ">
        <i className="bx bx-trending-up text-[20px]"></i>
        <p className="text-[20px]">Trending Now </p>
      </div>

      {/* {use map for further development} */}
      <div className="w-max h-auto flex flex-col flex-wrap gap-y-2 ml-5 mb-3 border-2 border-white p-2" >
        <input type="text" className="p-1" value={"random user one"} />
        <input type="text" className="p-1" value={"random user two"} />
        <input type="text" className="p-1" value={"random user three"} />
        <input type="text" className="p-1" value={"random user four"} />
      </div>
    </div>
  );
}

export default Trending;
