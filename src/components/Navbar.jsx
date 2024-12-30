import Wrapper from "@/layouts/Wrapper";
import { useScrollStore } from "@/stores/useScrollStore";
import { useEffect } from "react";
export default function Navbar() {
  return (
    <div
      id="navbar"
      className={`fixed top-0 bg-white/90 backdrop-blur-sm w-full ease-out duration-150 z-10 ${
      null}`}
    >
      <Wrapper className="flex justify-between items-center py-4">
        <div className="text-[0.9em]">Mixura</div>
        <div className="border-t border-b h-[6px] border-slate-900 w-[18px] cursor-pointer"></div>
      </Wrapper>
    </div>
  );
}
