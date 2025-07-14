import Image from "./Image";
import Youtube from "./Youtube";
import { useFilterStore } from "@/stores/useFilterStore";

export default function Card({ card, onClick }) {
  const { addHashtag, removeHashtag, selectedHashtags } = useFilterStore();
  return (
    <div
      id="card"
      className="break-inside-avoid flex flex-col gap-3 mb-10 hover:scale-[1.03] duration-150 ease-in-out cursor-pointer"
    >
      <div id="card-media" onClick={onClick}>
        {card.file.type === "image" && <Image src={card.url} />}
        {card.file.type === "video" && (
          <Youtube src={card.url} type={card.file.ext} overlay={true} />
        )}
      </div>
      <div id="card-details" className="px-2">
        <h4 className="text-[1.6em] font-[600] m-0 p-0">{card.details.title}</h4>
        <div className="flex flex-row gap-2 opacity-70">
          {card.details.hashtag.map((tag) => {
            return (
              <button
                key={tag}
                onClick={(e) => {
                  e.stopPropagation();
                  if (selectedHashtags.includes(tag)) {
                    removeHashtag(tag);
                  } else {
                    addHashtag(tag);
                  }
                }}
                className={`text-[0.8em] m-0 p-0 text-blue-600 ${selectedHashtags.includes(tag) ? 'bg-pink-600 text-white px-2' : ''}`}
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
