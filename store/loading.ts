import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from '~/components/ui/text';

type Store = {
  loading: boolean
  changeLoading: (boolean: boolean) => void
}

export const useLoadingStore = create<Store>()(

    (set) => ({
      loading: false,
      changeLoading: (boolean) => set({ loading: boolean }),
    }),
  
)