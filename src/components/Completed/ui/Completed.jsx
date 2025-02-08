import styled from "./Completed.module.css";
import React from "react";

const Completed = () => {
  return (
    <div className={styled.completedTasksWrapper}>
      <h2>Выполненные</h2>
      <p className={styled.completedTask}>Встать на работу</p>
      <p className={styled.completedTask}>Отвести ребенка в садик</p>
    </div>
  );
};

export default Completed;
