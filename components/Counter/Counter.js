import React from "react";
import { useRouter } from "next/router";
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

  const router = useRouter();

  return (
    <>
      <CounterWrapper>
        <CounterHeading
          className={router.pathname === "/" ? "" : "counter-signup"}
        >
          coming <CounterHeadingTimeStr>{timeStr}</CounterHeadingTimeStr>
        </CounterHeading>
        <CounterBoxesWrapper>
          <CounterBox
            className={router.pathname === "/" ? "" : "counter-signup"}
          >
            <CounterDigit
              className={router.pathname === "/" ? "" : "counter-signup"}
            >
              {leadingZero(days)}
            </CounterDigit>
            <CounterSpan>days</CounterSpan>
          </CounterBox>
          <CounterBox
            className={router.pathname === "/" ? "" : "counter-signup"}
          >
            <CounterDigit
              className={router.pathname === "/" ? "" : "counter-signup"}
            >
              {leadingZero(hours)}
            </CounterDigit>
            <CounterSpan>hours</CounterSpan>
          </CounterBox>
          <CounterBox
            className={router.pathname === "/" ? "" : "counter-signup"}
          >
            <CounterDigit
              className={router.pathname === "/" ? "" : "counter-signup"}
            >
              {leadingZero(minutes)}
            </CounterDigit>
            <CounterSpan>min</CounterSpan>
          </CounterBox>
          <CounterBox
            className={router.pathname === "/" ? "" : "counter-signup"}
          >
            <CounterDigit
              className={router.pathname === "/" ? "" : "counter-signup"}
            >
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
