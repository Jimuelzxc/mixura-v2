export default function Dropdown({className, dropdownRef, children }) {
  return (
    <div
      ref={dropdownRef}
      id="dropdown"
      className={`flex flex-col items-end relative ${className}`}
    >
      {children}
    </div>
  );
}
