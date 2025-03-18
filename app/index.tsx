import * as React from "react";
import { View, RefreshControl, Image } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { cookieStore } from "~/store/cookie";
import { useEffect } from "react";
import { useNFM } from "~/providers/nfm/useNFM";
import { MotiView } from "moti";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";
import { HomeRowComponents } from "~/components/HomeRowComponent";
import { Home } from "~/lib/icons/Home";


// import { checkAndReplaceCookie } from "~/helper/nfm";

export default function Screen() {
  const { cookie, refreshCookie, cookieLoading, setCookie } = cookieStore();
  const { data: mainPageData, dataLoading, refetch } = useNFM();
    
  

  const [refresing, setRefresing] = React.useState<boolean>(false);
  useEffect(() => {
    setCookie();
  }, [cookie]);

  const handleRefresh = async () => {
    setRefresing(true);
    await refetch();
    setRefresing(false);
  };

  return (
    <SafeAreaView>
      <MotiView className="p-5">
        <FlatList
          data={mainPageData}
          keyExtractor={({ heading }) => heading}
          renderItem={({ item }) => (
            <HomeRowComponents heading={item.heading} data={item.data} />
          )}
          ListHeaderComponent={() => (
            <View>
              <View className="flex flex-row justify-between items-center">
                <View>
                  <Text>Two</Text>
                </View>
                <View className="flex flex-row gap-5">
                  {/* <Svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    
                  >
                    <Path
                      d="M11.5 2C16.75 2 21 6.25 21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 7.8 4.11 4.6 7.2 3.03"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <Path
                      d="M22 22L20 20"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </Svg> */}
                  <Home className="text-foreground" />
                </View>
              </View>
            </View>
          )}
          ListEmptyComponent={() => <Text>Empty</Text>}
          refreshControl={
            <RefreshControl refreshing={refresing} onRefresh={handleRefresh} />
          }
        />
      </MotiView>
    </SafeAreaView>
  );
}
