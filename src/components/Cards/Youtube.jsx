import { getYoutubeKey } from "@/utils/urlUtils";
export default function Youtube({ src, type }) {
  let urlObj = new URL(src);
  return (
    <iframe
      width="100%"
      height={type === "long" ? 315 : 891}
      src={`https://www.youtube.com/embed/${getYoutubeKey(
        urlObj,
        type
      )}?autoplay=1&mute=1&controls=0&loop=1&playlist=${getYoutubeKey(
        urlObj,
        type
      )}&si=0pq7ZqZGuIv3dhnm`}
      title="YouTube video player"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
}
