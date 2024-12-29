export default function DefaultLayout({ classname, children }) {
  return (
    <div id="default-layout" className={`h-screen ${children}`}>
      {children}
    </div>
  );
}
