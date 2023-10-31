import './App.css';
import React, {useState} from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function App() {
  const [todos,setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = [...todos, {text, completed:false}];
    setTodos(newTodo);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo,i)=> {
      if (i === index) {
        return { ...todo, completed: !todo.complete};
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i)=> i !== index );
    setTodos(newTodos);
  };
  return (
    <container>
      <h1>오늘의 ToDo List!</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </container>
  );
}

export default App;
