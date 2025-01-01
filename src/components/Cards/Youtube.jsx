import { getYoutubeKey } from "@/utils/urlUtils";
export default function Youtube({ src, type, overlay }) {
  let urlObj = new URL(src);
  return (
    <div className="relative">
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
      {overlay && <div className="absolute h-full w-full bg-black/0 top-0 left-0"></div>}
    </div>
  );
}
