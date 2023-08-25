import React from "react";

function Task({task, deleteTask}) {

  function handleTaskDeleteBtnClick() {
    deleteTask(task.text)
  }

  return (
    <div className="task">
      <div className="label">{task[`category`]}</div>
      <div className="text">{task[`text`]}</div>
      <button className="delete" onClick={handleTaskDeleteBtnClick} > X </button>
    </div>
  );
}

export default Task;
