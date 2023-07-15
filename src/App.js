import "./App.css";

function App() {
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
      <span id="time-left">25:00</span>
      <button id="start_stop">start_stop</button>
      <button id="reset">reset</button>
    </div>
  );
}

export default App;
