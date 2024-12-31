import { useEffect } from "react";
import Card from "./Card";
import { useCardListStore } from "@/stores/useCardListStore";
import { AddDataFromLocalStorage } from "@/utils/localstorage";
import { useTabStore } from "@/stores/useTabStore";

export default function CardList() {
  const selectedTab = useTabStore((state) => state.selectedTab);
  const cards = useCardListStore((state) => state.cards);
  useEffect(() => {
    AddDataFromLocalStorage("cards", cards);
    console.log(cards);
  }, [cards]);
  return (
    <div id="card-list" className="columns-3 py-10">
      {cards.map((card) => {
        if (
          selectedTab === "all" ||
          (selectedTab === "images" && card.file.type === "image") ||
          (selectedTab === "videos" && card.file.type === "video")
        ) {
          return <Card key={card.id} card={card} />;
        }
      })}
    </div>
  );
}
//
