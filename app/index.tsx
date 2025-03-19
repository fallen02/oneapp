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
import { NotificationBing } from "~/lib/icons/NotificationBing";
import { Search } from "~/lib/icons/Search";
import logo from "~/assets/images/logo.png";
import { Skeleton } from "~/components/ui/skeleton";
import { SkeletonHome } from "~/components/SkeletonHome";

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
              <View className="flex flex-row justify-between items-center pb-5">
                <View>
                  <Image
                    source={logo}
                    resizeMode="contain"
                    className="h-8 w-auto"
                  />
                </View>
                <View className="flex flex-row gap-6">
                  <Search
                    onPress={() => console.log("pressed")}
                    className="text-foreground"
                  />
                  <NotificationBing className="text-foreground" />
                </View>
              </View>
            </View>
          )}
          ListEmptyComponent={() => (
            <View className="h-screen">
              <SkeletonHome />
            </View>
          )}
          refreshControl={
            <RefreshControl refreshing={refresing} onRefresh={handleRefresh} />
          }
        />
      </MotiView>
    </SafeAreaView>
  );
}
