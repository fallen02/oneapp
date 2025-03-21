import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "~/components/ui/button";
import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { cookieStore } from "~/store/cookie";
import { getSeasonData } from "~/helper/nfm/functions";
import { useEffect, useState } from "react";
import { ShowSeasonType } from "~/lib/types";

export default function MovieScreen() {
  const { id } = useLocalSearchParams();
  const { cookie } = cookieStore();
  const [data, setData] = useState<ShowSeasonType | null>(null);

  const getDetails = async () => {
    try {
      if (!cookie) return;

      const response = await getSeasonData(
        cookie || "no need!",
        Array.isArray(id) ? id[0] : id
      );
      console.log(response);
      if (response) setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <SafeAreaView>
      <Button onPress={() => console.log(data)}>
        <Text>Click</Text>
      </Button>
    </SafeAreaView>
  );
}
