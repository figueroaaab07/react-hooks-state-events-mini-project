import React from "react";

function CategoryFilter({categories, onClickHandler, activeButton}) {
  const categoriesDisplay = categories.map(categorie => <button key={categorie} className={activeButton===categorie ? "selected" : ""} onClick={onClickHandler}>{categorie}</button>);
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesDisplay}
    </div>
  );
}

export default CategoryFilter;
