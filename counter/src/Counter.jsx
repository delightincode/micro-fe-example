import React from "react";

const Counter = ({ counter, setCounter }) => {
  return (
    <div style={{ border: '1px solid blue', borderRadius: 5, padding: 10 }}>
      <div style={{ color: "blue" }}>Counter: ReactJS</div>
      <div style={{ display: "flex", gap: 50, alignItems: "center", justifyContent: "space-around" }}>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
      </div>
    </div>
  );
};

export default Counter;
