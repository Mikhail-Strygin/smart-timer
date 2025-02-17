import FailItem from "../../FailItem/ui/FailItem";
import styled from "./Fail.module.css";
import React from "react";

const Fail = ({ tasks }) => {
  const items = tasks.map((task) =>
    task.fail ? <FailItem key={task.id} task={task} /> : ""
  );
  return (
    <>
      <div className={styled.failTasksWrapper}>
        <h2 className={styled.header}>Невыполненные</h2>
        {items}
      </div>
    </>
  );
};

export default Fail;
