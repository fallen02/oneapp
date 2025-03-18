import * as React from "react";
import { View } from "react-native";
import Animated, {
  FadeInUp,
  FadeOutDown,
  LayoutAnimationConfig,
} from "react-native-reanimated";
import { Info } from "~/lib/icons/Info";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Text } from "~/components/ui/text";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { useLoadingStore} from "~/store/loading";
import { cookieStore } from "~/store/cookie";
import { useEffect } from "react";
import { bypassUrl, checkCookie } from "~/providers/nfm/handlers";
import useNFM from "~/providers/nfm/useNFM";
import { getMainPageData } from "~/providers/nfm/handlers";

const GITHUB_AVATAR_URI =
  "https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg";

export default function Screen() {
  const { cookie, checkAndReplaceCookie, setCookie, cookieLoading } = cookieStore()
  const { loading } = useLoadingStore()
  const { data: mainPageData, dataLoading } = useNFM()
  useEffect(() => {
    if (!cookie) {
      setCookie()
    }
    checkAndReplaceCookie(cookie);
  }, [cookie]);
const handleClick = () => {
  console.log(mainPageData);
}
  return (
    <View className="flex-1 flex-col justify-center items-center gap-5 p-6 bg-secondary/30">
      <Text className="text-2xl font-bold">
      {
       cookieLoading ? "Loading..." : "Welcome back!"
      }
      </Text>
      <Button variant={'destructive'} onPress = {handleClick}>
        <Text>{ dataLoading ? "Loading..." : "Click me!" }</Text>
      </Button>
      
    </View>
  );
}
