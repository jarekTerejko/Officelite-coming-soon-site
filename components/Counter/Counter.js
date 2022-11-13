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

const Counter = ({ days, hours, minutes, seconds, timeStr }) => {

  const leadingZero = (x) => {
    return x < 10 ? `0${x}` : x;
  };

  return (
    <>
      <CounterWrapper>
        <CounterHeading>
          coming <CounterHeadingTimeStr>{timeStr}</CounterHeadingTimeStr>
        </CounterHeading>
        <CounterBoxesWrapper>
          <CounterBox>
            <CounterDigit>{leadingZero(days)}</CounterDigit>
            <CounterSpan>days</CounterSpan>
          </CounterBox>
          <CounterBox>
            <CounterDigit>{leadingZero(hours)}</CounterDigit>
            <CounterSpan>hours</CounterSpan>
          </CounterBox>
          <CounterBox>
            <CounterDigit>{leadingZero(minutes)}</CounterDigit>
            <CounterSpan>min</CounterSpan>
          </CounterBox>
          <CounterBox>
            <CounterDigit>{leadingZero(seconds)}</CounterDigit>
            <CounterSpan>sec</CounterSpan>
          </CounterBox>
        </CounterBoxesWrapper>
      </CounterWrapper>
    </>
  );
};

export default Counter;
