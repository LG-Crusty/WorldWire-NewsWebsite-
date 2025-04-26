import React from "react";

function Cardbig(val) {
  console.log(val)
  const random = Object.values(val);
  const data = random[0];
  const {headline, snippet, newsDesk, imageUrl, writtenby} = data;

  return (
    <a
      href="#"
      class=" w-[1300px] flex flex-col items-center h-[500px]  bg-black border-gray-200 rounded-lg shadow-sm md:flex-row  p-5 t hover:scale-105 transition-transform duration-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ml-5"
    >
      <img
        class="w-[480px] border-2 border-white rounded-t-lg h-[470px] md:rounded-none md:rounded-s-lg"
        src={imageUrl}
        alt=""
      />
      <div class="flex flex-col flex-wrap px-4 py-2 w-auto h-auto ml-2 gap-y-5 mt-3 ">
        <p className="w-max h-auto inline-block bg-blue-800 text-white border-1 rounded-md px-2 py-1z ">
          {newsDesk}
        </p>
        <p class="mb-2 text-[40px] font-bold tracking-tight text-white dark:text-white">
          {headline}
        </p>
        <p class="mb-3 text-[18px] text-white dark:text-gray-400">
          {snippet}
        </p>
        <div className="w-auto h-auto flex flex-row flex-wrap gap-x-5">
          <p>8min Read</p>
          <p>{writtenby}</p>
        </div>
        <button className="w-auto h-auto bg-violet-900 py-3 rounded-lg">
          Read Full Story
        </button>
      </div>
    </a>
  );
}

export default Cardbig;
