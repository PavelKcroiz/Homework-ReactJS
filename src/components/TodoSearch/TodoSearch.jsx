import React from "react";
import TodoSearchPanel from "./TodoSearchPanel";
import TodoSearchBtn from "./TodoSearchBtn";
import "./style.css";

const TodoSearch = (props) => {
  const { searchItems, searchValues } = props;
  return (
    <div className="search-panel d-flex">
      <TodoSearchPanel searchValues={searchValues} />
      <TodoSearchBtn searchItems={searchItems} />
    </div>
  );
};

export default TodoSearch;
