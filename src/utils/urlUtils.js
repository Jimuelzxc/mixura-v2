//console.log(urlObj.pathname.split("/").at(2)) get key yt shorts

//urlObj.searchParams.get("v")
//urlObj.pathname.split("/").at(2)

export const getYoutubeKey = (urlObj, type) => {
  let getKey =
    type === "short"
      ? urlObj.pathname.split("/").at(2)
      : urlObj.searchParams.get("v");

  return getKey;
};

//https://image.jpg this url ends width [jpg, png, webp, etc...]
export const isImage = (url) =>
  [".jpg", ".jpeg", ".png", ".webp", ".gif"].some((ext) => url.endsWith(ext));

//Seperate long and short form because youtube url links are different.
// Long - https://www.youtube.com/watch?v=QXf10rw_dqo
// Shorts - https://www.youtube.com/shorts/aHvx-vGwVpA
// https://www.youtube.com/watch?v=QXf10rw_dqo this url includes "youtube" and has "v" params/key
export const isYTLong = (urlObj) =>
  urlObj.hostname.includes("youtube") && urlObj.searchParams.has("v");

//https://www.youtube.com/shorts/aHvx-vGwVpA this url includes "youtube" and pathname "/shorts"
export const isYTShorts = (urlObj) =>
  urlObj.hostname.includes("youtube") && urlObj.pathname.includes("shorts");

//GET FILE EXTENSION
// IF IMAGES - https://image.jpg > .jpg, .png etc...
// IF Video no extension, so i base in long or short form
// Long form - https://www.youtube.com/watch?v=QXf10rw_dqo
// Short Form - https://www.youtube.com/shorts/iVxCy5lXLaA
export const getFileExtension = (url, urlObj) => {
  if (isYTLong(urlObj)) return "long";
  if (isYTShorts(urlObj)) return "short";
  if (isImage(url)) return url.split(".").pop();
  return null;
};
