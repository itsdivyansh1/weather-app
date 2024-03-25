import React, { useState } from "react";
import SwitchTheme from "./SwitchTheme";

const NavBar = ({ theme, handleButtonClick }) => {
  return (
    <div className="flex justify-around items-center pt-8">
      <h1
        className={
          theme
            ? "text-2xl font-bold max-md:text-black"
            : "text-2xl font-bold max-md:text-white"
        }
      >
        Weather App
      </h1>
      <SwitchTheme theme={theme} handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default NavBar;
