import React from "react";
import "./App.css";
import { SizeControls } from "./SizeControls";
import { Stopwatch } from "./Stopwatch";
import { StopwatchControls } from "./StopwatchControls";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <SizeControls />
        <Stopwatch />
        <StopwatchControls />
      </div>
    </div>
  );
}

export default App;
