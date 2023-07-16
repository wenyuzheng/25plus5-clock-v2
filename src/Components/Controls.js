import { Button } from "react-bootstrap";
import "./css/Controls.css";

const Controls = ({ start, handleStartStop, handleReset }) => {
  return (
    <div id="controls">
      <Button id="start_stop" variant="success" onClick={handleStartStop}>
        {start ? "Pause" : "Start"}
      </Button>
      <Button id="reset" variant="success" onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
};

export default Controls;
