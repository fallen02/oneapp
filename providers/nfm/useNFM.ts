import { useEffect, useState } from "react";
import { cookieStore, cookieType } from "~/store/cookie";
import { fianalMainPageContentTyps, getMainPageData } from "./handlers";

export const useNFM = () => {
  const [data, setData] = useState<fianalMainPageContentTyps[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  const { cookie,  } = cookieStore();
  // if(!cookie) setCookie()
  const fetchData = async () => {
    try {
      setDataLoading(true);
      if (cookie) {
        const res = await getMainPageData(cookie);
        if (Array.isArray(res)) {
          setData(res);
        }
      }
    } catch (error) {
      console.error(error); 
    } finally {
      setDataLoading(false);
      
      console.log("Data fetched successfully");
      
    }
  }
  useEffect(() => {
    console.log('ha')
    fetchData();
  }, [])

  const refetch = () => fetchData();

  return { data, dataLoading, refetch };
}
