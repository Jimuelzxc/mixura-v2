import "./App.css";

import DefaultLayout from "@/layouts/DefaultLayout";
import Wrapper from "@/layouts/Wrapper";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InputMain from "@/components/InputMain";
import CardList from "@/components/Cards/CardList";
import { useEffect, useState } from "react";

function App() {
  const [tabs, setTabs] = useState("")
  useEffect(() => {console.log(tabs)},[tabs])
  return (
    <DefaultLayout>
      <Navbar />
      <Wrapper className="mt-12">
        <Hero />
        <InputMain />
        <div id="tabs-dropdown" className="flex justify-between py-4 mt-5">
          <div id="tabs" className="flex flex-row gap-4">
            <button onClick={() => setTabs("all")}>All</button>
            <button onClick={() => setTabs("images")}>Images</button>
            <button onClick={() => setTabs("videos")}>Videos</button>
          </div>
          <div id="dropdown" className="flex flex-row gap-4">
            <button>Filter</button>
            <button>Cards</button>
          </div>
        </div>
        <CardList />
      </Wrapper>
    </DefaultLayout>
  );
}

export default App;
