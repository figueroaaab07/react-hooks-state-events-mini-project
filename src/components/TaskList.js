import React from "react";
import { v4 as uuid } from "uuid";
import Task from "./Task"

function TaskList({tasks, onClickHandler}) {
  const taskDisplay = tasks.map(task => <Task key={uuid()} category={task.category} text={task.text} clickHandler={onClickHandler} />);
  
  return (
    <div className="tasks">
      {taskDisplay}
    </div>
  );
}

export default TaskList;
