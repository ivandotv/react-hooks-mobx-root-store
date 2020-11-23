import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import { useRootStore } from "./providers/RootStoreProvider";

export const StopwatchControls = observer(function StopwatchControls() {
  const { stopwatchStore: clockStore } = useRootStore();

  const start = useCallback(() => {
    return clockStore.start();
  }, [clockStore]);

  const stop = useCallback(() => {
    return clockStore.stop();
  }, [clockStore]);

  const pause = useCallback(() => {
    return clockStore.pause();
  }, [clockStore]);

  const resume = useCallback(() => {
    return clockStore.resume();
  }, [clockStore]);

  return (
    <div className="buttons-wrap">
      <button
        disabled={
          clockStore.state === "STARTED" || clockStore.state === "PAUSED"
        }
        onClick={start}
      >
        START
      </button>
      <button disabled={clockStore.state === "STOPPED"} onClick={stop}>
        STOP
      </button>
      <button
        disabled={
          clockStore.state === "STOPPED" || clockStore.state === "PAUSED"
        }
        onClick={pause}
      >
        PAUSE
      </button>
      <button
        disabled={
          clockStore.state === "STARTED" || clockStore.state === "STOPPED"
        }
        onClick={resume}
      >
        RESUME
      </button>
    </div>
  );
});
