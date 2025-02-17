import React from "react";
import styled from "./Condition.module.css";

const Condition = ({ id, onCompleted, onDelete, isPlaying }) => {
  // По клику обработка через useState на смену картинки
  const [toggle, setToggle] = React.useState(false);

  const handlerPlaying = () => {
    isPlaying();
  };

  return (
    <div className={styled.taskConditionWrapper}>
      <button
        className={styled.taskConditionBtn}
        onClick={() => onCompleted(id)}
      >
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png"
          alt="check-mark-button-emoji"
        />
      </button>
      <button
        className={styled.taskConditionBtn}
        onClick={() => {
          setToggle(!toggle);
          handlerPlaying();
        }}
        // onClick={() => {
        //   onFail(id);
        //   objToggle = true;
        // }}
      >
        <img
          className={toggle ? styled.hidden : styled.active}
          width="32"
          height="32"
          src="https://img.icons8.com/ios-filled/50/pause--v1.png"
          alt="pause--v1"
        />
        <img
          className={toggle ? styled.active : styled.hidden}
          width="32"
          height="32"
          src="https://img.icons8.com/material-rounded/48/video.png"
          alt="video"
        />
      </button>
      <button
        className={styled.taskConditionBtn}
        onClick={() => {
          onDelete(id);
        }}
      >
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/emoji/48/cross-mark-emoji.png"
          alt="cross-mark-emoji"
        />
      </button>
    </div>
  );
};

export default Condition;
