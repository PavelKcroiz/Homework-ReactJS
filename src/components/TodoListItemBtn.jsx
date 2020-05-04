import React from "react";


const TodoListItemBtn = () => {
    
    return (
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-check btn-sm">
                    <i className="fa fa-check"></i>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )}
export default TodoListItemBtn