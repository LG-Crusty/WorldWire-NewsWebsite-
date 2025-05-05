import React from "react";
import "boxicons";

function Navbar() {
  
  return (
    <>
      <div className="w-full h-auto p-1 border-b-2 border-gray-300 flex flex-wrap flex-row justify-between">
        <button className="font-lora text-[30px]">WORLDWIRE</button>
        <div className="w-auto h-auto text-black px-1 text-[17px] font-raleway uppercase flex flex-row flex-wrap gap-x-12 ">
          <button className="border-r-2 border-gray-300 pr-6">Home</button>
          <button className="border-r-2 border-gray-300 pr-6">About</button>
          <button className="border-r-2 border-gray-300 pr-6">Categories</button>
          <button className="border-r-2 border-gray-300 pr-6">Trending</button>
          <button>NewsLetter</button>
        </div>
        <div className="w-auto h-auto ml-5 mt-2 text-[30px] text-gray-400 flex flex-row flex-wrap gap-x-3 align-middle">
          <i className="bx bxl-meta  hover:text-black"></i>
          <i class="bx bxl-twitter  hover:text-black"></i>
          <i class="bx bxl-instagram  hover:text-black"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
