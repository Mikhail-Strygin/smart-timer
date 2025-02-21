import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CircleTimer = ({ task, isPlaying, onFail }) => {
  const children = ({ remainingTime }) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    // if (hours <= 0 && minutes <= 0 && seconds <= 0) {
    //   onFail(task.id);
    // }
    useEffect(() => {
      remainingTime <= 0 && onFail(task.id);
    }, [remainingTime]);
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={task.duration * 60}
      // colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      colors={["#1e08a8", "#1e08a8", "#1e08a8", "#1e08a8"]}
      colorsTime={[7, 5, 2, 0]}
      // colorsTime={[10, 1, 1, 0]}
      size={58}
      children={children}
      strokeWidth={3}
      trailColor="#A30000"
    ></CountdownCircleTimer>
  );
};

export default CircleTimer;
