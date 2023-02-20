import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code style="background-color: rgba(240, 179, 101, 0.3); border-radius: 5px;">src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode><App /></React.StrictMode>);

