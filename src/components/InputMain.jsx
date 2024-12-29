import { BiLinkAlt, BiX } from "react-icons/bi";

export default function InputMain() {
  return (
    <div
      id="inputMain"
      className="w-[640px] flex justify-between items-center border-b border-dark py-4 mt-8"
    >
      <button>
        <BiLinkAlt className="text-[1.2em] opacity-40" />
      </button>
      <input
        type="text"
        placeholder="https://i.pinimg.com/736x/09/bf/01/09bf015e78d18f1eb35d5467313a12dd.jpg"
        className="flex-1 px-3 focus:outline-none"
      />
      {/*<button className="flex justify-center items-center">
            <BiX className="text-[1.5em] opacity-40"/>
          </button>*/}
    </div>
  );
}
