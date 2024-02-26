import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const MainPage = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Function to add a new todo item
  const addTodo = (todoText, dueDate) => {
    const newTodo = {
      id: todos.length + 1,
      text: todoText,
      dueDate: dueDate,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Function to toggle the completion status of a todo item
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to remove a todo item
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to filter todos based on completion status
  const filteredTodos = () => {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "incomplete":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="main-page">
      <h1>To-Do List</h1>
      <AddTodoForm addTodo={addTodo} />
      <div className="filter-options">
        <span>Show: </span>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>
      <TodoList
        todos={filteredTodos()}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default MainPage;
