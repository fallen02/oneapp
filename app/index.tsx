import {useState} from "react";
import { View, RefreshControl, Image, FlatList } from "react-native";
import { cookieStore } from "~/store/cookie";
import { useEffect } from "react";
import { useNFM } from "~/providers/nfm/useNFM";
import { MotiView } from "moti";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeRowComponents } from "~/components/HomeRowComponent";
import { NotificationBing } from "~/lib/icons/NotificationBing";
import { Search } from "~/lib/icons/Search";
import logo from "~/assets/images/logo.png";
import { SkeletonHome } from "~/components/SkeletonHome";

export default function Screen() {
  const { cookie, setCookie } = cookieStore();
  // const { data: mainPageData,  refetch } = useNFM();

 const mainPageData =  [
    {
        "heading": "Top 10 Series in Netflix Today",
        "data": [
            {
                "id": "81476853",
                "title": "Dabba Cartel",
                "poster": "https://imgcdn.media/poster/v/81476853.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81756069",
                "title": "Adolescence",
                "poster": "https://imgcdn.media/poster/v/81756069.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80059015",
                "title": "Crime Patrol",
                "poster": "https://imgcdn.media/poster/v/80059015.jpg",
                "year": "2025",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81681535",
                "title": "When Life Gives You Tangerines",
                "poster": "https://imgcdn.media/poster/v/81681535.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81290872",
                "title": "Khakee: The Bihar Chapter",
                "poster": "https://imgcdn.media/poster/v/81290872.jpg",
                "year": "2022",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81040344",
                "title": "Squid Game",
                "poster": "https://imgcdn.media/poster/v/81040344.jpg",
                "year": "2021",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81971071",
                "title": "Black Warrant",
                "poster": "https://imgcdn.media/poster/v/81971071.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81663325",
                "title": "SAKAMOTO DAYS",
                "poster": "https://imgcdn.media/poster/v/81663325.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81956912",
                "title": "The First Frost",
                "poster": "https://imgcdn.media/poster/v/81956912.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81943123",
                "title": "Inside",
                "poster": "https://imgcdn.media/poster/v/81943123.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            }
        ]
    },
    {
        "heading": "Top 10 Movies in Netflix Today",
        "data": [
            {
                "id": "81725593",
                "title": "Emergency",
                "poster": "https://imgcdn.media/poster/v/81725593.jpg",
                "year": "2025",
                "ua": "U/A 18+ [A]",
                "duration": "2h 24m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81977810",
                "title": "Azaad",
                "poster": "https://imgcdn.media/poster/v/81977810.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "2h 16m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81784087",
                "title": "Thandel",
                "poster": "https://imgcdn.media/poster/v/81784087.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "2h 28m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81689641",
                "title": "Nadaaniyan",
                "poster": "https://imgcdn.media/poster/v/81689641.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "1h 59m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81601562",
                "title": "The Electric State",
                "poster": "https://imgcdn.media/poster/v/81601562.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "2h 8m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81644287",
                "title": "VidaaMuyarchi",
                "poster": "https://imgcdn.media/poster/v/81644287.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 31m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81943001",
                "title": "Dhoom Dhaam",
                "poster": "https://imgcdn.media/poster/v/81943001.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "1h 49m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "82006666",
                "title": "Pushpa 2: The Rule (Reloaded Version)",
                "poster": "https://imgcdn.media/poster/v/82006666.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "3h 44m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81715676",
                "title": "Daaku Maharaaj",
                "poster": "https://imgcdn.media/poster/v/81715676.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 23m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81902035",
                "title": "Lucky Baskhar",
                "poster": "https://imgcdn.media/poster/v/81902035.jpg",
                "year": "2024",
                "ua": "U/A 7+",
                "duration": "2h 27m",
                "quality": "HD",
                "type": "m"
            }
        ]
    },
    {
        "heading": "Korean TV Comedies",
        "data": [
            {
                "id": "81671440",
                "title": "King the Land",
                "poster": "https://imgcdn.media/poster/v/81671440.jpg",
                "year": "2023",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81739044",
                "title": "Love Next Door",
                "poster": "https://imgcdn.media/poster/v/81739044.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80209553",
                "title": "Busted!",
                "poster": "https://imgcdn.media/poster/v/80209553.jpg",
                "year": "2018",
                "ua": "U/A 16+",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81697981",
                "title": "Strong Girl Nam-soon",
                "poster": "https://imgcdn.media/poster/v/81697981.jpg",
                "year": "2023",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81365087",
                "title": "Vincenzo",
                "poster": "https://imgcdn.media/poster/v/81365087.jpg",
                "year": "2021",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81716080",
                "title": "My Demon",
                "poster": "https://imgcdn.media/poster/v/81716080.jpg",
                "year": "2023",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81159258",
                "title": "Crash Landing on You",
                "poster": "https://imgcdn.media/poster/v/81159258.jpg",
                "year": "2019",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81669777",
                "title": "Behind Your Touch",
                "poster": "https://imgcdn.media/poster/v/81669777.jpg",
                "year": "2023",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81422314",
                "title": "Mr. Queen",
                "poster": "https://imgcdn.media/poster/v/81422314.jpg",
                "year": "2020",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81697985",
                "title": "Doctor Slump",
                "poster": "https://imgcdn.media/poster/v/81697985.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70278876",
                "title": "Rooftop Prince",
                "poster": "https://imgcdn.media/poster/v/70278876.jpg",
                "year": "2012",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80039906",
                "title": "The Master's Sun",
                "poster": "https://imgcdn.media/poster/v/80039906.jpg",
                "year": "2013",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81243992",
                "title": "It's Okay to Not Be Okay",
                "poster": "https://imgcdn.media/poster/v/81243992.jpg",
                "year": "2020",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81738994",
                "title": "Miss Night and Day",
                "poster": "https://imgcdn.media/poster/v/81738994.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81225012",
                "title": "The Fiery Priest",
                "poster": "https://imgcdn.media/poster/v/81225012.jpg",
                "year": "2019",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81609066",
                "title": "Police University",
                "poster": "https://imgcdn.media/poster/v/81609066.jpg",
                "year": "2021",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81473182",
                "title": "Hometown Cha-Cha-Cha",
                "poster": "https://imgcdn.media/poster/v/81473182.jpg",
                "year": "2021",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81093299",
                "title": "Good Manager",
                "poster": "https://imgcdn.media/poster/v/81093299.jpg",
                "year": "2017",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81517188",
                "title": "Alchemy of Souls",
                "poster": "https://imgcdn.media/poster/v/81517188.jpg",
                "year": "2022",
                "ua": "U/A 16+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81697983",
                "title": "Welcome to Samdal-ri",
                "poster": "https://imgcdn.media/poster/v/81697983.jpg",
                "year": "2023",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            }
        ]
    },
    {
        "heading": "New on Netflix",
        "data": [
            {
                "id": "81715724",
                "title": "The Twister: Caught in the Storm",
                "poster": "https://imgcdn.media/poster/v/81715724.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1h 29m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81601562",
                "title": "The Electric State",
                "poster": "https://imgcdn.media/poster/v/81601562.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "2h 8m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81943123",
                "title": "Inside",
                "poster": "https://imgcdn.media/poster/v/81943123.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81756069",
                "title": "Adolescence",
                "poster": "https://imgcdn.media/poster/v/81756069.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81710015",
                "title": "Until You Burn",
                "poster": "https://imgcdn.media/poster/v/81710015.jpg",
                "year": "2025",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81725593",
                "title": "Emergency",
                "poster": "https://imgcdn.media/poster/v/81725593.jpg",
                "year": "2025",
                "ua": "U/A 18+ [A]",
                "duration": "2h 24m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81977810",
                "title": "Azaad",
                "poster": "https://imgcdn.media/poster/v/81977810.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "2h 16m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "80059015",
                "title": "Crime Patrol",
                "poster": "https://imgcdn.media/poster/v/80059015.jpg",
                "year": "2025",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81713944",
                "title": "Bert Kreischer: Lucky",
                "poster": "https://imgcdn.media/poster/v/81713944.jpg",
                "year": "2025",
                "ua": "U/A 18+ [A]",
                "duration": "1h 7m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "82010936",
                "title": "Mogura",
                "poster": "https://imgcdn.media/poster/v/82010936.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81954934",
                "title": "Ski into Love",
                "poster": "https://imgcdn.media/poster/v/81954934.jpg",
                "year": "2025",
                "ua": "U/A 7+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81228402",
                "title": "Below Deck",
                "poster": "https://imgcdn.media/poster/v/81228402.jpg",
                "year": "2012",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81626839",
                "title": "Love is Blind: Sweden",
                "poster": "https://imgcdn.media/poster/v/81626839.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81713009",
                "title": "Krish, Trish & Baltiboy Bharat Hain Hum",
                "poster": "https://imgcdn.media/poster/v/81713009.jpg",
                "year": "2023",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81725540",
                "title": "Trolls Band Together",
                "poster": "https://imgcdn.media/poster/v/81725540.jpg",
                "year": "2023",
                "ua": "U/A 7+",
                "duration": "1h 31m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81912996",
                "title": "Everybody’s Live with John Mulaney",
                "poster": "https://imgcdn.media/poster/v/81912996.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81239598",
                "title": "Woman of the Dead",
                "poster": "https://imgcdn.media/poster/v/81239598.jpg",
                "year": "2022",
                "ua": "U/A 16+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81423472",
                "title": "CoComelon Lane",
                "poster": "https://imgcdn.media/poster/v/81423472.jpg",
                "year": "2023",
                "ua": "U",
                "duration": "4 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80176842",
                "title": "Men on a Mission",
                "poster": "https://imgcdn.media/poster/v/80176842.jpg",
                "year": "2015",
                "ua": "U/A 13+",
                "duration": "4 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81633043",
                "title": "Welcome to the Family",
                "poster": "https://imgcdn.media/poster/v/81633043.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            }
        ]
    },
    {
        "heading": "Exciting Spy TV Shows",
        "data": [
            {
                "id": "81450827",
                "title": "The Night Agent",
                "poster": "https://imgcdn.media/poster/v/81450827.jpg",
                "year": "2023",
                "ua": "U/A 16+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81397077",
                "title": "FUBAR",
                "poster": "https://imgcdn.media/poster/v/81397077.jpg",
                "year": "2023",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81465101",
                "title": "House of Ninjas",
                "poster": "https://imgcdn.media/poster/v/81465101.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81396545",
                "title": "The Recruit",
                "poster": "https://imgcdn.media/poster/v/81396545.jpg",
                "year": "2022",
                "ua": "U/A 16+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81095101",
                "title": "Vagabond",
                "poster": "https://imgcdn.media/poster/v/81095101.jpg",
                "year": "2019",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80029520",
                "title": "Doctor Stranger",
                "poster": "https://imgcdn.media/poster/v/80029520.jpg",
                "year": "2014",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80205626",
                "title": "Hit & Run",
                "poster": "https://imgcdn.media/poster/v/80205626.jpg",
                "year": "2021",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81123055",
                "title": "In From the Cold",
                "poster": "https://imgcdn.media/poster/v/81123055.jpg",
                "year": "2022",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81511410",
                "title": "SPY x FAMILY",
                "poster": "https://imgcdn.media/poster/v/81511410.jpg",
                "year": "2022",
                "ua": "U/A 16+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80081705",
                "title": "Iris",
                "poster": "https://imgcdn.media/poster/v/80081705.jpg",
                "year": "2009",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80176866",
                "title": "Man to Man",
                "poster": "https://imgcdn.media/poster/v/80176866.jpg",
                "year": "2017",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81035137",
                "title": "Queen Sono",
                "poster": "https://imgcdn.media/poster/v/81035137.jpg",
                "year": "2020",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81726701",
                "title": "Vivant",
                "poster": "https://imgcdn.media/poster/v/81726701.jpg",
                "year": "2023",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81039557",
                "title": "Q-Force",
                "poster": "https://imgcdn.media/poster/v/81039557.jpg",
                "year": "2021",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            }
        ]
    },
    {
        "heading": "Bollywood Movies",
        "data": [
            {
                "id": "81977810",
                "title": "Azaad",
                "poster": "https://imgcdn.media/poster/v/81977810.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "2h 16m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81689641",
                "title": "Nadaaniyan",
                "poster": "https://imgcdn.media/poster/v/81689641.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "1h 59m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81943001",
                "title": "Dhoom Dhaam",
                "poster": "https://imgcdn.media/poster/v/81943001.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "1h 49m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81725593",
                "title": "Emergency",
                "poster": "https://imgcdn.media/poster/v/81725593.jpg",
                "year": "2025",
                "ua": "U/A 18+ [A]",
                "duration": "2h 24m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81760391",
                "title": "Laapataa Ladies",
                "poster": "https://imgcdn.media/poster/v/81760391.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "2h 3m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81686134",
                "title": "Bhool Bhulaiyaa 3",
                "poster": "https://imgcdn.media/poster/v/81686134.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "2h 38m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81436990",
                "title": "Animal",
                "poster": "https://imgcdn.media/poster/v/81436990.jpg",
                "year": "2023",
                "ua": "U/A 18+ [A]",
                "duration": "3h 21m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81698397",
                "title": "Fighter",
                "poster": "https://imgcdn.media/poster/v/81698397.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 44m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81750030",
                "title": "Sikandar Ka Muqaddar",
                "poster": "https://imgcdn.media/poster/v/81750030.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "2h 23m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81633804",
                "title": "Mission Majnu",
                "poster": "https://imgcdn.media/poster/v/81633804.jpg",
                "year": "2023",
                "ua": "U/A 16+",
                "duration": "2h 9m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81773534",
                "title": "Article 370",
                "poster": "https://imgcdn.media/poster/v/81773534.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 36m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81144147",
                "title": "'83",
                "poster": "https://imgcdn.media/poster/v/81144147.jpg",
                "year": "2021",
                "ua": "U/A 13+",
                "duration": "2h 40m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81760372",
                "title": "Shaitaan",
                "poster": "https://imgcdn.media/poster/v/81760372.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 8m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81678595",
                "title": "Bade Miyan Chote Miyan",
                "poster": "https://imgcdn.media/poster/v/81678595.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 42m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81686136",
                "title": "Vicky Vidya ka Woh Wala Video",
                "poster": "https://imgcdn.media/poster/v/81686136.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 21m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81493411",
                "title": "Jawan: Extended Cut",
                "poster": "https://imgcdn.media/poster/v/81493411.jpg",
                "year": "2023",
                "ua": "U/A 18+ [A]",
                "duration": "2h 50m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81730920",
                "title": "Maharaj",
                "poster": "https://imgcdn.media/poster/v/81730920.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 11m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81672746",
                "title": "Crew",
                "poster": "https://imgcdn.media/poster/v/81672746.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 0m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81681817",
                "title": "Do Patti",
                "poster": "https://imgcdn.media/poster/v/81681817.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 7m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81683052",
                "title": "Phir Aayi Hasseen Dillruba",
                "poster": "https://imgcdn.media/poster/v/81683052.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 12m",
                "quality": "HD",
                "type": "m"
            }
        ]
    },
    {
        "heading": "Your Next Watch",
        "data": [
            {
                "id": "81681535",
                "title": "When Life Gives You Tangerines",
                "poster": "https://imgcdn.media/poster/v/81681535.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81956912",
                "title": "The First Frost",
                "poster": "https://imgcdn.media/poster/v/81956912.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81601562",
                "title": "The Electric State",
                "poster": "https://imgcdn.media/poster/v/81601562.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "2h 8m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81977810",
                "title": "Azaad",
                "poster": "https://imgcdn.media/poster/v/81977810.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "2h 16m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81677629",
                "title": "The Trauma Code: Heroes on Call",
                "poster": "https://imgcdn.media/poster/v/81677629.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81476853",
                "title": "Dabba Cartel",
                "poster": "https://imgcdn.media/poster/v/81476853.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81689641",
                "title": "Nadaaniyan",
                "poster": "https://imgcdn.media/poster/v/81689641.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "1h 59m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81598435",
                "title": "Zero Day",
                "poster": "https://imgcdn.media/poster/v/81598435.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81728365",
                "title": "Culinary Class Wars",
                "poster": "https://imgcdn.media/poster/v/81728365.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81902035",
                "title": "Lucky Baskhar",
                "poster": "https://imgcdn.media/poster/v/81902035.jpg",
                "year": "2024",
                "ua": "U/A 7+",
                "duration": "2h 27m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81663325",
                "title": "SAKAMOTO DAYS",
                "poster": "https://imgcdn.media/poster/v/81663325.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81307099",
                "title": "Back in Action",
                "poster": "https://imgcdn.media/poster/v/81307099.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "1h 54m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81303831",
                "title": "The Lincoln Lawyer",
                "poster": "https://imgcdn.media/poster/v/81303831.jpg",
                "year": "2022",
                "ua": "U/A 16+",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81040344",
                "title": "Squid Game",
                "poster": "https://imgcdn.media/poster/v/81040344.jpg",
                "year": "2021",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81739044",
                "title": "Love Next Door",
                "poster": "https://imgcdn.media/poster/v/81739044.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81784087",
                "title": "Thandel",
                "poster": "https://imgcdn.media/poster/v/81784087.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "2h 28m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "82006666",
                "title": "Pushpa 2: The Rule (Reloaded Version)",
                "poster": "https://imgcdn.media/poster/v/82006666.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "3h 44m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81024821",
                "title": "3 Body Problem",
                "poster": "https://imgcdn.media/poster/v/81024821.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70195800",
                "title": "Suits",
                "poster": "https://imgcdn.media/poster/v/70195800.jpg",
                "year": "2011",
                "ua": "U/A 16+",
                "duration": "9 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81912961",
                "title": "When the Phone Rings",
                "poster": "https://imgcdn.media/poster/v/81912961.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            }
        ]
    },
    {
        "heading": "Anime",
        "data": [
            {
                "id": "70300472",
                "title": "Hunter X Hunter (2011)",
                "poster": "https://imgcdn.media/poster/v/70300472.jpg",
                "year": "2011",
                "ua": "U/A 16+",
                "duration": "6 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81239555",
                "title": "SHAMAN KING",
                "poster": "https://imgcdn.media/poster/v/81239555.jpg",
                "year": "2021",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80992228",
                "title": "KENGAN ASHURA",
                "poster": "https://imgcdn.media/poster/v/80992228.jpg",
                "year": "2019",
                "ua": "U/A 18+ [A]",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81563026",
                "title": "Rising Impact",
                "poster": "https://imgcdn.media/poster/v/81563026.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81564899",
                "title": "Delicious in Dungeon",
                "poster": "https://imgcdn.media/poster/v/81564899.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81215625",
                "title": "Garouden: The Way of the Lone Wolf",
                "poster": "https://imgcdn.media/poster/v/81215625.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80182054",
                "title": "Food Wars!: Shokugeki no Soma",
                "poster": "https://imgcdn.media/poster/v/80182054.jpg",
                "year": "2015",
                "ua": "U/A 18+ [A]",
                "duration": "5 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81249833",
                "title": "VINLAND SAGA",
                "poster": "https://imgcdn.media/poster/v/81249833.jpg",
                "year": "2019",
                "ua": "U/A 16+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81511410",
                "title": "SPY x FAMILY",
                "poster": "https://imgcdn.media/poster/v/81511410.jpg",
                "year": "2022",
                "ua": "U/A 16+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81648184",
                "title": "Baki Hanma VS Kengan Ashura",
                "poster": "https://imgcdn.media/poster/v/81648184.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1h 2m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81276500",
                "title": "Gundam: Requiem for Vengeance",
                "poster": "https://imgcdn.media/poster/v/81276500.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81171925",
                "title": "Ranma1/2",
                "poster": "https://imgcdn.media/poster/v/81171925.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80238012",
                "title": "Black Clover",
                "poster": "https://imgcdn.media/poster/v/80238012.jpg",
                "year": "2017",
                "ua": "U/A 13+",
                "duration": "4 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81278456",
                "title": "Jujutsu Kaisen",
                "poster": "https://imgcdn.media/poster/v/81278456.jpg",
                "year": "2020",
                "ua": "U/A 16+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80090673",
                "title": "Haikyu!!",
                "poster": "https://imgcdn.media/poster/v/80090673.jpg",
                "year": "2014",
                "ua": "U/A 13+",
                "duration": "4 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80995578",
                "title": "Hajime no Ippo: The Fighting!",
                "poster": "https://imgcdn.media/poster/v/80995578.jpg",
                "year": "2001",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81236338",
                "title": "Baki Hanma",
                "poster": "https://imgcdn.media/poster/v/81236338.jpg",
                "year": "2021",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81924850",
                "title": "SPY x FAMILY CODE: White",
                "poster": "https://imgcdn.media/poster/v/81924850.jpg",
                "year": "2023",
                "ua": "U/A 16+",
                "duration": "1h 50m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "70204970",
                "title": "DEATH NOTE",
                "poster": "https://imgcdn.media/poster/v/70204970.jpg",
                "year": "2006",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81046193",
                "title": "Dr. Stone",
                "poster": "https://imgcdn.media/poster/v/81046193.jpg",
                "year": "2019",
                "ua": "U/A 13+",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            }
        ]
    },
    {
        "heading": "Skip the Queues, Watch at Home",
        "data": [
            {
                "id": "81902035",
                "title": "Lucky Baskhar",
                "poster": "https://imgcdn.media/poster/v/81902035.jpg",
                "year": "2024",
                "ua": "U/A 7+",
                "duration": "2h 27m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "82006666",
                "title": "Pushpa 2: The Rule (Reloaded Version)",
                "poster": "https://imgcdn.media/poster/v/82006666.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "3h 44m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81644287",
                "title": "VidaaMuyarchi",
                "poster": "https://imgcdn.media/poster/v/81644287.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 31m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81725593",
                "title": "Emergency",
                "poster": "https://imgcdn.media/poster/v/81725593.jpg",
                "year": "2025",
                "ua": "U/A 18+ [A]",
                "duration": "2h 24m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81715676",
                "title": "Daaku Maharaaj",
                "poster": "https://imgcdn.media/poster/v/81715676.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 23m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81760391",
                "title": "Laapataa Ladies",
                "poster": "https://imgcdn.media/poster/v/81760391.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "2h 3m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81686134",
                "title": "Bhool Bhulaiyaa 3",
                "poster": "https://imgcdn.media/poster/v/81686134.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "2h 38m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81632727",
                "title": "Thangalaan",
                "poster": "https://imgcdn.media/poster/v/81632727.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 28m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81436990",
                "title": "Animal",
                "poster": "https://imgcdn.media/poster/v/81436990.jpg",
                "year": "2023",
                "ua": "U/A 18+ [A]",
                "duration": "3h 21m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81773534",
                "title": "Article 370",
                "poster": "https://imgcdn.media/poster/v/81773534.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 36m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81728598",
                "title": "Devara",
                "poster": "https://imgcdn.media/poster/v/81728598.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 51m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81726031",
                "title": "Kalki 2898 AD (Hindi)",
                "poster": "https://imgcdn.media/poster/v/81726031.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "2h 55m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81698397",
                "title": "Fighter",
                "poster": "https://imgcdn.media/poster/v/81698397.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 44m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81762714",
                "title": "GOAT - The Greatest of All Time",
                "poster": "https://imgcdn.media/poster/v/81762714.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "3h 1m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81686136",
                "title": "Vicky Vidya ka Woh Wala Video",
                "poster": "https://imgcdn.media/poster/v/81686136.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 21m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81672746",
                "title": "Crew",
                "poster": "https://imgcdn.media/poster/v/81672746.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 0m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81760372",
                "title": "Shaitaan",
                "poster": "https://imgcdn.media/poster/v/81760372.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 8m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81690671",
                "title": "Maharaja",
                "poster": "https://imgcdn.media/poster/v/81690671.jpg",
                "year": "2023",
                "ua": "U/A 16+",
                "duration": "2h 20m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81770422",
                "title": "Saripodhaa Sanivaaram",
                "poster": "https://imgcdn.media/poster/v/81770422.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 51m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81678595",
                "title": "Bade Miyan Chote Miyan",
                "poster": "https://imgcdn.media/poster/v/81678595.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 42m",
                "quality": "HD",
                "type": "m"
            }
        ]
    },
    {
        "heading": "Movies & TV Shows Dubbed in Telugu",
        "data": [
            {
                "id": "81040344",
                "title": "Squid Game",
                "poster": "https://imgcdn.media/poster/v/81040344.jpg",
                "year": "2021",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81682935",
                "title": "Black Doves",
                "poster": "https://imgcdn.media/poster/v/81682935.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81971071",
                "title": "Black Warrant",
                "poster": "https://imgcdn.media/poster/v/81971071.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81943001",
                "title": "Dhoom Dhaam",
                "poster": "https://imgcdn.media/poster/v/81943001.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "1h 49m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81389634",
                "title": "The Brothers Sun",
                "poster": "https://imgcdn.media/poster/v/81389634.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81157729",
                "title": "Rebel Ridge",
                "poster": "https://imgcdn.media/poster/v/81157729.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 11m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81756069",
                "title": "Adolescence",
                "poster": "https://imgcdn.media/poster/v/81756069.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81644287",
                "title": "VidaaMuyarchi",
                "poster": "https://imgcdn.media/poster/v/81644287.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 31m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81198933",
                "title": "Morbius",
                "poster": "https://imgcdn.media/poster/v/81198933.jpg",
                "year": "2022",
                "ua": "U/A 16+",
                "duration": "1h 44m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81282732",
                "title": "The Union",
                "poster": "https://imgcdn.media/poster/v/81282732.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "1h 49m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81702144",
                "title": "Officer Black Belt",
                "poster": "https://imgcdn.media/poster/v/81702144.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1h 49m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81665878",
                "title": "Mission: Impossible - Dead Reckoning",
                "poster": "https://imgcdn.media/poster/v/81665878.jpg",
                "year": "2023",
                "ua": "U/A 13+",
                "duration": "2h 44m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81680567",
                "title": "Venom: The Last Dance",
                "poster": "https://imgcdn.media/poster/v/81680567.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1h 48m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81290872",
                "title": "Khakee: The Bihar Chapter",
                "poster": "https://imgcdn.media/poster/v/81290872.jpg",
                "year": "2022",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81618079",
                "title": "Gyeongseong Creature",
                "poster": "https://imgcdn.media/poster/v/81618079.jpg",
                "year": "2023",
                "ua": "U/A 16+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80192098",
                "title": "Money Heist",
                "poster": "https://imgcdn.media/poster/v/80192098.jpg",
                "year": "2017",
                "ua": "U/A 18+ [A]",
                "duration": "5 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81721676",
                "title": "Badland Hunters",
                "poster": "https://imgcdn.media/poster/v/81721676.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1h 48m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81057361",
                "title": "Men in Black: International",
                "poster": "https://imgcdn.media/poster/v/81057361.jpg",
                "year": "2019",
                "ua": "U/A 13+",
                "duration": "1h 54m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81476963",
                "title": "Carry-On",
                "poster": "https://imgcdn.media/poster/v/81476963.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1h 59m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "80991090",
                "title": "Damsel",
                "poster": "https://imgcdn.media/poster/v/80991090.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "1h 49m",
                "quality": "HD",
                "type": "m"
            }
        ]
    },
    {
        "heading": "Futuristic Sci-Fi",
        "data": [
            {
                "id": "70114342",
                "title": "The Book of Eli",
                "poster": "https://imgcdn.media/poster/v/70114342.jpg",
                "year": "2010",
                "ua": "U/A 16+",
                "duration": "1h 57m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "80177458",
                "title": "Snowpiercer",
                "poster": "https://imgcdn.media/poster/v/80177458.jpg",
                "year": "2020",
                "ua": "U/A 18+ [A]",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70103524",
                "title": "Terminator Salvation",
                "poster": "https://imgcdn.media/poster/v/70103524.jpg",
                "year": "2009",
                "ua": "U/A 16+",
                "duration": "1h 54m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "80074220",
                "title": "3% percent",
                "poster": "https://imgcdn.media/poster/v/80074220.jpg",
                "year": "2016",
                "ua": "U/A 18+ [A]",
                "duration": "4 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80104198",
                "title": "Lost in Space",
                "poster": "https://imgcdn.media/poster/v/80104198.jpg",
                "year": "2018",
                "ua": "U/A 7+",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80211726",
                "title": "Ready Player One",
                "poster": "https://imgcdn.media/poster/v/80211726.jpg",
                "year": "2018",
                "ua": "U/A 13+",
                "duration": "2h 20m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "80185871",
                "title": "Geostorm",
                "poster": "https://imgcdn.media/poster/v/80185871.jpg",
                "year": "2017",
                "ua": "U/A 13+",
                "duration": "1h 49m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "80996532",
                "title": "Resident Evil",
                "poster": "https://imgcdn.media/poster/v/80996532.jpg",
                "year": "2022",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81002266",
                "title": "Uglies",
                "poster": "https://imgcdn.media/poster/v/81002266.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "1h 42m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81480320",
                "title": "Code 8 Part II",
                "poster": "https://imgcdn.media/poster/v/81480320.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1h 40m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81276500",
                "title": "Gundam: Requiem for Vengeance",
                "poster": "https://imgcdn.media/poster/v/81276500.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70263889",
                "title": "After Earth",
                "poster": "https://imgcdn.media/poster/v/70263889.jpg",
                "year": "2013",
                "ua": "U/A 13+",
                "duration": "1h 40m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "70298735",
                "title": "Edge of Tomorrow",
                "poster": "https://imgcdn.media/poster/v/70298735.jpg",
                "year": "2014",
                "ua": "U/A 16+",
                "duration": "1h 53m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "80207033",
                "title": "Cowboy Bebop",
                "poster": "https://imgcdn.media/poster/v/80207033.jpg",
                "year": "2021",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81002746",
                "title": "Mortal Engines",
                "poster": "https://imgcdn.media/poster/v/81002746.jpg",
                "year": "2018",
                "ua": "U/A 13+",
                "duration": "2h 8m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "80097140",
                "title": "Altered Carbon",
                "poster": "https://imgcdn.media/poster/v/80097140.jpg",
                "year": "2018",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80236236",
                "title": "Another Life",
                "poster": "https://imgcdn.media/poster/v/80236236.jpg",
                "year": "2019",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81026915",
                "title": "Better Than Us",
                "poster": "https://imgcdn.media/poster/v/81026915.jpg",
                "year": "2019",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80227090",
                "title": "I Am Mother",
                "poster": "https://imgcdn.media/poster/v/80227090.jpg",
                "year": "2019",
                "ua": "U/A 13+",
                "duration": "1h 53m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81277430",
                "title": "Love and Monsters",
                "poster": "https://imgcdn.media/poster/v/81277430.jpg",
                "year": "2021",
                "ua": "U/A 13+",
                "duration": "1h 49m",
                "quality": "HD",
                "type": "m"
            }
        ]
    },
    {
        "heading": "Japanese Anime",
        "data": [
            {
                "id": "81663325",
                "title": "SAKAMOTO DAYS",
                "poster": "https://imgcdn.media/poster/v/81663325.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80050063",
                "title": "The Seven Deadly Sins",
                "poster": "https://imgcdn.media/poster/v/80050063.jpg",
                "year": "2014",
                "ua": "U/A 16+",
                "duration": "5 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81715444",
                "title": "MF Ghost",
                "poster": "https://imgcdn.media/poster/v/81715444.jpg",
                "year": "2023",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70300472",
                "title": "Hunter X Hunter (2011)",
                "poster": "https://imgcdn.media/poster/v/70300472.jpg",
                "year": "2011",
                "ua": "U/A 16+",
                "duration": "6 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80992228",
                "title": "KENGAN ASHURA",
                "poster": "https://imgcdn.media/poster/v/80992228.jpg",
                "year": "2019",
                "ua": "U/A 18+ [A]",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81563026",
                "title": "Rising Impact",
                "poster": "https://imgcdn.media/poster/v/81563026.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81239555",
                "title": "SHAMAN KING",
                "poster": "https://imgcdn.media/poster/v/81239555.jpg",
                "year": "2021",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81564899",
                "title": "Delicious in Dungeon",
                "poster": "https://imgcdn.media/poster/v/81564899.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80182054",
                "title": "Food Wars!: Shokugeki no Soma",
                "poster": "https://imgcdn.media/poster/v/80182054.jpg",
                "year": "2015",
                "ua": "U/A 18+ [A]",
                "duration": "5 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81249833",
                "title": "VINLAND SAGA",
                "poster": "https://imgcdn.media/poster/v/81249833.jpg",
                "year": "2019",
                "ua": "U/A 16+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81215625",
                "title": "Garouden: The Way of the Lone Wolf",
                "poster": "https://imgcdn.media/poster/v/81215625.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81511410",
                "title": "SPY x FAMILY",
                "poster": "https://imgcdn.media/poster/v/81511410.jpg",
                "year": "2022",
                "ua": "U/A 16+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81171925",
                "title": "Ranma1/2",
                "poster": "https://imgcdn.media/poster/v/81171925.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80090673",
                "title": "Haikyu!!",
                "poster": "https://imgcdn.media/poster/v/80090673.jpg",
                "year": "2014",
                "ua": "U/A 13+",
                "duration": "4 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80238012",
                "title": "Black Clover",
                "poster": "https://imgcdn.media/poster/v/80238012.jpg",
                "year": "2017",
                "ua": "U/A 13+",
                "duration": "4 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81648184",
                "title": "Baki Hanma VS Kengan Ashura",
                "poster": "https://imgcdn.media/poster/v/81648184.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1h 2m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81278456",
                "title": "Jujutsu Kaisen",
                "poster": "https://imgcdn.media/poster/v/81278456.jpg",
                "year": "2020",
                "ua": "U/A 16+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81276500",
                "title": "Gundam: Requiem for Vengeance",
                "poster": "https://imgcdn.media/poster/v/81276500.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80995578",
                "title": "Hajime no Ippo: The Fighting!",
                "poster": "https://imgcdn.media/poster/v/80995578.jpg",
                "year": "2001",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81236338",
                "title": "Baki Hanma",
                "poster": "https://imgcdn.media/poster/v/81236338.jpg",
                "year": "2021",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            }
        ]
    },
    {
        "heading": "Only on Netflix",
        "data": [
            {
                "id": "81476853",
                "title": "Dabba Cartel",
                "poster": "https://imgcdn.media/poster/v/81476853.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81307099",
                "title": "Back in Action",
                "poster": "https://imgcdn.media/poster/v/81307099.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "1h 54m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81598435",
                "title": "Zero Day",
                "poster": "https://imgcdn.media/poster/v/81598435.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81040344",
                "title": "Squid Game",
                "poster": "https://imgcdn.media/poster/v/81040344.jpg",
                "year": "2021",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81912961",
                "title": "When the Phone Rings",
                "poster": "https://imgcdn.media/poster/v/81912961.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81663325",
                "title": "SAKAMOTO DAYS",
                "poster": "https://imgcdn.media/poster/v/81663325.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81971071",
                "title": "Black Warrant",
                "poster": "https://imgcdn.media/poster/v/81971071.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81024821",
                "title": "3 Body Problem",
                "poster": "https://imgcdn.media/poster/v/81024821.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81943001",
                "title": "Dhoom Dhaam",
                "poster": "https://imgcdn.media/poster/v/81943001.jpg",
                "year": "2025",
                "ua": "U/A 13+",
                "duration": "1h 49m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81728365",
                "title": "Culinary Class Wars",
                "poster": "https://imgcdn.media/poster/v/81728365.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81157729",
                "title": "Rebel Ridge",
                "poster": "https://imgcdn.media/poster/v/81157729.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "2h 11m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81739044",
                "title": "Love Next Door",
                "poster": "https://imgcdn.media/poster/v/81739044.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80204890",
                "title": "Formula 1: Drive to Survive",
                "poster": "https://imgcdn.media/poster/v/80204890.jpg",
                "year": "2019",
                "ua": "U/A 16+",
                "duration": "6 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80113647",
                "title": "Designated Survivor",
                "poster": "https://imgcdn.media/poster/v/80113647.jpg",
                "year": "2016",
                "ua": "U/A 18+ [A]",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81697981",
                "title": "Strong Girl Nam-soon",
                "poster": "https://imgcdn.media/poster/v/81697981.jpg",
                "year": "2023",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81707950",
                "title": "Queen of Tears",
                "poster": "https://imgcdn.media/poster/v/81707950.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81288983",
                "title": "The Diplomat",
                "poster": "https://imgcdn.media/poster/v/81288983.jpg",
                "year": "2023",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81437051",
                "title": "The Gentlemen",
                "poster": "https://imgcdn.media/poster/v/81437051.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81671440",
                "title": "King the Land",
                "poster": "https://imgcdn.media/poster/v/81671440.jpg",
                "year": "2023",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70178217",
                "title": "House of Cards",
                "poster": "https://imgcdn.media/poster/v/70178217.jpg",
                "year": "2013",
                "ua": "U/A 18+ [A]",
                "duration": "6 Seasons",
                "quality": "HD",
                "type": "t"
            }
        ]
    },
    {
        "heading": "TV Action & Adventure",
        "data": [
            {
                "id": "80113612",
                "title": "Fauda",
                "poster": "https://imgcdn.media/poster/v/80113612.jpg",
                "year": "2015",
                "ua": "U/A 18+ [A]",
                "duration": "4 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81437051",
                "title": "The Gentlemen",
                "poster": "https://imgcdn.media/poster/v/81437051.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81397558",
                "title": "Sisyphus",
                "poster": "https://imgcdn.media/poster/v/81397558.jpg",
                "year": "2021",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81522570",
                "title": "The Cage",
                "poster": "https://imgcdn.media/poster/v/81522570.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81175361",
                "title": "The King's Avatar",
                "poster": "https://imgcdn.media/poster/v/81175361.jpg",
                "year": "2019",
                "ua": "U/A 13+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81413928",
                "title": "Obliterated",
                "poster": "https://imgcdn.media/poster/v/81413928.jpg",
                "year": "2023",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81507734",
                "title": "La Brea",
                "poster": "https://imgcdn.media/poster/v/81507734.jpg",
                "year": "2021",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80177458",
                "title": "Snowpiercer",
                "poster": "https://imgcdn.media/poster/v/80177458.jpg",
                "year": "2020",
                "ua": "U/A 18+ [A]",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81457507",
                "title": "American Primeval",
                "poster": "https://imgcdn.media/poster/v/81457507.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81389634",
                "title": "The Brothers Sun",
                "poster": "https://imgcdn.media/poster/v/81389634.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80230293",
                "title": "Wu Assassins",
                "poster": "https://imgcdn.media/poster/v/80230293.jpg",
                "year": "2019",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81095101",
                "title": "Vagabond",
                "poster": "https://imgcdn.media/poster/v/81095101.jpg",
                "year": "2019",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81444051",
                "title": "Bloodhounds",
                "poster": "https://imgcdn.media/poster/v/81444051.jpg",
                "year": "2023",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81397077",
                "title": "FUBAR",
                "poster": "https://imgcdn.media/poster/v/81397077.jpg",
                "year": "2023",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81026305",
                "title": "Bandidos",
                "poster": "https://imgcdn.media/poster/v/81026305.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81465101",
                "title": "House of Ninjas",
                "poster": "https://imgcdn.media/poster/v/81465101.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70305883",
                "title": "Marco Polo",
                "poster": "https://imgcdn.media/poster/v/70305883.jpg",
                "year": "2014",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80990771",
                "title": "Rise of Empires: Ottoman",
                "poster": "https://imgcdn.media/poster/v/80990771.jpg",
                "year": "2020",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70301870",
                "title": "Vikings",
                "poster": "https://imgcdn.media/poster/v/70301870.jpg",
                "year": "2013",
                "ua": "U/A 18+ [A]",
                "duration": "6 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81343748",
                "title": "Narco-Saints",
                "poster": "https://imgcdn.media/poster/v/81343748.jpg",
                "year": "2022",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            }
        ]
    },
    {
        "heading": "Latin American Movies & TV",
        "data": [
            {
                "id": "81026305",
                "title": "Bandidos",
                "poster": "https://imgcdn.media/poster/v/81026305.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80074220",
                "title": "3% percent",
                "poster": "https://imgcdn.media/poster/v/80074220.jpg",
                "year": "2016",
                "ua": "U/A 18+ [A]",
                "duration": "4 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81720712",
                "title": "Love Is Blind: Argentina",
                "poster": "https://imgcdn.media/poster/v/81720712.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81683616",
                "title": "Medusa",
                "poster": "https://imgcdn.media/poster/v/81683616.jpg",
                "year": "2025",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81025403",
                "title": "The Inmate",
                "poster": "https://imgcdn.media/poster/v/81025403.jpg",
                "year": "2018",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81098497",
                "title": "El Dragón: Return of a Warrior",
                "poster": "https://imgcdn.media/poster/v/81098497.jpg",
                "year": "2019",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81406459",
                "title": "Bionic",
                "poster": "https://imgcdn.media/poster/v/81406459.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1h 50m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "80220422",
                "title": "Bolívar",
                "poster": "https://imgcdn.media/poster/v/80220422.jpg",
                "year": "2019",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81058338",
                "title": "Overhaul",
                "poster": "https://imgcdn.media/poster/v/81058338.jpg",
                "year": "2023",
                "ua": "U/A 18+ [A]",
                "duration": "1h 40m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "80238711",
                "title": "Yankee",
                "poster": "https://imgcdn.media/poster/v/80238711.jpg",
                "year": "2019",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81580682",
                "title": "The Hijacking of Flight 601",
                "poster": "https://imgcdn.media/poster/v/81580682.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80035684",
                "title": "Pablo Escobar, el patrón del mal",
                "poster": "https://imgcdn.media/poster/v/80035684.jpg",
                "year": "2012",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81713263",
                "title": "The Lost Children",
                "poster": "https://imgcdn.media/poster/v/81713263.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1h 36m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "70205672",
                "title": "La Reina del Sur",
                "poster": "https://imgcdn.media/poster/v/70205672.jpg",
                "year": "2011",
                "ua": "U/A 18+ [A]",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81610658",
                "title": "(Un)lucky Sisters",
                "poster": "https://imgcdn.media/poster/v/81610658.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "1h 23m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81068725",
                "title": "Senna",
                "poster": "https://imgcdn.media/poster/v/81068725.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81304948",
                "title": "Fake Profile",
                "poster": "https://imgcdn.media/poster/v/81304948.jpg",
                "year": "2023",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80205595",
                "title": "Always a Witch",
                "poster": "https://imgcdn.media/poster/v/80205595.jpg",
                "year": "2018",
                "ua": "U/A 16+",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81087583",
                "title": "One Hundred Years of Solitude",
                "poster": "https://imgcdn.media/poster/v/81087583.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81166747",
                "title": "¿Quién mató a Sara?",
                "poster": "https://imgcdn.media/poster/v/81166747.jpg",
                "year": "2021",
                "ua": "U/A 18+ [A]",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            }
        ]
    },
    {
        "heading": "Critically Acclaimed US TV Shows",
        "data": [
            {
                "id": "81303831",
                "title": "The Lincoln Lawyer",
                "poster": "https://imgcdn.media/poster/v/81303831.jpg",
                "year": "2022",
                "ua": "U/A 16+",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70143836",
                "title": "Breaking Bad",
                "poster": "https://imgcdn.media/poster/v/70143836.jpg",
                "year": "2008",
                "ua": "U/A 18+ [A]",
                "duration": "5 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70195800",
                "title": "Suits",
                "poster": "https://imgcdn.media/poster/v/70195800.jpg",
                "year": "2011",
                "ua": "U/A 16+",
                "duration": "9 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70281312",
                "title": "The Blacklist",
                "poster": "https://imgcdn.media/poster/v/70281312.jpg",
                "year": "2019",
                "ua": "U/A 16+",
                "duration": "10 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70136117",
                "title": "House, M.D.",
                "poster": "https://imgcdn.media/poster/v/70136117.jpg",
                "year": "2004",
                "ua": "U/A 18+ [A]",
                "duration": "8 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81288983",
                "title": "The Diplomat",
                "poster": "https://imgcdn.media/poster/v/81288983.jpg",
                "year": "2023",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70178217",
                "title": "House of Cards",
                "poster": "https://imgcdn.media/poster/v/70178217.jpg",
                "year": "2013",
                "ua": "U/A 18+ [A]",
                "duration": "6 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70153394",
                "title": "Psych",
                "poster": "https://imgcdn.media/poster/v/70153394.jpg",
                "year": "2006",
                "ua": "U/A 16+",
                "duration": "8 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70136126",
                "title": "Dexter",
                "poster": "https://imgcdn.media/poster/v/70136126.jpg",
                "year": "2006",
                "ua": "U/A 18+ [A]",
                "duration": "8 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80057918",
                "title": "Lucifer",
                "poster": "https://imgcdn.media/poster/v/80057918.jpg",
                "year": "2016",
                "ua": "U/A 16+",
                "duration": "6 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81389634",
                "title": "The Brothers Sun",
                "poster": "https://imgcdn.media/poster/v/81389634.jpg",
                "year": "2024",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80117552",
                "title": "Ozark",
                "poster": "https://imgcdn.media/poster/v/80117552.jpg",
                "year": "2017",
                "ua": "U/A 18+ [A]",
                "duration": "4 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70143830",
                "title": "The Big Bang Theory",
                "poster": "https://imgcdn.media/poster/v/70143830.jpg",
                "year": "2007",
                "ua": "U/A 16+",
                "duration": "12 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70143860",
                "title": "The Vampire Diaries",
                "poster": "https://imgcdn.media/poster/v/70143860.jpg",
                "year": "2009",
                "ua": "U/A 18+ [A]",
                "duration": "8 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81149450",
                "title": "Vikings: Valhalla",
                "poster": "https://imgcdn.media/poster/v/81149450.jpg",
                "year": "2022",
                "ua": "U/A 18+ [A]",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70153404",
                "title": "Friends",
                "poster": "https://imgcdn.media/poster/v/70153404.jpg",
                "year": "1994",
                "ua": "U/A 13+",
                "duration": "10 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81144203",
                "title": "BLUE EYE SAMURAI",
                "poster": "https://imgcdn.media/poster/v/81144203.jpg",
                "year": "2023",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80189685",
                "title": "The Witcher",
                "poster": "https://imgcdn.media/poster/v/80189685.jpg",
                "year": "2019",
                "ua": "U/A 18+ [A]",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80057281",
                "title": "Stranger Things",
                "poster": "https://imgcdn.media/poster/v/80057281.jpg",
                "year": "2016",
                "ua": "U/A 16+",
                "duration": "4 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70157334",
                "title": "Monk",
                "poster": "https://imgcdn.media/poster/v/70157334.jpg",
                "year": "2002",
                "ua": "U/A 13+",
                "duration": "8 Seasons",
                "quality": "HD",
                "type": "t"
            }
        ]
    },
    {
        "heading": "US TV Dramas",
        "data": [
            {
                "id": "81024821",
                "title": "3 Body Problem",
                "poster": "https://imgcdn.media/poster/v/81024821.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81457507",
                "title": "American Primeval",
                "poster": "https://imgcdn.media/poster/v/81457507.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70178217",
                "title": "House of Cards",
                "poster": "https://imgcdn.media/poster/v/70178217.jpg",
                "year": "2013",
                "ua": "U/A 18+ [A]",
                "duration": "6 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81507734",
                "title": "La Brea",
                "poster": "https://imgcdn.media/poster/v/81507734.jpg",
                "year": "2021",
                "ua": "U/A 16+",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80177458",
                "title": "Snowpiercer",
                "poster": "https://imgcdn.media/poster/v/80177458.jpg",
                "year": "2020",
                "ua": "U/A 18+ [A]",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70136126",
                "title": "Dexter",
                "poster": "https://imgcdn.media/poster/v/70136126.jpg",
                "year": "2006",
                "ua": "U/A 18+ [A]",
                "duration": "8 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80057918",
                "title": "Lucifer",
                "poster": "https://imgcdn.media/poster/v/80057918.jpg",
                "year": "2016",
                "ua": "U/A 16+",
                "duration": "6 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80117552",
                "title": "Ozark",
                "poster": "https://imgcdn.media/poster/v/80117552.jpg",
                "year": "2017",
                "ua": "U/A 18+ [A]",
                "duration": "4 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81144203",
                "title": "BLUE EYE SAMURAI",
                "poster": "https://imgcdn.media/poster/v/81144203.jpg",
                "year": "2023",
                "ua": "U/A 18+ [A]",
                "duration": "1 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80104198",
                "title": "Lost in Space",
                "poster": "https://imgcdn.media/poster/v/80104198.jpg",
                "year": "2018",
                "ua": "U/A 7+",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70143860",
                "title": "The Vampire Diaries",
                "poster": "https://imgcdn.media/poster/v/70143860.jpg",
                "year": "2009",
                "ua": "U/A 18+ [A]",
                "duration": "8 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80241318",
                "title": "Manifest",
                "poster": "https://imgcdn.media/poster/v/80241318.jpg",
                "year": "2018",
                "ua": "U/A 16+",
                "duration": "4 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70305883",
                "title": "Marco Polo",
                "poster": "https://imgcdn.media/poster/v/70305883.jpg",
                "year": "2014",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "81149450",
                "title": "Vikings: Valhalla",
                "poster": "https://imgcdn.media/poster/v/81149450.jpg",
                "year": "2022",
                "ua": "U/A 18+ [A]",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "70157334",
                "title": "Monk",
                "poster": "https://imgcdn.media/poster/v/70157334.jpg",
                "year": "2002",
                "ua": "U/A 13+",
                "duration": "8 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80044950",
                "title": "The OA",
                "poster": "https://imgcdn.media/poster/v/80044950.jpg",
                "year": "2016",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80238738",
                "title": "Yellowstone",
                "poster": "https://imgcdn.media/poster/v/80238738.jpg",
                "year": "2018",
                "ua": "U/A 18+ [A]",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80025172",
                "title": "Narcos",
                "poster": "https://imgcdn.media/poster/v/80025172.jpg",
                "year": "2015",
                "ua": "U/A 18+ [A]",
                "duration": "3 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80177342",
                "title": "Good Girls",
                "poster": "https://imgcdn.media/poster/v/80177342.jpg",
                "year": "2018",
                "ua": "U/A 16+",
                "duration": "4 Seasons",
                "quality": "HD",
                "type": "t"
            },
            {
                "id": "80097140",
                "title": "Altered Carbon",
                "poster": "https://imgcdn.media/poster/v/80097140.jpg",
                "year": "2018",
                "ua": "U/A 18+ [A]",
                "duration": "2 Seasons",
                "quality": "HD",
                "type": "t"
            }
        ]
    },
    {
        "heading": "90-Minute Films",
        "data": [
            {
                "id": "70032592",
                "title": "Just Like Heaven",
                "poster": "https://imgcdn.media/poster/v/70032592.jpg",
                "year": "2005",
                "ua": "U/A 13+",
                "duration": "1h 35m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81936018",
                "title": "Counterattack",
                "poster": "https://imgcdn.media/poster/v/81936018.jpg",
                "year": "2025",
                "ua": "U/A 16+",
                "duration": "1h 25m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81990562",
                "title": "Curse of the Seven Seas",
                "poster": "https://imgcdn.media/poster/v/81990562.jpg",
                "year": "2024",
                "ua": "U/A 18+ [A]",
                "duration": "1h 34m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "80133493",
                "title": "The Dark Tower",
                "poster": "https://imgcdn.media/poster/v/80133493.jpg",
                "year": "2017",
                "ua": "U/A 16+",
                "duration": "1h 34m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "70162962",
                "title": "S.W.A.T.: Firefight",
                "poster": "https://imgcdn.media/poster/v/70162962.jpg",
                "year": "2011",
                "ua": "U/A 18+ [A]",
                "duration": "1h 28m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "70122322",
                "title": "A Thousand Words",
                "poster": "https://imgcdn.media/poster/v/70122322.jpg",
                "year": "2012",
                "ua": "U/A 13+",
                "duration": "1h 31m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "80106735",
                "title": "Underworld: Blood Wars",
                "poster": "https://imgcdn.media/poster/v/80106735.jpg",
                "year": "2016",
                "ua": "U/A 18+ [A]",
                "duration": "1h 31m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81686180",
                "title": "Family Pack",
                "poster": "https://imgcdn.media/poster/v/81686180.jpg",
                "year": "2024",
                "ua": "U/A 13+",
                "duration": "1h 35m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "70059988",
                "title": "Rush Hour 3",
                "poster": "https://imgcdn.media/poster/v/70059988.jpg",
                "year": "2007",
                "ua": "U/A 13+",
                "duration": "1h 30m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "1152469",
                "title": "Liar Liar",
                "poster": "https://imgcdn.media/poster/v/1152469.jpg",
                "year": "1997",
                "ua": "U/A 16+",
                "duration": "1h 26m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81458368",
                "title": "My Name Is Vendetta",
                "poster": "https://imgcdn.media/poster/v/81458368.jpg",
                "year": "2022",
                "ua": "U/A 18+ [A]",
                "duration": "1h 32m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81728050",
                "title": "Sniper: G.R.I.T. - Global Response & Intelligence Team",
                "poster": "https://imgcdn.media/poster/v/81728050.jpg",
                "year": "2023",
                "ua": "U/A 16+",
                "duration": "1h 31m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "70118780",
                "title": "Death at a Funeral",
                "poster": "https://imgcdn.media/poster/v/70118780.jpg",
                "year": "2010",
                "ua": "U/A 16+",
                "duration": "1h 32m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "60022265",
                "title": "Big Fat Liar",
                "poster": "https://imgcdn.media/poster/v/60022265.jpg",
                "year": "2002",
                "ua": "U/A 7+",
                "duration": "1h 27m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "70021643",
                "title": "Fun with Dick & Jane",
                "poster": "https://imgcdn.media/poster/v/70021643.jpg",
                "year": "2005",
                "ua": "U/A 13+",
                "duration": "1h 30m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "70097577",
                "title": "Hancock",
                "poster": "https://imgcdn.media/poster/v/70097577.jpg",
                "year": "2008",
                "ua": "U/A 16+",
                "duration": "1h 32m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "70097578",
                "title": "Journey to the Center of the Earth",
                "poster": "https://imgcdn.media/poster/v/70097578.jpg",
                "year": "2008",
                "ua": "U/A 13+",
                "duration": "1h 32m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81212842",
                "title": "Murder Mystery 2",
                "poster": "https://imgcdn.media/poster/v/81212842.jpg",
                "year": "2023",
                "ua": "U/A 13+",
                "duration": "1h 30m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81572011",
                "title": "Ballerina",
                "poster": "https://imgcdn.media/poster/v/81572011.jpg",
                "year": "2023",
                "ua": "U/A 18+ [A]",
                "duration": "1h 33m",
                "quality": "HD",
                "type": "m"
            },
            {
                "id": "81657057",
                "title": "Strays",
                "poster": "https://imgcdn.media/poster/v/81657057.jpg",
                "year": "2023",
                "ua": "U/A 18+ [A]",
                "duration": "1h 33m",
                "quality": "HD",
                "type": "m"
            }
        ]
    }
]
  const [refresing, setRefresing] = useState<boolean>(false);
  useEffect(() => {
    // setCookie();
  }, [cookie]);

  const handleRefresh = async () => {
    setRefresing(true);
    // await refetch();
    setRefresing(false);
  };

  return (
    <SafeAreaView>
      <MotiView className="p-2">
        <FlatList
          data={mainPageData}
          keyExtractor={({ heading }) => heading}
          showsVerticalScrollIndicator={false}
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
                    onPress={() => console.log(mainPageData)}
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
