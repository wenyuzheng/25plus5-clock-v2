import { useEffect, useState, useRef } from "react";
import "./App.css";
import DisplayTime from "./Components/DisplayTime";
import audioFile from "./assets/audio/beep.mp3";
import LengthCard from "./Components/LengthCard";

const defaultBreakLength = 5;
const defaultSessionLength = 25;
const defaultTime = defaultSessionLength * 60;

function App() {
  const [time, setTime] = useState(2);
  const [start, setStart] = useState(false);
  const [breakLength, setBreakLength] = useState(defaultBreakLength);
  const [sessionLength, setSessionLength] = useState(defaultSessionLength);
  const [isSession, setIsSession] = useState(true);
  const beepRef = useRef(null);

  useEffect(() => {
    if (!start) {
      return;
    }
    if (time < 0) {
      beepRef.current.play();
      setTime(isSession ? breakLength * 60 : sessionLength * 60);
      setIsSession(!isSession);
    }

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
    setIsSession(true);
    setTime(defaultSessionLength * 60);
    setBreakLength(defaultBreakLength);
    setSessionLength(defaultSessionLength);
    beepRef.current.pause();
    beepRef.current.currentTime = 0;
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
    setTime(newSessionLength * 60);
  };

  const incrementSessionLength = () => {
    const newSessionLength = sessionLength + 1;
    if (newSessionLength > 60) return;
    setSessionLength(newSessionLength);
    setTime(newSessionLength * 60);
  };

  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div id="length-cards">
        <LengthCard
          name="Break"
          length={breakLength}
          decrement={decrementBreakLength}
          increment={incrementBreakLength}
        />
        <LengthCard
          name="Session"
          length={sessionLength}
          decrement={decrementSessionLength}
          increment={incrementSessionLength}
        />
      </div>
      <span id="timer-label">{isSession ? "Session" : "Break"}</span>
      <DisplayTime time={time} />
      <button id="start_stop" onClick={handleStartStop}>
        start_stop
      </button>
      <button id="reset" onClick={handleReset}>
        reset
      </button>
      <audio id="beep" src={audioFile} ref={beepRef} />
    </div>
  );
}

export default App;
