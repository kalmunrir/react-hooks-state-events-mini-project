import React, {useState} from "react";

function NewTaskForm({categories, addTask}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("ALL");

  function handleTextChange(e) {
    setText(e.target.value);
  }
  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }
  
  function submitNewTaskHandler(e) {
    e.preventDefault();
    addTask(text, category);
  }
  
  return (
    <form className="new-task-form" on onSubmit={submitNewTaskHandler}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {
            categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
