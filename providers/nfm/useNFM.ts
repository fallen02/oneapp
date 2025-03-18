import { useEffect, useState } from "react";
import { cookieStore, cookieType } from "~/store/cookie";
import { fianalMainPageContentTyps, getMainPageData } from "./handlers";

const useNFM = () => {
  const [data, setData] = useState<fianalMainPageContentTyps[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  const { cookie } = cookieStore();
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
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  const refetch = () => fetchData();

  return { data, dataLoading, refetch };
}

export default useNFM