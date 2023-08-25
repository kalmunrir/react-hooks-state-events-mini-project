import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const [tasksList, setTasksList] = useState(TASKS);
  const [category, setCategory] = useState(CATEGORIES[0]);

  function deleteTask(taskText) {
    console.log(tasksList);
    setTasksList(tasksList.filter((t) => t.text !== taskText));
  }
  function addTask(taskText, taskCategory) {
    setTasksList([...tasksList, {text: taskText, category: taskCategory}]);
  }

  function changeCategory(newCategory) {
    setCategory(newCategory);
  }
  
  const tasksToDisplay = tasksList.filter((task) => {
    if(category === "All") {
      return true;
    }

    return task.category === category;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} changeCategory={changeCategory}/>
      <NewTaskForm categories={CATEGORIES} addTask={addTask}/>
      <TaskList tasks={tasksToDisplay} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
