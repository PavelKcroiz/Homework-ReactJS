import React from "react";

const TodoSearchPanel = (props) => {
  const { searchValues } = props;

  const searchInputValue = (event) => {
    let term = event.target.value;
    searchValues(term);
  };
  return (
    <input
      className="form-control search-input"
      type="text"
      placeholder="Поиск"
      onInput={searchInputValue}
    />
  );
};

export default TodoSearchPanel;
