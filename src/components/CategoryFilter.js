import React from "react";
// import { v4 as uuid } from "uuid";

function CategoryFilter({categories, onClickHandler, isSelected, setIsSelected}) {
  // console.log(categories);
  const categoriesDisplay = categories.map(categorie => <button key={categorie} className={categorie===isSelected ? "selected" : ""} onClick={onClickHandler}>{categorie}</button>);
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesDisplay}
    </div>
  );
}

export default CategoryFilter;
