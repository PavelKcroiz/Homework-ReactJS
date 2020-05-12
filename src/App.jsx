import React from "react";
import TodoTitle from "./components/TodoTitle";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList/TodoList";
import TodoBottomPanel from "./components/TodoBottomPanel/TodoBottomPanel";
import nextId from "react-id-generator";

class App extends React.Component {
  state = {
    todos: [
      { id: nextId(), title: "Learn React", important: false, like: false },
      { id: nextId(), title: "Learn Redux", important: false, like: false },
      { id: nextId(), title: "Learn Hooks", important: false, like: false },
    ],
    filter: "All",
    term: "",
  };

  addItem = (title) => {
    const newTodo = {
      id: nextId(),
      title: title,
      important: false,
      like: false,
    };

    this.setState((prevState) => {
      return {
        todos: [...prevState.todos, newTodo],
      };
    });
  };

  deleteItem = (id) => {
    let res = window.confirm("Уверены, что хотите удалить элемент?");
    this.setState((prevState) => {
      if (res === true)
        return {
          todos: prevState.todos.filter((todo) => todo.id !== id),
        };
      else return { todos: prevState.todos };
    });
  };

  toggleLike = (id) => {
    this.setState((prevState) => {
      const newArr = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.like = !todo.like;
        }
        return todo;
      });
      return {
        todos: newArr,
      };
    });
  };

  toggleImportant = (id) => {
    this.setState((prevState) => {
      const newArr = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.important = !todo.important;
        }
        return todo;
      });
      return {
        todos: newArr,
      };
    });
  };

  searchItems = (filter) => {
    this.setState(() => {
      return {
        filter: filter,
      };
    });
  };

  searchValues = (term) => {
    this.setState(() => {
      return {
        term: term,
      };
    });
  };

  filteredItems = (arr, filter) => {
    if (filter === "liked") {
      return arr.filter((item) => item.like === true);
    } else if (filter === "important") {
      return arr.filter((item) => item.important === true);
    } else return arr;
  };

  filteredSearchItems = (arr, term) => {
    if (term.length === 0) {
      return arr;
    } else return arr.filter((item) => item.title.includes(term));
  };

  getItemQuantity = (todos) => {
    const quantity = {
      item: todos.length,
      likedItem: todos.filter((item) => item.like === true).length,
      word: this.getWord(todos),
    };
    return quantity;
  };

  getWord = (todos) => {
    const val = todos.length % 10;
    if (val === 1) return "запись";
    else if (val === 0 || val > 4) return "записей";
    else return "записи";
  };

  render() {
    const { todos, filter, term } = this.state;

    const quantity = this.getItemQuantity(todos);

    const visibleTodos = this.filteredItems(
      this.filteredSearchItems(todos, term),
      filter
    );

    return (
      <>
        <TodoTitle quantity={quantity} />
        <TodoSearch
          searchItems={this.searchItems}
          searchValues={this.searchValues}
        />
        <TodoList
          todos={visibleTodos}
          onToggleLike={this.toggleLike}
          onToggleImp={this.toggleImportant}
          onDeleteItem={this.deleteItem}
        />
        <TodoBottomPanel addItem={this.addItem} />
      </>
    );
  }
}

export default App;
