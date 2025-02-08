import styled from "./Fail.module.css";
import React from "react";

const Fail = () => {
  return (
    <>
      <div className={styled.failTasksWrapper}>
        <h2>Невыполненные</h2>
        <p className={styled.failTask}>Найти клад</p>
      </div>
    </>
  );
};

export default Fail;
