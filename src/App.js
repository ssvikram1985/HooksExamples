import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("vikram");

  return (
    <div className="App">
      {name}

      <button onClick={() => setName("VIKRAM SETHU MADHAVAN")}>
        Name Change
      </button>

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
