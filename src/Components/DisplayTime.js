const DisplayTime = ({ time }) => {
  return (
    <span id="time-left">
      {Math.floor(time / 60)}:{time % 60}
    </span>
  );
};

export default DisplayTime;
