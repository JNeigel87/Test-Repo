import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './components/todos.js';
import Act from './components/todolist.js';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">

      <Form todos = {todos} setTodos = {setTodos} />
      {todos.map((acts, i) => (
        <Act acts={acts} setTodos= {setTodos} index ={i} todos ={todos} />
      ))}
      
    </div>
  );
}

export default App;
