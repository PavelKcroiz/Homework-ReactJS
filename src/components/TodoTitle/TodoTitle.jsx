import React from "react";
import "./style.css";

const TodoTitle = (props) => {
  const { quantity } = props;
  return (
    <div className="app-header d-flex">
      <h1>Имя</h1>;
      <h2>
        {quantity.item} {quantity.word}, из них понравилось {quantity.likedItem}
      </h2>
    </div>
  );
};

export default TodoTitle;
