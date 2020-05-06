import React from "react";
import "./style.css";

class TodoListItem extends React.Component {
  state = {
    important: "important",
  };

  render() {
    return (
      <li className="list-group-item">
        <div className="app-list-item d-flex justify-content-between">
          <span className="app-list-item-label" onClick={this.props.likeItem}>
            {this.props.title}
          </span>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="button"
                className="btn-check btn-sm"
                onClick={this.props.myFunc}
              >
                <i className="fa fa-check"></i>
              </button>
              <button type="button" className="btn-trash btn-sm">
                <i className="fa fa-trash-o"></i>
              </button>
              <i className="fa fa-heart"></i>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

// const TodoListItem = (props) => {
//   const { title } = props;

//   return (

//   );
// };

export default TodoListItem;
