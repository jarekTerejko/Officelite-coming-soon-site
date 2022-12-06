import React from "react";
import {
  CounterBox,
  CounterBoxesWrapper,
  CounterDigit,
  CounterHeading,
  CounterHeadingTimeStr,
  CounterSpan,
  CounterWrapper,
} from "./CounterElements";

const Counter = ({
  days,
  hours,
  minutes,
  seconds,
  timeStr,
  counterClassName,
}) => {
  const leadingZero = (x) => {
    return x < 10 ? `0${x}` : x;
  };

  return (
    <>
      <CounterWrapper>
        <CounterHeading className={counterClassName}>
          coming <CounterHeadingTimeStr>{timeStr}</CounterHeadingTimeStr>
        </CounterHeading>
        <CounterBoxesWrapper>
          <CounterBox className={counterClassName}>
            <CounterDigit className={counterClassName}>
              {leadingZero(days)}
            </CounterDigit>
            <CounterSpan>days</CounterSpan>
          </CounterBox>
          <CounterBox className={counterClassName}>
            <CounterDigit className={counterClassName}>
              {leadingZero(hours)}
            </CounterDigit>
            <CounterSpan>hours</CounterSpan>
          </CounterBox>
          <CounterBox className={counterClassName}>
            <CounterDigit className={counterClassName}>
              {leadingZero(minutes)}
            </CounterDigit>
            <CounterSpan>min</CounterSpan>
          </CounterBox>
          <CounterBox className={counterClassName}>
            <CounterDigit className={counterClassName}>
              {leadingZero(seconds)}
            </CounterDigit>
            <CounterSpan>sec</CounterSpan>
          </CounterBox>
        </CounterBoxesWrapper>
      </CounterWrapper>
    </>
  );
};

export default Counter;
