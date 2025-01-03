import { useEffect} from "react";
import Card from "./Card";
import { useCardListStore } from "@/stores/useCardListStore";
import { AddDataFromLocalStorage } from "@/utils/localstorage";
import { useTabStore } from "@/stores/useTabStore";
import { useToggleClickOutside } from "@/hooks/useToggleClickOutside";
import Image from "./Image";
import Youtube from "./Youtube";
import { useMainInputStore } from "@/stores/useMainInputStore";

export default function CardList() {
  const searchInput = useMainInputStore((state) => state.mainInputValue)
  const selectedTab = useTabStore((state) => state.selectedTab);
  const mainInputMode = useMainInputStore((state) => state.mainInputMode);
  const cards = useCardListStore((state) => state.cardsDefault).filter((card) =>{
    return mainInputMode === "search" ? card.details.title.toLowerCase().includes(searchInput.toLowerCase()) || card.details.hashtag.some((tag) => tag.includes(searchInput.toLowerCase())): card
  });
  const changePreviewCard = useCardListStore(
    (state) => state.changePreviewCard
  );
  const previewModal = useToggleClickOutside(false);
  const previewCard = useCardListStore((state) => state.previewCard);

  useEffect(() => {
    AddDataFromLocalStorage("cards", cards);
    console.log(cards);
  }, [cards]);

  return (
    <>
      {previewModal.toggle && (
        <div
          id="Modal"
          className="bg-black/50 h-screen w-full fixed flex justify-center items-center z-[30] top-0 left-0 backdrop-blur-md"
        >
          <div id="ModalContent" ref={previewModal.ref}>
            <div id="ModalHeader"></div>
            <div id="ModalBody" className="bg-white w-[500px]">
              {previewCard.file.type === "image" && (
                <Image src={previewCard.url} />
              )}
              {previewCard.file.type === "video" && (
                <Youtube
                  src={previewCard.url}
                  type={previewCard.file.ext}
                  overlay={false}
                />
              )}
            </div>
            <div id="ModalFooter"></div>
          </div>
        </div>
      )}

      <div id="card-list" className="columns-3 py-10">
        {cards.map((card) => {
          if (
            selectedTab === "all" ||
            (selectedTab === "images" && card.file.type === "image") ||
            (selectedTab === "videos" && card.file.type === "video")
          ) {
            return (
              <Card
                key={card.id}
                card={card}
                onClick={() => {
                  previewModal.setToggle(true);
                  changePreviewCard(card);
                }}
              />
            );
          }
        })}
      </div>
    </>
  );
}
//
