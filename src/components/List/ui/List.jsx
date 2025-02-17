import styled from "./List.module.css";
import React from "react";
import ListItem from "../../ListItem/ui/ListItem";

const List = ({ tasks, onCompleted, onDelete, onFail }) => {
  const items = tasks.map((task) =>
    !task.fail & !task.completed ? (
      <ListItem
        key={task.id}
        task={task}
        onCompleted={onCompleted}
        onDelete={onDelete}
        onFail={onFail}
      />
    ) : (
      ""
    )
  );
  return <ul className={styled.tasksList}>{items}</ul>;
};

export default List;
