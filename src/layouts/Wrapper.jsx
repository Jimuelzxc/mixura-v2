export default function Wrapper({ className, children }) {
  return (
    <div id="wrapper" className={`mx-[50px] ${className}`}>
      {children}
    </div>
  );
}
