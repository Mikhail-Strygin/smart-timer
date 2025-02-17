import styled from "./Completed.module.css";
import React from "react";
import CompletedItem from "../../CompletedItem/ui/CompletedItem";

const Completed = ({ tasks }) => {
  // console.log(tasks);
  const items = tasks.map((task) =>
    task.completed ? <CompletedItem key={task.id} task={task} /> : ""
  );
  // console.log(items);
  return (
    <div className={styled.completedTasksWrapper}>
      <h2 className={styled.header}>Выполненные</h2>
      {items}
    </div>
  );
};

export default Completed;
