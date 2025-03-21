import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { Button } from "./ui/button";
import { ShowDetailsType } from "~/lib/types";
import { Link, useRouter } from "expo-router";
import { Search } from "~/lib/icons/Search";
import { ArrowLeft } from "~/lib/icons/ArrowLeft";

export const MovieDetails = ({
  data,
  id,
}: {
  data: ShowDetailsType;
  id: string;
}) => {
  const router = useRouter()
  return (
    <View className="relative w-full h-full flex flex-col gap-3 p-2 z-0">
      <View className="absolute top-[10px] px-5 w-full flex flex-row justify-between items-center pb-5 z-10">
        <ArrowLeft onPress={() => router.back()} className="text-foreground" />
        <Search onPress={() => console.log("Hi")} className="text-foreground" />
      </View>
      <Image
        source={{ uri: `https://imgcdn.media/poster/v/${id}.jpg` }}
        className="w-full h-[30%] "
        resizeMethod="scale"
        resizeMode="cover"
      />

      <View className="flex flex-col w-full p-3 gap-2">
        <Text className="text-foreground text-3xl font-archivoBold">
          {data.title}
        </Text>
        <View className="flex flex-row w-screen gap-5">
          <View className="flex flex-row gap-3 items-center">
            <Text className="text-gray-100 bg-red-600/60 px-1.5 py-0.5 rounded-full font-opensansMid">
              {data.hdsd}
            </Text>
            <Text className="text-gray-100 bg-green-600/50 px-1.5 py-0.5 rounded-full font-opensansMid">
              {data.runtime}
            </Text>
            <Text className="text-gray-100 bg-gray-600/30 px-1.5 py-0.5 rounded-full font-opensansMid">
              {data.year}
            </Text>
            <Text className="text-gray-100 bg-gray-600/30 px-1.5 py-0.5 rounded-full font-opensansMid">
              {data.ua}
            </Text>
          </View>
          <Button className="rounded-2xl" variant={"destructive"}>
            <Text className="text-xl text-white font-opensansBold">
              Watch Now
            </Text>
          </Button>
        </View>
        <Text className="text-foreground text-xl font-opensansBold">
          Synopsis
        </Text>
        <Text className="text-foreground text-base font-opensansReg">
          {data.desc}
        </Text>
        <Text className="text-foreground text-xl font-opensansBold">Cast</Text>
        <Text className="text-foreground text-base font-opensansReg">
          {data.short_cast}
        </Text>
      </View>

      <View className="flex flex-col gap-1 p-3 h-80 w-full">
        <Text className="text-xl text-foreground font-archivoBold">
          Related Shows
        </Text>
        <FlatList
          data={data.suggest}
          renderItem={({ item }) => (
            <Link href={`/movie/${item.id}`} className="w-fit mx-2" asChild>
              <TouchableOpacity className="relative w-[166px] m-4 rounded-lg overflow-hidden bg-gray-800">
                <Image
                  source={{
                    uri: `https://imgcdn.media/poster/v/${item.id}.jpg`,
                  }}
                  className="w-full h-[233px] rounded-t-lg"
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </Link>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
