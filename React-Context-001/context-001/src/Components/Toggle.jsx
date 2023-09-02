import React, { useContext } from "react";
import { Theme } from "./Theme";
const Toggle = () => {
  const { theme, handleOnClick } = useContext(Theme);
  return (
    <div>
      
      <button
        className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"} border`}
        onClick={handleOnClick}
      >
        {theme === "dark" ? "Toggle theme to light " : "Toggle theme to dark"}
      </button>
    </div>
  );
};

export default Toggle;