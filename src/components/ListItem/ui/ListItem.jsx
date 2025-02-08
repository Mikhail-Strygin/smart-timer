import React from "react";
import styled from "./ListItem.module.css";
import CircleTimer from "../../CircleTimer/ui/CircleTimer";

const ListItem = ({ duration }) => {
  return (
    <>
      <div className={styled.taskWrapper}>
        <span>Задача 1</span>
        <CircleTimer duration={duration} />
        <div className={styled.taskConditionWrapper}>
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png"
            alt="check-mark-button-emoji"
          />

          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios-filled/50/pause--v1.png"
            alt="pause--v1"
          />
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/emoji/48/cross-mark-emoji.png"
            alt="cross-mark-emoji"
          />
        </div>
      </div>
      <div className={styled.taskWrapper}>
        <span>Задача 2</span>
        <CircleTimer duration={duration} />
        <div className={styled.taskConditionWrapper}>
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png"
            alt="check-mark-button-emoji"
          />

          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios-filled/50/pause--v1.png"
            alt="pause--v1"
          />
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/emoji/48/cross-mark-emoji.png"
            alt="cross-mark-emoji"
          />
        </div>
      </div>
    </>
  );
};

export default ListItem;
