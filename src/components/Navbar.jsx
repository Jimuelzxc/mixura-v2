import Wrapper from "@/layouts/Wrapper";

import { useToggleClickOutside } from "@/hooks/useToggleClickOutside";

import Dropdown from "./Dropdown/Dropdown";
import DropdownTrigger from "./Dropdown/DropdownTrigger";
import DropdownMenu from "./Dropdown/DropdownMenu";

export default function Navbar() {
  const navbarMenu = useToggleClickOutside(false);
  return (
    <div
      id="navbar"
      className={`fixed top-0 bg-white/90 backdrop-blur-sm w-full ease-out duration-150 z-10`}>
      <Wrapper className="flex justify-between items-center py-4">
        <div className="text-[0.9em]">mixura</div>
        <Dropdown dropdownRef={navbarMenu.ref}>
          <DropdownTrigger
            onClick={() => navbarMenu.setToggle(!navbarMenu.toggle)}>
            <div className="h-[10px] w-[30px] border-t border-b border-dark"></div>
          </DropdownTrigger>
          {navbarMenu.toggle && (
            <DropdownMenu>
              <div className="flex flex-col items-start gap-2">
                <button>New</button>
                <button>Save</button>
                <button>Open</button>
              </div>
              <div
                id="dropdown-item-group"
                className="flex justify-start border-t py-2">
                <button className="text-start">Create Card</button>
              </div>
            </DropdownMenu>)}
        </Dropdown>
      </Wrapper>
    </div>
  );
}
