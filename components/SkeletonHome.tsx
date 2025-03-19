import { View } from "react-native";
import { Skeleton } from "~/components/ui/skeleton";

export function SkeletonHome() {
  return (
    <View className="w-full h-full flex items-center flex-col justify-between">
      <Skeleton className="h-[30%] w-full rounded-xl" />
      <Skeleton className="h-8 w-full rounded-full" />
      <View className="flex max-w-full justify-between flex-row gap-2">
        <Skeleton className="h-36 w-[8rem]  rounded-xl" />
        <Skeleton className="h-36 w-[8rem]  rounded-xl" />
        <Skeleton className="h-36 w-[8rem]  rounded-xl" />
      </View>
      <Skeleton className="h-8 w-full justify-between rounded-full" />
      <View className="flex max-w-full flex-row gap-2">
        <Skeleton className="h-36 w-[8rem]  rounded-xl" />
        <Skeleton className="h-36 w-[8rem]  rounded-xl" />
        <Skeleton className="h-36 w-[8rem]  rounded-xl" />
      </View>
      <Skeleton className="h-8 w-full rounded-full" />
      <View className="flex max-w-full flex-row gap-2">
        <Skeleton className="h-36 w-[8rem]  rounded-xl" />
        <Skeleton className="h-36 w-[8rem]  rounded-xl" />
        <Skeleton className="h-36 w-[8rem]  rounded-xl" />
      </View>
    </View>
  );
}
