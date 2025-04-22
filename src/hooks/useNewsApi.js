import React, { useEffect, useState } from "react";
import axios from "axios";
const apiValue = import.meta.env.VITE_API_KEY;
import dayjs from "dayjs";

function UseNewsApi(query) {
  const [newsData, setNewsData] = useState(null);
  console.log("you are inside the function"
  )
  
  useEffect(()=>{
    console.log("useEffect is working")
    const data = async () => {
      try {
        const val = await axios.get(
          "https://api.nytimes.com/svc/search/v2/articlesearch.json",
          {
            params: {
              q: query,
              // begin_date: formattedDate,
              "api-key": apiValue,
            },
          }
        );
        console.log(val.data);
        setNewsData(val.data.response.docs);
      } catch (error) {
        console.log(`the error is ${error}`);
        setNewsData("nothing");
      }

    };
    data()
    return ;
  }, []);

  return newsData;
}

export default UseNewsApi;
