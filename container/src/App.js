import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

import Counter from "counter/Counter";
import { mount } from "message/Message";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, { msg: `A message from ReactJS - counter: ${counter}` });
  }, [counter]);

  return (
    <div
      className="App"
      style={{ border: "1px solid orange", borderRadius: 5 }}
    >
      <div style={{ color: "orange" }}>Container: ReactJS</div>
      <header className="App-header">
        <Counter counter={counter} setCounter={setCounter} />
        <div ref={ref} />
      </header>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
