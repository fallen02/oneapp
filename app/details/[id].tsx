import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { MotiView } from "moti";
import { getFullDetails } from "~/providers/nfm/handlers";
import { cookieStore } from "~/store/cookie";
import { SkeletonDetails } from "~/components/SkeletonDetails";
import { MovieDetails } from "~/components/MovieDetails";
import { ShowDetailsType } from "~/lib/types";

export default function MovieScreen() {
  const { cookie } = cookieStore();
  const { id } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ShowDetailsType | null>(null);

  const getDetails = async () => {
    try {
      if (!cookie) return;
      setLoading(true);
      const response = await getFullDetails({
        id: Array.isArray(id) ? id[0] : id,
        cookie: cookie || "no need!",
      });
      setData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDetails();
  }, [id]);

  return (
    <SafeAreaView className="w-fullh-full">
      <MotiView>
        {!data ? (
          <SkeletonDetails />
        ) : (
          <MovieDetails data={data} id={Array.isArray(id) ? id[0] : id} />
        )}
      </MotiView>
    </SafeAreaView>
  );
}
