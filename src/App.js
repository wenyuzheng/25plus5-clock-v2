import { useEffect, useState, useRef } from "react";
import "./App.css";
import DisplayTime from "./Components/DisplayTime";

function App() {
  const [time, setTime] = useState(25 * 60);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;

    const countdownOnce = setTimeout(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearTimeout(countdownOnce);
  }, [time, setTime, start]);

  const handleStart = () => {
    setStart(true);
  };

  return (
    <div className="App">
      <div id="break-label">Break Length</div>
      <div id="session-label">Session Length</div>
      <button id="break-decrement">Break-</button>
      <button id="session-decrement">Session-</button>
      <button id="break-increment">Break+</button>
      <button id="session-increment">Session+</button>
      <span id="break-length">5</span>
      <span id="session-length">25</span>
      <span id="timer-label">Session</span>
      <DisplayTime time={time} />
      <button id="start_stop" onClick={handleStart}>
        start_stop
      </button>
      <button id="reset">reset</button>
    </div>
  );
}

export default App;
