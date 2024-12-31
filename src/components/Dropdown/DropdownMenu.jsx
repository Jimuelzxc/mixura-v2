export default function DropdownMenu({className, children}) {
  return (
    <div
      id="dropdown-menu"
      className={`border p-2 absolute translate-y-6 px-5 flex flex-col gap-6 w-[150px] py-2 ${className}`}>
        {children}
    </div>
  );
}
