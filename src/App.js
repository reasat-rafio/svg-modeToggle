import React from "react";
import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import Animation from "../src/Animation";

function App() {
  const currentMode = () => {
    const mode = JSON.parse(localStorage.getItem("dark"));
    return mode;
  };
  const [dark, setDark] = useState(currentMode());
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  return (
    <div
      style={{ backgroundColor: `${dark ? "black" : "white"}` }}
      className="App"
    >
      <div className="background">
        <Animation dark={dark} />
      </div>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        {dark ? "on" : "off"}
      </button>
    </div>
  );
}

export default App;
