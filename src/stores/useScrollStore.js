import { create } from "zustand";

export const useScrollStore = create((set) => ({
  scrollValue: 0,
  setScrollValue: (value) =>
    set(() => ({
      scrollValue: value,
    })),
}));
