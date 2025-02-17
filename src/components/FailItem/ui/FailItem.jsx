import React from "react";
import styled from "./FailItem.module.css";

const FailItem = ({ task }) => {
  return <p className={styled.failTask}>{task.title}</p>;
};

export default FailItem;
