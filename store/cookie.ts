import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface cookieType {
  t_hash_t: string;
  t_hash: string;
  expires: string;
}
interface cookieStore {
  cookie: cookieType | null | "no need!";
  setCookie: (cookie: cookieType | "no need!") => void;
}

export const cookieStore = create<cookieStore>()(
  persist(
    (set) => ({
      cookie: null,
      setCookie: (cookie) => {
        set({ cookie: cookie });
      },
    }),
    {
      name: "cookie_store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
