import React from "react";
import Task from "./Task"

function TaskList( { tasks, onDelete }) {

  const taskItems = tasks.map((task) => {
    // console.log(task.text)
    return (
      <Task 
        key={task.text} 
        text={task.text} 
        category={task.category} 
        onDelete={onDelete}/>
    )
  })

  return (
    <div className="tasks">
      {taskItems}
    </div>
  );
}

export default TaskList;
