import React from "react";
import TodoListItemBtn from "./TodoListItemBtn";

const TodoListItem = (props) => {
    
    const {title} = props;
    console.log(title);
    
    return (
        <li className = "list-group-item">
            <div className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">
                    {title}
                </span>
                <TodoListItemBtn />
            </div>
        </li>
    );
};


export default TodoListItem;