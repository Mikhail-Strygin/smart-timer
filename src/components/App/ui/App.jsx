import { useState } from "react";
import styled from "./App.module.css";
import CreateFieldTasks from "../../CreateFieldTasks/ui/CreateFieldTasks";
import List from "../../List/ui/List";
import Fail from "../../Fail/ui/Fail";
import Completed from "../../Completed/ui/Completed";

function App() {
  const [tasks, setTasks] = useState([]);

  // Проверяем правильность заполнения названия задачи и времени выполнения
  const checkParametrs = (title, duration) => {
    if (title != "" && Number(duration) && Number(duration >= 0) {
      // console.log(Number(duration));
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
    const newTask = {
      id: id,
      title: title,
      duration: duration,
      completed: false,
      fail: false,
    };
    const newTasks = [...tasks];
    newTasks.push(newTask);
    setTasks(newTasks);
    // console.log(newTasks);
  };
  const completedHandler = (id) => {
    const ind = tasks.findIndex((item) => {
      return item.id == id;
    });
    const newTasks = [...tasks];
    newTasks[ind].completed = !newTasks[ind].completed;
    setTasks(newTasks);
  };
  const deleteHandler = (id) => {
    const ind = tasks.findIndex((item) => {
      return item.id == id;
    });
    const newTasks = [...tasks];
    newTasks.splice(ind, 1);
    setTasks(newTasks);
  };

  const failHandler = (id) => {
    const ind = tasks.findIndex((item) => {
      return item.id == id;
    });
    const newTasks = [...tasks];
    console.log(newTasks);
    if (newTasks[ind].fail == false) {
      newTasks[ind].fail = true;
      setTasks(newTasks);
    }
  };
  return (
    <div>
      <CreateFieldTasks onClick={checkParametrs} />
      <List
        tasks={tasks}
        onCompleted={completedHandler}
        onDelete={deleteHandler}
        onFail={failHandler}
      />
      <div className={styled.condition}>
        <Completed tasks={tasks} />
        <Fail tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
