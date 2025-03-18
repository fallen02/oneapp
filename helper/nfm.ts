import { bypassUrl } from "~/providers/nfm/handlers"
import { cookieStore, cookieType } from "~/store/cookie"

export const checkAndReplaceCookie= async (cookie: cookieType | null) => {
  const {setCookie, setCookieLoading, removeCookie} = cookieStore()
  if(!cookie || Math.floor((new Date(cookie.expires).getTime() - new Date().getTime())/(1000 * 60 * 60)) < 1){
    removeCookie()
    setCookieLoading(true)
    console.log("Cookie state")
    const newCokkie = await bypassUrl()
    if(!newCokkie){
      setCookieLoading(false)
      return
    }
    setCookie()
    console.log("Cookie state2")
    
    setCookieLoading(false)
  }
  
}