import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="w-screen h-auto pt-3 flex flex-col flex-wrap">
        <h2 className="w-screen h-auto flex justify-center text-[30px] ">
          WorldWire
        </h2>

        <div className="w-screen h-auto mt-5 py-2 px-10 bg-slate-500">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default Header;
