import React from "react";

import Hero from "./components/Hero";
import Services from "./components/services";
import About from "./about/page";
import Clients from "./components/Clients";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <div className="relative top-12">
      <Hero />
      <div className="">
        <About />
      </div>

      <Services />
      <Reviews />
      <Clients />
    </div>
  );
};

export default App;
