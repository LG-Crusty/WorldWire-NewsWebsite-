import { useEffect, useState } from "react";
import axios from "axios";
const apiValue = import.meta.env.VITE_API_KEY;

function useNewsApi(query) {
  const [newsData, setNewsData] = useState([]);
  const data = async () => {
    try {
      const val = await axios.get(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        {
          params: {
            q: query,
            "api-key": apiValue,
          },
        }
      );
      const reqData = val.data.response;
      if (reqData)
      { setNewsData(reqData); }
     ;
    } catch (error) {
      console.log(`the ERROR is ${error}`);
      return;
    }
  };

  useEffect(() => {
    data();
  }, [query]);

  return { newsData };
}

export default useNewsApi;
