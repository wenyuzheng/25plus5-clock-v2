import "./css/Controls.css";

const Controls = ({ start, handleStartStop, handleReset }) => {
  return (
    <div id="controls">
      <button id="start_stop" onClick={handleStartStop}>
        {start ? "Pause" : "Start"}
      </button>
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Controls;
