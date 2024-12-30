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
        title: "",
        description: "",
        hashtag: [],
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
        title: "",
        description: "",
        hashtag: [],
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
        title: "",
        description: "",
        hashtag: [],
      },
      file: {
        type: "image",
        ext: "jpg",
      },
    },
  ],
  cards: GetDataFromLocalStorage("cards"),

  addNewCard: (e, url, callback) => {
    if (e.key === "Enter") {
      const urlObj = new URL(url);
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
        callback();
      }
    }
  },
}));
