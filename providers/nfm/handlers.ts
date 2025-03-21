
// @ts-ignore
import * as cheerio from "react-native-cheerio";
import { finalMainPageContentDataTypes, showTypes } from "~/lib/types";
import { cookieType } from "~/store/cookie";
const UserAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36";
const mainUrl = "https://netfree.cc/mobile";
const verifyUrl =
  "https://raw.githubusercontent.com/SaurabhKaperwan/Utils/refs/heads/main/NF.json";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface fianalMainPageContentTyps {
  heading: string;
  data: finalMainPageContentDataTypes[];
}

export const checkCookie = async () => {
  const options = {
    method: "GET",
    headers: {
      "User-Agent": UserAgent,
      credentials: "omit",
      Cookie: "",
    },
  };
  // console.log('setting cookie')
  const response = await fetch(`${mainUrl}/home`, options).then((res) =>
    res.text()
  );
  // console.log(response)
  const $document = cheerio.load(response);

  let dataHash = $document("body").attr("data-hash");

  return dataHash ? true : false;
};
export const bypassUrl = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "User-Agent": UserAgent,
        credentials: "omit",
        Cookie: "",
      },
    };
    // console.log('setting cookie')
    const response = await fetch(`${mainUrl}/home`, options).then((res) =>
      res.text()
    );
    // console.log(response)
    const $document = cheerio.load(response);

    let dataHash = $document("body").attr("data-hash");
    if (dataHash) {
      return "no need!";
    }

    const addHash = $document("body").attr("data-addhash");
    const addTime = $document("body").attr("data-time");

    const verifyRes = await fetch(verifyUrl, options).then((res) => res.json());
    const verifyURL = verifyRes.url.replace("###", addHash);

    const verifyResponse = await fetch(`${verifyURL}&t=${addTime}`, options);
    if (verifyResponse.status != 200 || !addHash || !addTime) {
      await bypassUrl();
      return;
    }
    let success = false;
    const form = new FormData();
    form.append("verify", addHash);

    const config = {
      method: "POST",
      headers: {
        "User-Agent": UserAgent,
        credentials: "include",
      },
      body: form,
    };
    let unformattedcookies: string | null = null;

    do {
      await delay(35000);
      console.log("delayed");

      const finalRes = await fetch(`${mainUrl}/verify2.php`, config);
      // console.log(finalRes.headers.get("set-cookie"))
      if (finalRes.headers.get("set-cookie")) {
        unformattedcookies = finalRes.headers.get("set-cookie");
        success = true;
      }
    } while (!success);
    console.log(unformattedcookies);
    if (!unformattedcookies) return null;
    console.log({
      t_hash_t: unformattedcookies?.split(";")[0].split("=")[1],
      t_hash: addHash,
      expires: unformattedcookies?.split(";")[1].split("=")[1],
    });
    return {
      t_hash_t: unformattedcookies?.split(";")[0].split("=")[1],
      t_hash: addHash,
      expires: unformattedcookies?.split(";")[1].split("=")[1],
    };
  } catch (error) {
    console.error(error);
  }
};

export const getMainPageData = async (cookie: cookieType | "no need!") => {
  try {
    const options = {
      method: "GET",
      headers: {
        "User-Agent": UserAgent,
        cookie:
          cookie === "no need!"
            ? ""
            : "`t_hash_t=${cookie.t_hash_t};t_hash=${cookie.t_hash};expires=${cookie.expires}`",
      },
    };
    const mainPageDoc = await fetch(`${mainUrl}/home`, options).then((res) =>
      res.text()
    );
    const $mainDoc = cheerio.load(mainPageDoc);
    const allShows: showTypes[] = [];
    $mainDoc("#top10").each((_index: any, _element: any) => {
      const row: showTypes = {
        heading: "",
        data: [],
      };
      const name = $mainDoc(_element).find("span").text().trim();
      row.heading = name;

      const $element = cheerio.load(_element);
      $element(".top10-post").map(async (_: any, child: any) => {
        const id = $mainDoc(child).attr("data-post");
        const poster = $mainDoc(child).find(".top10-img-1").attr("data-src");

        row.data.push({
          id: id,
          poster: poster,
          // details: details,
        });
      });
      allShows.push(row);
    });

    $mainDoc(".tray-container").each((_: any, element: any) => {
      const row: showTypes = {
        heading: "",
        data: [],
      };
      const name = $mainDoc(element).find("h2 a").text().trim();
      row.heading = name;
      const $element = cheerio.load(element);
      $element("article a").map(async (idx: any, child: any) => {
        const id = $mainDoc(child).attr("data-post");
        const poster = $mainDoc(child)
          .find(".card-img-container img")
          .attr("data-src");

        row.data.push({
          id: id,
          poster: poster,
        });
      });
      allShows.push(row);
    });

    const finalResult = await getFianlResult(allShows, cookie);

    return finalResult;
  } catch (error) {
    return {
      error: "IDK",
    };
  }
};

