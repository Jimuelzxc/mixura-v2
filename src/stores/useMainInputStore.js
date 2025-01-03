import { create } from "zustand";

export const useMainInputStore = create((set) => ({
  mainInputValue: "",
  mainInputMode: "link",
  setMainInputMode: () => set((state) => ({
    mainInputMode: state.mainInputMode === "link" ? "search": "link"
  })),
  setMainInputValue: (newInput) => set((state) => ({
    mainInputValue: newInput
  }))
}));
