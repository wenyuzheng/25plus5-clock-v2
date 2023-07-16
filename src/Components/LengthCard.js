import { Button } from "react-bootstrap";
import "./css/LengthCard.css";

const LengthCard = ({ name, length, decrement, increment }) => {
  const lowercaseName = name.toLowerCase();

  return (
    <div id="length-card">
      <div id={lowercaseName + "-label"}>{name} Length</div>
      <div id="adjust-card">
        <Button
          variant="success"
          id={lowercaseName + "-decrement"}
          onClick={decrement}
        >
          -
        </Button>
        <span id={lowercaseName + "-length"}>{length}</span>
        <Button
          variant="success"
          id={lowercaseName + "-increment"}
          onClick={increment}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default LengthCard;
