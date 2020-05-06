import React from "react";
import "./style.css";

const TodoBottomPanel = () => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="Добавить новое событие"
        className="form-control new-post-label"
      />
      <button type="submit" className="btn btn-outline-secondary">
        Добавить
      </button>
    </form>
  );
};

export default TodoBottomPanel;
