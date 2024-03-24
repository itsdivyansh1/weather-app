import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-gradient-to-l from-[#C3E2FF] to-[#fff] w-screen h-screen">
      <NavBar />
      <Hero />
    </div>
  );
};

export default App;
