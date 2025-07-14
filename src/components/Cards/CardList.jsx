import Card from "./Card";
import { useCardListStore } from "@/stores/useCardListStore";
import { useTabStore } from "@/stores/useTabStore";
import { useFilterStore } from "@/stores/useFilterStore";
import { useToggleClickOutside } from "@/hooks/useToggleClickOutside";
import Image from "./Image";
import Youtube from "./Youtube";
import { useMainInputStore } from "@/stores/useMainInputStore";
import { BiX } from "react-icons/bi";

export default function CardList() {
  const { searchQuery, selectedHashtags } = useFilterStore();
  const selectedTab = useTabStore((state) => state.selectedTab);
  const mainInputMode = useMainInputStore((state) => state.mainInputMode);

  const allCards = useCardListStore((state) => state.cards) || [];
  const cards = allCards
    .filter((card) => {
      if (mainInputMode !== "search" || searchQuery === "") return true;
      return (
        card.details.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.details.hashtag.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    })
    .filter((card) => {
      if (selectedHashtags.length === 0) return true;
      return selectedHashtags.every((hashtag) =>
        card.details.hashtag.includes(hashtag)
      );
    });
  const changePreviewCard = useCardListStore(
    (state) => state.changePreviewCard
  );
  const previewModal = useToggleClickOutside(false);
  const previewCard = useCardListStore((state) => state.previewCard);

  return (
    <>
      {previewModal.toggle && (
        <div
          id="Modal"
          className="bg-black/50 h-screen w-full fixed flex justify-center items-center z-[30] top-0 left-0 backdrop-blur-md"
        >
          <div id="ModalContent" ref={previewModal.ref} className="relative">
            <button
              onClick={() => previewModal.setToggle(false)}
              className="absolute -top-10 -right-5 text-white"
            >
              <BiX className="text-[2em]" />
            </button>
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
              <div className="p-4">
                <h4 className="text-[1.6em] font-[600] m-0 p-0">{previewCard.details.title}</h4>
                <div className="flex flex-row gap-2 opacity-70">
                  {previewCard.details.hashtag.map((tag) => {
                    return <a href="" className="text-[0.8em] m-0 p-0 text-blue-600">#{tag}</a>;
                  })}
                </div>
              </div>
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
