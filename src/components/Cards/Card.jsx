import Image from "./Image";
import Youtube from "./Youtube";
export default function Card({ card, onClick }) {
  console.log(card)
  return (
    <div
      id="card"
      className="break-inside-avoid flex flex-col gap-3 mb-10 hover:scale-[1.03] duration-150 ease-in-out"
      onClick={onClick}
    >
      <div id="card-media">
        {card.file.type === "image" && <Image src={card.url} />}
        {card.file.type === "video" && (
          <Youtube src={card.url} type={card.file.ext} overlay={true} />
        )}
      </div>
      <div id="card-details" className="px-2">
        <h4 className="text-[1.6em] font-[600] m-0 p-0">{card.details.title}</h4>
        <div className="flex flex-row gap-2 opacity-70">
          {card.details.hashtag.map((tag) => {
            return <a href="" className="text-[0.8em] m-0 p-0 text-blue-600">#{tag}</a>;
          })}
        </div>
      </div>
    </div>
  );
}
