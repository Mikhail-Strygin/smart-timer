import "./List.module.css";
import React from "react";
import ListItem from "../../ListItem/ui/ListItem";

const List = ({ duration }) => {
  return <ListItem duration={duration} />;
};

export default List;
