import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    itemText: "",
    itemCategory: "Code",
  });

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
      text: formData.itemText,
      category: formData.itemCategory
    };
    onTaskFormSubmit(newTask);
  }

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="itemText" value={formData.itemText} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="itemCategory" value={formData.itemCategory} onChange={handleChange} >
          {categoriesOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