const getFianlResult = async (
  allShows: showTypes[],
  cookie: cookieType | "no need!"
) => {
  const finalResult: fianalMainPageContentTyps[] = [];

  const rows = await Promise.all(
    allShows.map(async (show) => {
      if (!show.heading) return null; // Skip if heading is undefined

      const row: fianalMainPageContentTyps = {
        heading: show.heading,
        data: [],
      };

      const showData = await Promise.all(
        show.data.map(async (child) => {
          if (child.id === undefined) return null; // Skip if id is undefined
          const partialData = await getPartialDetails({
            id: child.id,
            cookie: cookie === "no need!" ? "no need!" : cookie,
          });
          return {
            id: child.id || "",
            title: partialData?.title || "",
            poster: child.poster || "",
            year: partialData?.year || "",
            ua: partialData?.ua || "",
            duration: partialData?.duration || "",
            quality: partialData?.quality || "",
            type: partialData?.type || "",
          };
        })
      );

      row.data = showData.filter(
        (data): data is finalMainPageContentDataTypes => data !== null
      );
      return row;
    })
  );

  finalResult.push(
    ...rows.filter((row): row is fianalMainPageContentTyps => row !== null)
  );
  return finalResult;
};

// Get details
export const getPartialDetails = async ({
  id,
  cookie,
}: {
  id: string;
  cookie: cookieType | "no need!";
}) => {
  try {
    const options = {
      method: "GET",
      headers: {
        cookie:
          cookie === "no need!"
            ? ""
            : `t_hash_t=${cookie.t_hash_t};t_hash=${cookie.t_hash}`,
        Referer: `${mainUrl}/`,
      },
    };

    const response = await fetch(
      `${mainUrl}/post.php?id=${id}&t=${Math.floor(Date.now() / 1000)}`,
      options
    ).then((res) => res.json());
    return {
      title: response.title,
      year: response.year,
      ua: response.ua,
      duration: response.runtime,
      quality: response.hdsd,
      type: response.type,
    };
  } catch (error) {
    console.error("Error fetching details:", error);
    return null; // Return null to indicate an error occurred
  }
};

export const getFullDetails = async ({
  id,
  cookie,
}: {
  id: string;
  cookie: cookieType | "no need!";
}) => {
  try {
    const options = {
      method: "GET",
      headers: {
        cookie:
          cookie === "no need!"
            ? ""
            : `t_hash_t=${cookie.t_hash_t};t_hash=${cookie.t_hash}`,
        Referer: `${mainUrl}/`,
      },
    };

    const response = await fetch(
      `${mainUrl}/post.php?id=${id}&t=${Math.floor(Date.now() / 1000)}`,
      options
    ).then((res) => res.json());
    return response;
  } catch (error) {
    console.error("Error fetching details:", error);
    return null; // Return null to indicate an error occurred
  }
};

export const getOnlySeasonData = async ({
  id,
  cookie,
}: {
  id: string;
  cookie: cookieType | "no need!";
}) => {
  try {
    const options = {
      method: "GET",
      headers: {
        cookie:
          cookie === "no need!"
            ? ""
            : `t_hash_t=${cookie.t_hash_t};t_hash=${cookie.t_hash}`,
        Referer: `${mainUrl}/`,
      },
    }
    const response = await fetch(
      `${mainUrl}/post.php?id=${id}&t=${Math.floor(Date.now() / 1000)}`,
      options
    ).then((res) => res.json());
    return {
      id: id,
      title: response.title,
      type: response.type,
      season: response.season,
    }
  } catch (error) {
    return null;
  }
}

export const getEpisodeData = () => {
  // ToDO
return 'TODO'
}
