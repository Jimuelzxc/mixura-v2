export default function DropdownTrigger({className, onClick, children }) {
  return (
    <div>
      <button id="dropdown-trigger" className={`${className}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
