import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleClick = () => {
    setDarkTheme((theme) => !theme);
    console.log(darkTheme);
  };

  return (
    <div
      className={
        darkTheme
          ? "bg-gradient-to-l from-[#C3E2FF] to-[#fff] w-screen h-screen max-md:bg-gradient-to-b"
          : "bg-gradient-to-l from-[#6f6f6f] to-[#fff] w-screen h-screen max-md:bg-gradient-to-b "
      }
    >
      <NavBar theme={darkTheme} handleButtonClick={toggleClick} />
      <Hero />
    </div>
  );
};

export default App;
