import { useEffect, useState } from "react";
import { cookieStore, } from "~/store/cookie";
import { fianalMainPageContentTyps, getMainPageData } from "./handlers";

interface responseType{
  hhh: string
}

export const useNFMFetchDetails = <T>(fetchFunction: () => Promise<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
  // if(!cookie) setCookie()
  const fetchData = async () => {
    

    try {
      setLoading(true);
      const response = await fetchFunction()
      setData(response)
      
    } catch (error) {
      console.error(error); 
      return
    } finally {
        setLoading(false)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

//   const refetch = () => fetchData();

  return { data, loading, redetch: fetchData };
}
