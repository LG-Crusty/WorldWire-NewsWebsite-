import React from "react";
import { useSelector } from "react-redux";

function Tech() {
  const val = useSelector((state) => state.technologynewsData);
  if (val && val.length > 0) {
    return (
      <div className="w-full h-auto pb-3 min-h-52 mt-10 ">
        <div className="w-full h-auto  min-h-50 flex flex-col flex-wrap ">
          <div className="w-full h-auto  flex justify-between ">
            <p></p>
            <p className="font-bold text-[45px] pl-10 font-lora">TECH</p>
            <p className="pt-5">View all {">>"}</p>
          </div>
          <div className="w-full h-[910px] mt-5 flex flex-row  ">
            <div className="w-[68.35%] h-full  pr-10">
              <div className="w-full h-full">
                <img src={val[2].imageUrl} className="w-full h-[70%] " alt="" />
                <div className="w-full h-[26%]  mt-1 flex flex-col flex-wrap text-center">
                  <div className="w-full h-auto flex justify-center">
                    <p className="w-max bg-blue-500 text-white px-[4px] py-[1px] tracking-[2.5px] uppercase">
                      Tech
                    </p>
                  </div>
                  <a href="">
                    <p className="text-[37px] px-20 font-bold font-eb-garamond">
                      {val[2].headline}
                    </p>
                  </a>
                  <p className="text-[16px] px-32">{val[2].snippet}</p>
                  <p className="italic">{val[2].writtenby}</p>
                </div>
              </div>
            </div>
            <div className="w-[31.65%] h-full pl-10 border-l border-gray-300">
              <div className="w-full h-[50%] pb-5 ">
                <div className="w-full h-full">
                  <img
                    src={val[3].imageUrl}
                    className=" w-full h-[226px]"
                    alt=""
                  />
                  <div className="w-full h-auto flex flex-col">
                    <a href="">
                      <p
                        className="text-[27px] pr-[12px] font-semibold
 font-eb-garamond"
                      >
                        {val[3].headline}
                      </p>
                    </a>
                    <p>{val[3].snippet}</p>
                    <p className="italic">{val[3].writtenby}</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[50%] pt-5">
                <div className="w-full h-full ">
                  <img
                    src={val[6].imageUrl}
                    className=" w-full h-[226px]"
                    alt=""
                  />
                  <div className="w-full h-auto flex flex-col">
                    <a href="">
                      <p
                        className="text-[27px] pr-[12px] font-semibold
 font-eb-garamond"
                      >
                        {val[6].headline}
                      </p>
                    </a>
                    <p>{val[6].snippet}</p>
                    <p className="italic">{val[6].writtenby}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tech;
