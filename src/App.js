import { useEffect, useState } from "react";
import "./App.css";
import DisplayTime from "./Components/DisplayTime";

const defaultBreakLength = 5;
const defaultSessionLength = 25;
const defaultTime = defaultSessionLength * 60;

function App() {
  const [time, setTime] = useState(defaultTime);
  const [start, setStart] = useState(false);
  const [breakLength, setBreakLength] = useState(defaultBreakLength);
  const [sessionLength, setSessionLength] = useState(defaultSessionLength);

  useEffect(() => {
    if (!start || time === 0) return;

    const countdownOnce = setTimeout(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearTimeout(countdownOnce);
  }, [time, setTime, start]);

  const handleStartStop = () => {
    setStart(!start);
  };

  const handleReset = () => {
    setStart(false);
    setTime(defaultSessionLength * 60);
    setBreakLength(defaultBreakLength);
    setSessionLength(defaultSessionLength);
  };

  const decrementBreakLength = () => {
    const newBreakLength = breakLength - 1;
    if (newBreakLength <= 0) return;
    setBreakLength(newBreakLength);
  };

  const incrementBreakLength = () => {
    const newBreakLength = breakLength + 1;
    if (newBreakLength > 60) return;
    setBreakLength(newBreakLength);
  };

  const decrementSessionLength = () => {
    const newSessionLength = sessionLength - 1;
    if (newSessionLength <= 0) return;
    setSessionLength(newSessionLength);
  };

  const incrementSessionLength = () => {
    const newSessionLength = sessionLength + 1;
    if (newSessionLength > 60) return;
    setSessionLength(newSessionLength);
  };

  return (
    <div className="App">
      <div id="break-label">Break Length</div>
      <div id="session-label">Session Length</div>
      <button id="break-decrement" onClick={decrementBreakLength}>
        Break-
      </button>
      <button id="session-decrement" onClick={decrementSessionLength}>
        Session-
      </button>
      <button id="break-increment" onClick={incrementBreakLength}>
        Break+
      </button>
      <button id="session-increment" onClick={incrementSessionLength}>
        Session+
      </button>
      <span id="break-length">{breakLength}</span>
      <span id="session-length">{sessionLength}</span>
      <span id="timer-label">Session</span>
      <DisplayTime time={time} />
      <button id="start_stop" onClick={handleStartStop}>
        start_stop
      </button>
      <button id="reset" onClick={handleReset}>
        reset
      </button>
    </div>
  );
}

export default App;
