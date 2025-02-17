import React from "react";
import styled from "./CompletedItem.module.css";

const CompletedItem = ({ task }) => {
  return <p className={styled.completedTask}>{task.title}</p>;
};

export default CompletedItem;
