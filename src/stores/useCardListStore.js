import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

import {
  GetDataFromLocalStorage,
  AddDataFromLocalStorage,
} from "@/utils/localstorage";
import {
  isImage,
  isYTLong,
  isYTShorts,
  getFileExtension,
} from "@/utils/urlUtils";

const initialCards = [
  {
    id: uuidv4(),
    url: "https://i.pinimg.com/736x/12/c0/80/12c0802ceb5754828f8767dbe7d53abf.jpg",
    details: {
      title: "Astronaut Grandpa",
      description: "",
      hashtag: ["graphicdesign", "pattern"],
    },
    file: {
      type: "image",
      ext: "jpg",
    },
  },
  {
    id: uuidv4(),
    url: "https://i.pinimg.com/736x/63/55/79/635579156ee4a0b2971a6e4bb3dd3f6e.jpg",
    details: {
      title: "Crow",
      description: "",
      hashtag: ["graphicdesign", "classic"],
    },
    file: {
      type: "image",
      ext: "jpg",
    },
  },
  {
    id: uuidv4(),
    url: "https://i.pinimg.com/736x/ff/ec/e4/ffece47ed72d3eea5977b78048bd9e14.jpg",
    details: {
      title: "Y2K ULTRA INSTINCT",
      description: "",
      hashtag: ["y2k", "goku"],
    },
    file: {
      type: "image",
      ext: "jpg",
    },
  },
];

const storedCards = GetDataFromLocalStorage("cards");
if (!storedCards || storedCards.length === 0) {
  AddDataFromLocalStorage("cards", initialCards);
}

export const useCardListStore = create((set) => ({
  cards: GetDataFromLocalStorage("cards") || [],
  changePreviewCard: (card) => set({ previewCard: card }),
  addNewCard: (e, url, callback, cardData = {}) => {
    if (e.key === "Enter" && url.trim() !== "") {
      if (!url.startsWith("https://")) {
        return;
      }
      try {
        const urlObj = new URL(url);
        const isYoutube = isYTLong(urlObj) || isYTShorts(urlObj);

        if (isImage(url) || isYoutube) {
          const newCard = {
            id: uuidv4(),
            url: url,
            details: {
              title: cardData.title || "",
              description: cardData.description || "",
              hashtag: cardData.hashtags || [],
            },
            file: {
              type: isYoutube ? "video" : "image",
              ext: getFileExtension(url, urlObj),
            },
          };
          set((state) => {
            const updatedCards = [...state.cards, newCard];
            AddDataFromLocalStorage("cards", updatedCards);
            return { cards: updatedCards };
          });
          callback();
        }
      } catch (error) {
        console.error("Invalid URL provided:", error.message);
      }
    }
  },
}));
