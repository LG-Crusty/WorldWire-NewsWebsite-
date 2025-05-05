import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Politics() {
  const [card1Data, setcard1Data] = useState(null);
  const [card2Data, setcard2Data] = useState(null);
  const val = useSelector((state) => state.politicsnewsData);

  useEffect(() => {
    if (val.length > 0) {
      const data = val.slice(0, 3);
      setcard1Data(data[0]);
      setcard2Data(data[1]);
    }
  }, [val]);
  if (card1Data && card2Data) {
    return (
      <div className="w-full h-auto border-b border-gray-300 mt-8 font-lora pb-8">
        <div className="w-full h-auto min-h-50 ">
          <div className="w-full h-auto  flex justify-between">
            <p></p>
            <p className="text-[45px] pl-20 uppercase font-bold"> Politics</p>
            <div className="pt-4 w-max text-sky-400">
              <p>View all {">>"} </p>
            </div>
          </div>
          <div className="w-full h-auto min-h-52 mt-5 flex flex-row flex-wrap">
            <div className="w-[50%] h-auto min-h-32  pr-12 border-r border-black">
              <div className="w-full h-auto min-h-28 ">
                <img
                  src={card1Data.imageUrl}
                  className="w-full h-[350px]"
                  alt=""
                />
                <div className="w-full h-auto flex flex-col flex-wrap text-center mt-3 ">
                  <p className="text-blue-400 uppercase">Politics</p>
                  <a href="">
                    <p className="text-[30px]">{card1Data.headline}</p>
                  </a>
                  <p>{card1Data.snippet}</p>
                  <p className="italic">{card1Data.writtenby}</p>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-auto min-h-32  pl-12">
              <div className="w-full h-auto min-h-28 ">
                <img
                  src={card2Data.imageUrl}
                  className="w-full h-[350px]"
                  alt=""
                />
                <div className="w-full h-auto flex flex-col flex-wrap text-center mt-3 ">
                  <p className="text-blue-400 uppercase">Politics</p>
                  <a href="">
                    <p className="text-[30px]">{card2Data.headline}</p>
                  </a>
                  <p>{card2Data.snippet} </p>
                  <p className="italic">{card2Data.writtenby}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Politics;
