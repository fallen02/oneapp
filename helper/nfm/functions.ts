import { getMainPageData, getOnlySeasonData } from "~/providers/nfm/handlers";
import { cookieType } from "~/store/cookie";

export const fetchHomeData = async (cookie: cookieType | "no need!") => {
  try {
    if (cookie) {
      const res = await getMainPageData(cookie);
      if (Array.isArray(res)) {
        return res
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export const getSeasonData = async(cookie: cookieType | 'no need!', id: string) => {
  try{
    if(cookie){
      const res = await getOnlySeasonData({cookie, id})
      return res
    }
  }catch(error){
    if(error) return null
  }
}
