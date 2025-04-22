import React from "react";

function Categories() {
  return (
      <div className=" w-auto h-auto text-black flex flex-col flex-wrap gap-y-3 realtive mt-5">
          <img className="static z-0 rounded-md "
              src="https://images.pexels.com/photos/262347/pexels-photo-262347.jpeg " alt="" />
      <p className="text-[25px] absolute z-10 ml-3">Categories</p>
      <div className="ml-4 mt-11 flex flex-wrap absolute z-10  text-sm flex-col gap-y-4 align-bottom w-max text-[16px] text-white p-2 ">
        <button >Politics</button>
        <button >Science</button>
        <button >Technology</button>
        <button >Entertainment</button>
        <button>Sports</button>
        <button >Business</button>
        <button >Health</button>
        <button>Environment</button>
      </div>
    </div>
  );
}

export default Categories;
