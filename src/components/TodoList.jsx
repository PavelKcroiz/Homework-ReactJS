import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
    const {todos} = props;
   
    return (
        <ul className="app-list list-group">
            {
                todos.map(title => <TodoListItem key = {title.id} title = {title.title} />)
            }
        </ul>
    );
};


export default TodoList;