import React from "react";
import TodoSearchPanel from "./TodoSearchPanel";
import TodoSearchBtn from "./TodoSearchBtn";

const TodoSearch = () => {
    return (
    <div className="search-panel d-flex">
        <TodoSearchPanel />
        <TodoSearchBtn />
    </div>
    );
};


export default TodoSearch;