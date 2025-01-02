import { useState } from "react";

export default function RandomThing() {
  const [searchInput, setSearchInput] = useState("");

  const data = [
    {
      id: 1,
      title: "faux 3d things",
      tags: ["faux3d", "motiongraphics"],
    },
    {
      id: 2,
      title: "typography cute style",
      tags: ["typography", "cute"],
    },
    {
      id: 3,
      title: "random things",
      tags: ["random", "motiongraphics"],
    },
  ];
  const searchItems = data.filter((item) =>
    item.tags.some((tag) => tag.toLowerCase().includes(searchInput.toLowerCase()))
  );
  return (
    <div className="flex flex-row gap-10">
      <input
        type="text"
        className="border border-slate-900 m-10 p-2"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <div>
        {searchItems.map((item) => {
          return (
            <div className="my-4">
              <div>{item.title}</div>
              <div className="flex flex-row gap-2 text-[0.8em] text-blue-600">
                {item.tags.map((tag) => (
                  <div>#{tag}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
