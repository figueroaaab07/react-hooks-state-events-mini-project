import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [itemText, setItemText] = useState("");
  const [itemCategory, setItemCategory] = useState("");

  const categoriesOption = categories.map(categorie => {
    if (!(categorie === "All")) {
      return (<option key={categorie}>{categorie}</option>);
    } else {
      return null;
    }
  });

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      text: itemText,
      category: itemCategory,
    };
    onTaskFormSubmit(newTask);
  }

  function handleSelect(event) {
    setItemCategory(event.target.value);
  }

  function handleChange(event) {
    setItemText(event.target.value);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={itemText} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={itemCategory} onChange={handleSelect} >
          {categoriesOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
