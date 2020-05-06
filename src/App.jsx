import React from "react";
import TodoTitle from "./components/TodoTitle";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList/TodoList";
import TodoBottomPanel from "./components/TodoBottomPanel/TodoBottomPanel";

const todos = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Redux" },
  { id: 3, title: "Learn Hooks" },
];

const makeAlert = (str) => {
  alert(str);
};

const likeItem = (str) => {
  alert(str);
};

const App = () => {
  return (
    <>
      <TodoTitle />
      <TodoSearch />
      <TodoList todos={todos} myFunc={makeAlert} likeItem={likeItem} />
      <TodoBottomPanel />
    </>
  );
};

export default App;
