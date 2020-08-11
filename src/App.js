import React, { useEffect, useState } from "react";
import "./style.css";
import Animation from "./Animation";

function App() {
  const currentMode = () => {
    const mode = JSON.parse(localStorage.getItem("dark"));
    return mode;
  };

  const [dark, setDark] = useState(currentMode());
  console.log(dark);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  return (
    <div style={{ background: `${dark ? "black" : "white"}` }} className="App">
      <div className="background">
        <Animation dark={dark} />
      </div>
      <button onClick={() => setDark((prevDark) => !prevDark)}>Click</button>
    </div>
  );
}

export default App;
