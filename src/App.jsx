import React from 'react';
import TodoTitle from "./components/TodoTitle";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoNew from "./components/TodoNew";

const App = () => {
  
  const todos = [
    {id:1, title: "list1"},
    {id:2, title: "list2"},
    {id:3, title: "list3"},
    {id:4, title: "list4"}]



  

  return (
    <>
      <TodoTitle />
      <TodoSearch />
      <TodoList todos={todos}/>
      <TodoNew />
    </>
  );
}

export default App;
