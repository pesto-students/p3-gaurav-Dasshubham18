import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      text: event.target.elements.todo.value,
      completed: false
    };
    setTodos([...todos, newTodo]);
    event.target.reset();
  };

  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className='todo-list'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Add a to-do:</label>
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(index)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
