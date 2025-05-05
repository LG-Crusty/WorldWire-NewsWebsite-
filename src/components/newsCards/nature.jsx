import React,{useState, useEffect} from "react";
import { useSelector } from "react-redux";

function Nature() {
  const [data, setData] = useState(null)
  const val = useSelector((state) => state.wildlifenewsData);
  useEffect(() => {
    if (val.length > 0) {
       setData(val[2])
   }
 }, [val])
  if (data) {
    return (
      <div className="w-full h-auto pb-5 border-b border-gray-300">
        <div className="w-full h-auto min-h-52 bg-green-950 mt-10 p-5 font-lora text-white">
          <div class="w-full h-[500px]  font-lora flex flex-row justify-between ">
            <img
              src={data.imageUrl}
              className="w-[68.35%] h-full"
              alt=""
            />
            <div className="w-[31.65%] h-auto ml-7 flex flex-col justify-center text-center px-3">
              <div className="w-full h-auto flex text-left">
                <p className="w-full h-auto flex justify-center  text-white pr-2 ">
                  STORIES
                </p>
              </div>
              <a href="">
                <p className="text-[30px]">{data.headline}</p>
              </a>
              <p className="text-[16px] ">
                {data.snippet}              </p>
              <p> {data.writtenby}</p>
            </div>
          </div>
        </div>
      </div>
    )
  } 
} 

export default Nature;
