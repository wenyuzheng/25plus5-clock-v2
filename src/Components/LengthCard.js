import "./css/LengthCard.css";

const LengthCard = ({ name, length, decrement, increment }) => {
  const lowercaseName = name.toLowerCase();

  return (
    <div id="length-card">
      <div id={lowercaseName + "-label"}>{name} Length</div>
      <div id="adjust-card">
        <button id={lowercaseName + "-decrement"} onClick={decrement}>
          -
        </button>
        <span id={lowercaseName + "-length"}>{length}</span>
        <button id={lowercaseName + "-increment"} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default LengthCard;
