import React from "react";
import "./App.css";
import { Stopwatch } from "./Stopwatch";
import { RootStoreProvider } from "./providers/RootStoreProvider";
import { SizeControls } from "./SizeControls";
import { StopwatchControls } from "./StopwatchControls";

function App() {
  return (
    <RootStoreProvider>
      <div className="App">
        <div className="App-header">
          <SizeControls />
          <Stopwatch />
          <StopwatchControls />
        </div>
      </div>
    </RootStoreProvider>
  );
}

export default App;
