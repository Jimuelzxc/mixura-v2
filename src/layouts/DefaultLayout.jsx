import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { useScrollStore } from "@/stores/useScrollStore";
import { useScrollWindow } from "@/hooks/useScrollWindow";
export default function DefaultLayout({ className, children }) {
  const scrollValue = useScrollStore((state) => state.scrollValue);
  const setScrollValue = useScrollStore((state) => state.setScrollValue);
  const { handleScrollToTop } = useScrollWindow(() => { setScrollValue(window.scrollY)});
  return (
    <div
      id="default-layout"
      className={`${className} relative bg-white duration-1000 ease-in-out min-h-screen`}
    >
      {children}
      <button
        className={`z-20 drop-shadow-2xl fixed right-0 overflow-hidden border-[2px] border-white/20 bottom-0 m-20 p-1 backdrop-blur-md   bg-white/20 py-6 translate-y-[100px] ease-[cubic-bezier(.86,-0.05,.16,1.26)] duration-300 opacity-0 ${
          scrollValue > 430 && "translate-y-[-40px] opacity-90"
        }`}
        onClick={handleScrollToTop}
      >
        {scrollValue > 430 ? (
          <BiUpArrowAlt className="text-[2.5em]" />
        ) : (
          <BiDownArrowAlt className="text-[2.5em]" />
        )}
      </button>
    </div>
  );
}
