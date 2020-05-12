import React from "react";

const TodoSearchBtn = (props) => {
  const { searchItems } = props;
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-info"
        onClick={() => {
          searchItems("All");
        }}
      >
        Все
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => {
          searchItems("liked");
        }}
      >
        Понравилось
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          searchItems("important");
        }}
      >
        Выполнено
      </button>
    </div>
  );
};

export default TodoSearchBtn;
