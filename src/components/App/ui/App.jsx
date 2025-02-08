import { useState } from "react";
import styled from "./App.module.css";
import CreateFieldTasks from "../../CreateFieldTasks/ui/CreateFieldTasks";
import List from "../../List/ui/List";
import Fail from "../../Fail/ui/Fail";
import Completed from "../../Completed/ui/Completed";

function App() {
  const duration = 10;
  const [tasks, setTask] = useState([]);
  // Проверяем правильность заполнения названия задачи и времени выполнения
  const checkParametrs = (title, duration) => {
    if (title != "" && Number(duration)) {
      console.log(Number(duration));
      //если всё правильно добавляем задачу
      addTask(title, duration);
    } else {
      alert("Проверьте правильность ввода данных");
    }
  };
  //Функция добавления задачи к уже существующим
  const addTask = (title, duration) => {
    let id;
    if (tasks.length > 0) {
      id = tasks[tasks.length - 1].id + 1;
    } else if (tasks.length == 0) {
      id = tasks.length;
    }
    const newTask = { id: id, title: title, duration: duration };
    const newTasks = [...tasks];
    newTasks.push(newTask);
    setTask(newTasks);
    console.log(newTasks);
  };

  return (
    <div>
      <CreateFieldTasks onClick={checkParametrs} />
      <List duration={duration} />
      <div className={styled.condition}>
        <Completed />
        <Fail />
      </div>
    </div>
  );
}

export default App;
