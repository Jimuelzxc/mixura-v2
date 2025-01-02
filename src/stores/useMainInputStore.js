import { create } from "zustand";

export const useMainInputStore = create((set) => ({
  mainInputValue: "",
  setMainInputValue: (newInput) => set((state) => ({
    mainInputValue: newInput
  }))
}));
