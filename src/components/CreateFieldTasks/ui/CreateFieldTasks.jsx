import styled from "./CreateFieldTasks.module.css";
import { useState } from "react";
import React from "react";

const CreateFieldTasks = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const clearInput = () => {
    setDuration("");
    setTitle("");
  };

  return (
    <div className={styled.createFieldTasksWrapper}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        className={styled.createFieldTasksInput}
        type="text"
        placeholder="Введите задачу"
        value={title}
      />
      <input
        onChange={(e) => setDuration(e.target.value)}
        value={duration}
        className={styled.createFieldTasksInput}
        type="text"
        placeholder="Введите время (в минутах)"
      />
      <button
        onClick={() => onClick(title, duration)}
        className={styled.createFieldTasksBtn}
        type="button"
      >
        Добавить
      </button>
    </div>
  );
};

export default CreateFieldTasks;
