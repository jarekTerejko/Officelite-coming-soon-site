import React from "react";
import { useCountdown } from "../../hooks/useCountdown";
import Counter from "../Counter/Counter";
import { date, nowInMs, futureTimeInMs } from "../../public/data";

const CountdownTimer = () => {
  const timeStr = new Date(futureTimeInMs + nowInMs).toUTCString().slice(4, 16);

  const [days, hours, minutes, seconds] = useCountdown(date);

  return (
    <>
      {days + hours + minutes + seconds <= 0 ? (
        "Expired Msg"
      ) : (
        <Counter
          timeStr={timeStr}
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      )}
    </>
  );
};

export default CountdownTimer;
