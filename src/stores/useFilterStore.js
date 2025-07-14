import { create } from "zustand";

export const useFilterStore = create((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  selectedHashtags: [],
  addHashtag: (hashtag) =>
    set((state) => ({
      selectedHashtags: [...state.selectedHashtags, hashtag],
    })),
  removeHashtag: (hashtag) =>
    set((state) => ({
      selectedHashtags: state.selectedHashtags.filter((h) => h !== hashtag),
    })),
}));
