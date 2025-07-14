import { create } from "zustand";

export const useCreateCardFormStore = create((set) => ({
  isFormVisible: false,
  showForm: () => set({ isFormVisible: true }),
  hideForm: () => set({ isFormVisible: false }),
}));
