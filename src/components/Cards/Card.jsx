export default function Card() {
  return (
    <div id="card" className="break-inside-avoid flex flex-col gap-3 mb-10">
      <div id="card-image" className="h-[300px] bg-black/10"></div>
      <div id="card-details" className="px-2">
        <h4 className="text-[1.6em] font-[600] m-0 p-0">Lorem Ipsum</h4>
        <div className="flex flex-row gap-2 opacity-70">
          <a href="" className="text-[0.8em] m-0 p-0">
            #lorem
          </a>
          <a href="" className="text-[0.8em] m-0 p-0">
            #ipsum
          </a>
        </div>
      </div>
    </div>
  );
}
