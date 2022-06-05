import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// import { useState } from "react/cjs/react.production.min";
// console.log("Here's the data you're working with");
// console.log(CATEGORIES, TASKS);

function App() {
  const initialStateTasks = TASKS;
  const initialStateCategories = CATEGORIES;
  const [tasks, setTasks] = useState(initialStateTasks);
  const [categories, setCategories] = useState(initialStateCategories);
  const [isSelected, setIsSelected] = useState(false);

  function onClickX(event) {
    const detail = event.target.parentElement.querySelector(".text");
    const updatedTasks = tasks.filter(task => task.text !== detail.innerText);
    setTasks(updatedTasks);
  }

  function onClickFilter(event) {
    const selectedButton = event.target;
    const categoryFiltered = selectedButton.innerText;
    setIsSelected(!isSelected);
    const updatedTasks = tasks.filter(task => {
      if (categoryFiltered === "All") {
        return true;
      } else {
        return task.category === categoryFiltered;
      }

    })
    setTasks(updatedTasks);
  }

  function onAddTask(taskObj) {
    setTasks([...tasks, taskObj]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onClickHandler={onClickFilter} isSelected={isSelected} setIsSelected={setIsSelected}/>
      <NewTaskForm categories={categories} onTaskFormSubmit={onAddTask}/>
      <TaskList tasks={tasks} onClickHandler={onClickX} />
    </div>
  );
}

export default App;
