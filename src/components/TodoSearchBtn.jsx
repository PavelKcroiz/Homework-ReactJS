import React from "react";


const TodoSearchBtn = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-info">Все</button>
            <button type="button" className="btn btn-outline-secondary">
                Понравилось
            </button>
            <button type="button" className="btn btn-danger">Сброс</button>
        </div>
    );
};


export default TodoSearchBtn;