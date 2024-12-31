import { create } from "zustand";

export const useTabStore = create((set) => ({

    selectedTab: "all",
    setSelectedTab: (tab) => {
        set({selectedTab: tab})
    }

}))
