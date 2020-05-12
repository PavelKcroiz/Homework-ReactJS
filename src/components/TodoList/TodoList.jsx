import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./style.css";

const TodoList = (props) => {
  const { todos, onToggleLike, onToggleImp, onDeleteItem } = props;

  return (
    <ul className="app-list list-group">
      {todos.map((title) => (
        <TodoListItem
          key={title.id}
          title={title.title}
          important={title.important}
          like={title.like}
          onToggleLike={() => {
            onToggleLike(title.id);
          }}
          onToggleImp={() => {
            onToggleImp(title.id);
          }}
          onDeleteItem={() => {
            onDeleteItem(title.id);
          }}
        />
      ))}
    </ul>
  );
};

export default TodoList;
