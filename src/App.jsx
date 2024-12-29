import "./App.css";


import DefaultLayout from "@/layouts/DefaultLayout";
import Wrapper from "@/layouts/Wrapper";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InputMain from "@/components/InputMain";
import CardList from "@/components/Cards/CardList";

function App() {
  return (
    <DefaultLayout>
      <Wrapper>
        <Navbar />
        <Hero />
        <InputMain />
        <div id="tabs-dropdown" className="flex justify-between py-4 mt-5">
          <div id="tabs" className="flex flex-row gap-4">
            <button>All</button>
            <button>Images</button>
            <button>Videos</button>
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
