import React from "react";
import TodoTitleName from "./TodoTitleName";
import TodoTitleLikes from "./TodoTitleLikes";

const TodoTitle = () => {
    return (
    <div className="app-header d-flex">
      <TodoTitleName />
      <TodoTitleLikes />
    </div>
    );
};


export default TodoTitle;