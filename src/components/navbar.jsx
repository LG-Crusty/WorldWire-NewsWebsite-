import React from "react";
import "boxicons";
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom";

function Navbar() {
  


  return (
    <>
      <div className="w-auto h-auto flex flex-wrap flex-row justify-between">
        <div className="w-auto h-auto flex flex-wrap flex-row gap-x-20 text-white ">
          <button className=" hover:scale-125 transition-transform duration-300 ">Home</button>
          <button className=" hover:scale-125 transition-transform duration-300 ">About</button>
          <button className=" hover:scale-125 transition-transform duration-300 ">Categories</button>
          <button className=" hover:scale-125 transition-transform duration-300 ">Trending</button>
        </div>

        <div className="w-auto h-auto px-5 py-2 flex flex-wrap flex-row gap-x-10">
          <input type="text" placeholder="politics"
          className="bg-white rounded-md h-auto p-1 border-2 border-black"/>
          <button className=" border-2 border-white rounded-full py-1 px-1 flex justify-center hover:scale-125 transition-transform duration-300" >
            <i className="bx bxs-moon text-[20px] "></i>
          </button>
          <button  className="hover:scale-125 transition-transform duration-300 border-2 border-white rounded-full p-1 flex flex-wrap justify-center" >
            <i className="bx bxs-user text-[20px]"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
