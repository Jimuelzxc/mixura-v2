import { useEffect } from "react";
import Card from "./Card";
import { useCardListStore } from "@/stores/useCardListStore";
import { AddDataFromLocalStorage } from "@/utils/localstorage";
export default function CardList() {
  const cards = useCardListStore((state) => state.cards);
  useEffect(() => {
    AddDataFromLocalStorage("cards", cards);
    console.log(cards)
  }, [cards]);
  return (
    <div id="card-list" className="columns-3 py-10">
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}
