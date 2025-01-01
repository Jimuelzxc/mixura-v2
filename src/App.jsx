import "./App.css";

import DefaultLayout from "@/layouts/DefaultLayout";
import Wrapper from "@/layouts/Wrapper";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InputMain from "@/components/InputMain";
import CardList from "@/components/Cards/CardList";

import { useTabStore } from "@/stores/useTabStore";
import { useCardListStore } from "@/stores/useCardListStore";
import { useEffect } from "react";
function App() {
  const selectedTab = useTabStore((state) => state.selectedTab);
  const setSelectedTab = useTabStore((state) => state.setSelectedTab);
  const previewCard = useCardListStore((state) => state.previewCard)
  useEffect(() => {console.log(previewCard)},[previewCard])
  return (
    <>
      <DefaultLayout>
        <Navbar />
        <Wrapper className="mt-12">
          <Hero />
          <InputMain />
          <div id="tabs-dropdown" className="flex justify-between py-4 mt-5">
            <div id="tabs" className="flex flex-row gap-4">
              <button
                onClick={() => setSelectedTab("all")}
                className={`py-1 ${
                  selectedTab === "all" && "border-b border-dark "
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedTab("images")}
                className={`py-1 ${
                  selectedTab === "images" && "border-b border-dark"
                }`}
              >
                Images
              </button>
              <button
                onClick={() => setSelectedTab("videos")}
                className={`py-1 ${
                  selectedTab === "videos" && "border-b border-dark"
                }`}
              >
                Videos
              </button>
            </div>
            <div id="dropdown" className="flex flex-row gap-4">
              <button>Filter</button>
              <button>Cards</button>
            </div>
          </div>
          <CardList />
        </Wrapper>
      </DefaultLayout>
    </>
  );
}

export default App;
