import React, { useState } from "react";

const todoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (editId !== null) {
      //updateTodo
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, title: todoInput } : todo,
        ),
      );
      setEditId(null);
      setTodoInput("");
    } else {
      //addTodo
      const newTodo = {
        id: Date.now(),
        title: todoInput,
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
      setTodoInput("");
    }
  };

  const editHandle = (id) => {
    const editedTodo = todos.find((todo) => todo.id === id);
    setTodoInput(editedTodo.title);
    setEditId(id);
  };
  const deleteHandle = (id) => {
    const isConfirmed = confirm("Are you sure you want to delete?");

    if (isConfirmed) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  return (
    <div>
      <h2>CRUD TODO LIST</h2>
      <input
        type="text"
        placeholder="Enter todo.."
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editId !== null ? "Save Todo" : "Add Todo"}
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              name={todo.title}
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}{" "}
            </span>
            <button onClick={() => editHandle(todo.id)}>Edit</button>{" "}
            <button
              onClick={() => {
                deleteHandle(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default todoList;
