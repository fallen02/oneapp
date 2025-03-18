import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { bypassUrl } from "~/providers/nfm/handlers";

export interface cookieType {
  t_hash_t: string;
  t_hash: string
  expires: string
}
interface cookieStore {
  cookie: cookieType | null;
  cookieLoading: boolean;
  setCookie: () => void;
  checkAndReplaceCookie: (cookie: cookieType | null) => void;
  removeCookie: () => void;
  setCookieLoading: (loading: boolean) => void;
}


export const cookieStore = create<cookieStore>() (
  persist((set) =>({
    cookie: null,
    cookieLoading: false,
    setCookie: async () => {
      const newCookie = await bypassUrl()
      set({ cookie: newCookie })
    },
    checkAndReplaceCookie: async (cookie: cookieType | null) => {
      console.log('cookie expired')
      if(!cookie || Math.floor((new Date(cookie.expires).getTime() - new Date().getTime())/(1000 * 60 * 60)) < 1){
        set({cookieLoading: true})
        
        const newCokkie = await bypassUrl()
        set({cookie: newCokkie, cookieLoading: false})
      }
      
    },
    removeCookie: () => set({ cookie: null }),
    setCookieLoading: (loading: boolean) => set({ cookieLoading: loading }),
  }),
  {
    name: 'cookie_store',
    storage: createJSONStorage(() => AsyncStorage)
  })
)

