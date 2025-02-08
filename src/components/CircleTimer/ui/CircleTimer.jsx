import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from "./CircleTimer.module.css";
import { useCountdown } from "react-countdown-circle-timer";

const CircleTimer = ({ duration }) => {
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes}:${seconds}`;
  };
  // const duration = 10;
  return (
    <CountdownCircleTimer
      isPlaying
      duration={duration}
      // colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      colors={["#1e08a8", "#1e08a8", "#1e08a8", "#1e08a8"]}
      colorsTime={[7, 5, 2, 0]}
      // colorsTime={[10, 1, 1, 0]}
      size={50}
      children={children}
      strokeWidth={4}
      trailColor="#A30000"
    ></CountdownCircleTimer>
  );
};

export default CircleTimer;
