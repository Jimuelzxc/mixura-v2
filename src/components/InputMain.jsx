import { BiLinkAlt, BiX, BiCaretDown, BiSearch } from "react-icons/bi";
import { useCardListStore } from "@/stores/useCardListStore";
import { useScrollStore } from "@/stores/useScrollStore";
import { useEffect, useRef } from "react";
import { useMainInputStore } from "@/stores/useMainInputStore";
import { useFilterStore } from "@/stores/useFilterStore";

export default function InputMain() {
  const addNewCard = useCardListStore((state) => state.addNewCard);
  const scrollValue = useScrollStore((state) => state.scrollValue);
  const { mainInputValue, setMainInputValue, setMainInputMode, mainInputMode } =
    useMainInputStore();
  const setSearchQuery = useFilterStore((state) => state.setSearchQuery);
  const mainInputRef = useRef();

  useEffect(() => {
    scrollValue === 0 && mainInputRef.current.focus();
  }, [scrollValue]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
        mainInputRef.current.focus();
        setMainInputMode();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setMainInputMode]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setMainInputValue(value);
    if (mainInputMode === "search") {
      setSearchQuery(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && mainInputMode === "link") {
      addNewCard(e, mainInputValue, () => setMainInputValue(""));
    }
  };

  return (
    <div
      id="inputMain"
      className="w-[640px] flex justify-between items-center border-b border-dark py-4 relative"
    >
      <button
        className="flex flex-row items-center opacity-40 hover:opacity-100 duration-100 ease-in-out group"
        onClick={() => setMainInputMode()}
      >
        <span className="text-[0.6em]">
          <BiCaretDown />
        </span>
        {mainInputMode === "link" && <BiLinkAlt className="text-[1.2em]" />}
        {mainInputMode === "search" && <BiSearch className="text-[1.2em]" />}
        <div className="absolute bg-white text-[0.8em] translate-y-9 p-2 border hidden group-hover:block capitalize">
          {mainInputMode}
        </div>
      </button>
      <input
        type="text"
        placeholder={
          mainInputMode === "link"
            ? "https://i.pinimg.com/736x/09/bf/01/09bf015e78d18f1eb35d5467313a12dd.jpg"
            : "Search by title or #hashtag"
        }
        className="flex-1 px-3 focus:outline-none bg-white/0"
        ref={mainInputRef}
        value={mainInputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {mainInputValue !== "" && (
        <button
          className="flex justify-center items-center"
          onClick={() => {
            setMainInputValue("");
            if (mainInputMode === "search") {
              setSearchQuery("");
            }
          }}
        >
          <BiX className="text-[1.5em] opacity-40" />{" "}
        </button>
      )}
    </div>
  );
}
