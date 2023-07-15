const padZero = (time) => {
  return time < 10 ? `0${time}` : time;
};

const DisplayTime = ({ time }) => {
  const minute = Math.floor(time / 60);
  const second = time % 60;

  return (
    <span id="time-left">
      {padZero(minute)}:{padZero(second)}
    </span>
  );
};

export default DisplayTime;
