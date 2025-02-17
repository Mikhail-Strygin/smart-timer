import React from "react";
import styled from "./ListItem.module.css";
import CircleTimer from "../../CircleTimer/ui/CircleTimer";
import Condition from "../../Condition/ui/Condition";

const ListItem = ({ task, onCompleted, onDelete, onFail, onToggle }) => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const changePlaying = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className={styled.taskWrapper}>
      <span>{task.title}</span>
      <CircleTimer task={task} isPlaying={isPlaying} onFail={onFail} />

      <Condition
        onCompleted={onCompleted}
        onDelete={onDelete}
        id={task.id}
        onToggle={onToggle}
        isPlaying={changePlaying}
      />
    </div>
  );
};

export default ListItem;
