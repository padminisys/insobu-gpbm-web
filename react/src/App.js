import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App">
          <Button type="primary">Click Me</Button>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>AWS powers deployment of this application.</h3>
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
