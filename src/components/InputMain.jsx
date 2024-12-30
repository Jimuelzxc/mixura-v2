import { BiLinkAlt, BiX } from "react-icons/bi";
import { useInput } from "@/hooks/useInput";

import { useCardListStore } from "@/stores/useCardListStore";
import { useScrollStore } from "@/stores/useScrollStore";
import { useEffect } from "react";

export default function InputMain() {
  const { value, setValue, inputRef, handleOnChange } = useInput("");
  const addNewCard = useCardListStore((state) => state.addNewCard);
  const scrollValue = useScrollStore((state) => state.scrollValue);
  useEffect(() => {scrollValue === 0 && inputRef.current.focus()},[scrollValue])
  return (
    <div
      id="inputMain"
      className="w-[640px] flex justify-between items-center border-b border-dark py-4"
    >
      <button>
        <BiLinkAlt className="text-[1.2em] opacity-40" />
      </button>
      <input
        type="text"
        placeholder="https://i.pinimg.com/736x/09/bf/01/09bf015e78d18f1eb35d5467313a12dd.jpg"
        className="flex-1 px-3 focus:outline-none bg-white/0"
        ref={inputRef}
        value={value}
        onChange={handleOnChange}
        onKeyDown={(e) => addNewCard(e, value, () => setValue(""))}
      />
      {value !== "" && (
        <button
          className="flex justify-center items-center"
          onClick={() => setValue("")}
        >
          <BiX className="text-[1.5em] opacity-40" />{" "}
        </button>
      )}
    </div>
  );
}
