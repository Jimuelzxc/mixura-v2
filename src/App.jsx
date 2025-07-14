import "./App.css";

import DefaultLayout from "@/layouts/DefaultLayout";
import Wrapper from "@/layouts/Wrapper";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InputMain from "@/components/InputMain";
import CardList from "@/components/Cards/CardList";
import CreateCardForm from "@/components/CreateCardForm";
import { useTabStore } from "@/stores/useTabStore";
import { useFilterStore } from "@/stores/useFilterStore";
import { useCardListStore } from "@/stores/useCardListStore";
import { useCreateCardFormStore } from "@/stores/useCreateCardFormStore";
import { useToggleClickOutside } from "@/hooks/useToggleClickOutside";

function App() {
  const { isFormVisible } = useCreateCardFormStore();
  const selectedTab = useTabStore((state) => state.selectedTab);
  const setSelectedTab = useTabStore((state) => state.setSelectedTab);
  const { selectedHashtags, addHashtag, removeHashtag } = useFilterStore();
  const cards = useCardListStore((state) => state.cards);
  const allHashtags = [
    ...new Set(cards.flatMap((card) => card.details.hashtag)),
  ];
  const filterDropdown = useToggleClickOutside(false);
  return (
    <>
      {isFormVisible && <CreateCardForm />}
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
            <div
              id="dropdown"
              className="relative flex flex-row gap-4"
              ref={filterDropdown.ref}
            >
              <button
                onClick={() => filterDropdown.setToggle(!filterDropdown.toggle)}
              >
                Filter {"  "}
                {selectedHashtags.length > 0 && (
                  <span>
                    <span className="ml-1">(</span>
                    <span className=" text-pink-600 rounded-full px-2 py-1 text-s">
                      {selectedHashtags.length}
                    </span>
                   )
                  </span>
                )}
              </button>
              <button>Cards</button>
              {filterDropdown.toggle && (
                <div className="absolute right-0 mt-10 w-48 bg-white border shadow-lg z-10 p-2">
                  <div className="flex flex-wrap gap-2">
                    {allHashtags.map((hashtag) => (
                      <div
                        key={hashtag}
                        className={`px-2 py-1 cursor-pointer hover:bg-gray-100 flex items-center justify-between ${
                          selectedHashtags.includes(hashtag)
                            ? "bg-gray-200"
                            : ""
                        }`}
                        onClick={() => {
                          if (selectedHashtags.includes(hashtag)) {
                            removeHashtag(hashtag);
                          } else {
                            addHashtag(hashtag);
                          }
                        }}
                      >
                        <span>#{hashtag}</span>
                        {selectedHashtags.includes(hashtag) && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeHashtag(hashtag);
                            }}
                            className="ml-2 text-red-500"
                          >
                            x
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <CardList />
        </Wrapper>
      </DefaultLayout>
    </>
  );
}

export default App;
