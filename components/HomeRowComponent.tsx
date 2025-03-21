import { Text } from "./ui/text";
import {
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { finalMainPageContentDataTypes } from "~/lib/types";

export const HomeRowComponents = ({
  heading,
  data,
}: {
  heading: string;
  data: finalMainPageContentDataTypes[];
}) => {
  return (
    <View className="flex flex-col gap-1 h-80 w-full">
      <Text className="text-xl font-archivoBold">{heading}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Link href={`/details/${item.id}`} className="w-fit mx-2" asChild>
            <TouchableOpacity className="relative w-[166px] m-4 rounded-lg overflow-hidden bg-gray-800">
              <Image source={{ uri: item.poster }} className="w-full h-[233px] rounded-t-lg"  resizeMode="cover"/>
              <Text className="absolute top-[5px] right-[5px] font-opensansReg font-semibold bg-slate-700/50 px-1.5 py-1 rounded-full">{item.ua}</Text>
              <Text className="absolute top-[5px] left-[5px] font-opensansReg font-semibold bg-slate-700/50 px-1.5 py-1 rounded-full">{item.type === 't' ? 'TV' : 'Movie'}</Text>
              <Text className="absolute bottom-[5px] left-[5px] font-opensansReg font-semibold bg-red-700/50 px-1.5 py-1 rounded-full">{item.quality}</Text>
            </TouchableOpacity>
          </Link>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator = {false}
      />
    </View>
  );
};
