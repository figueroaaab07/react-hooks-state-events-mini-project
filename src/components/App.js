import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// import { useImperativeHandle } from "react/cjs/react.production.min";
// import { useState } from "react/cjs/react.production.min";
// console.log("Here's the data you're working with");
// console.log(CATEGORIES, TASKS);

function App() {
  const initialStateTasks = [...TASKS];
  const initialStateCategories = [...CATEGORIES];
  const [tasks, setTasks] = useState(initialStateTasks);
  const [fullTasks, setFullTasks] = useState(initialStateTasks);
  const [categories] = useState(initialStateCategories);
  const [activeButton, setActiveButton] = useState("");
  
  function onClickX(event) {
    const detail = event.target.parentElement.querySelector(".text");
    const updatedTasks = tasks.filter(task => task.text !== detail.innerText);
    setTasks(updatedTasks);
    const updatedFullTasks = fullTasks.filter(task => task.text !== detail.innerText);
    setFullTasks(updatedFullTasks);
  }

  function onClickFilter(event) {
    const selectedButton = event.target;
    const categoryFiltered = selectedButton.innerText;
    setActiveButton(categoryFiltered);
    const updatedTasks = fullTasks.filter(task => {
      if (categoryFiltered === "All") {
        return fullTasks;
      } else {
        return task.category === categoryFiltered;
      }
    })
    setTasks(updatedTasks);
  }

  function onAddTask(taskObj) {
    setTasks([...tasks, taskObj]);
    fullTasks.push(taskObj);
    setFullTasks(fullTasks);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onClickHandler={onClickFilter} activeButton={activeButton} />
      <NewTaskForm categories={categories} onTaskFormSubmit={onAddTask} />
      <TaskList tasks={tasks} onClickHandler={onClickX} />
    </div>
  );
}

export default App;
