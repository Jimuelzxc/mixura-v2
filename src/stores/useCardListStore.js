import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

import { GetDataFromLocalStorage } from "@/utils/localstorage";
import {
  isImage,
  isYTLong,
  isYTShorts,
  getFileExtension,
} from "@/utils/urlUtils";
export const useCardListStore = create((set) => ({
  cardsDefault: [
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
  ],
  cards:  GetDataFromLocalStorage("cards"),
  changePreviewCard: (card) => set((state) => ({
    previewCard: card
  })),
  addNewCard: (e, url, callback) => {
    // Ensure the key is "Enter" and the url is not empty
    if (e.key === "Enter" && url.trim() !== "") {
      // Validate the URL starts with "https://"
      if (!url.startsWith("https://")) {
        return; // Exit early if the URL is invalid
      }
      try {
        const urlObj = new URL(url); // Validate and parse the URL
        const isYoutube = isYTLong(urlObj) || isYTShorts(urlObj);

        if (isImage(url) || isYoutube) {
          set((state) => ({
            cards: [
              ...state.cards,
              {
                id: uuidv4(),
                url: url,
                details: {
                  title: "",
                  description: "",
                  hashtag: [],
                },
                file: {
                  type: isYoutube ? "video" : "image",
                  ext: getFileExtension(url, urlObj),
                },
              },
            ],
          }));
          callback(); // Call the callback after successfully adding
        }
      } catch (error) {
        console.error("Invalid URL provided:", error.message);
      }
    }

    ShowAllCardsFilter: null
  },
}));
