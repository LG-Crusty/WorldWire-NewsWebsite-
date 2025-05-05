import React from "react";

function Cardsmall(value) {
  console.log(value);
  const data = value.val;
  const { id, headline, snippet, writtenby, category, imageUrl } = data;

  return (
    <div className="w-full h-auto min-h-30  font-lora">
      <img
        // src="https://fox.withemes.com/london/wp-content/uploads/sites/89/2024/07/joel-filipe-BNcdsnUNqUY-unsplash-480x384.jpg"
        src={imageUrl}
        className="w-full h-[250px]"
        alt=""
      />
      <div className="w-full h-auto mt-4 flex flex-col text-center">
        <p className="text-[16px] uppercase w-max px-2 py-1 mx-auto bg-blue-500 text-white">
          {" "}
          science
        </p>
        <a href="">
          <p className="text-[30px]">{headline}</p>
        </a>
        <p>{snippet}</p>
        <p className="uppercase italic">{writtenby}</p>
      </div>
    </div>
  );
}

export default Cardsmall;
