export default function Wrapper({ classname, children }) {
  return (
    <div id="wrapper" className={`mx-[50px] ${classname}`}>
      {children}
    </div>
  );
}
