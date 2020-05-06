import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./style.css";

const TodoList = (props) => {
  const { todos, myFunc, likeItem } = props;

  return (
    <ul className="app-list list-group">
      {todos.map((title) => (
        <TodoListItem
          key={title.id}
          title={title.title}
          myFunc={() => {
            myFunc(title.id);
          }}
          likeItem={() => {
            likeItem(title.id);
          }}
        />
      ))}
    </ul>
  );
};

export default TodoList;
