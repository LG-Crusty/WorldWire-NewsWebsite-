import React from "react";
import Navbar from "./navbar";
import Cardbig from "./newsCards/cardBig";
import Science from "./newsCards/science";
import { Car } from "lucide-react";

function Header() {
  return (
    <>
      <div className="w-full h-auto pt-2 flex flex-col flex-wrap bg-white">
        <div className="w-full h-auto px-28 text-black flex flex-row flex-wrap justify-between border-b-1 border-b-gray-300">
          <button className="text-[25px]">
            <i class="bx bx-search"></i>
          </button>
          <button className="text-[25px]">
            <i class="bx bx-menu"></i>
          </button>
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default Header;
