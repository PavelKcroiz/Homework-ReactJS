import React from "react";

const ErrorComponent = (props) => {
  const { errors } = props;
  const newArr = [];
  for (let key in errors) {
    newArr.push(key + ": " + errors[key]);
  }

  return (
    <ul className="list-error">
      {newArr.map((item, index) => {
        return (
          <li key={index} className="item-error">
            {item}{" "}
          </li>
        );
      })}
    </ul>
  );
};

export default ErrorComponent;
