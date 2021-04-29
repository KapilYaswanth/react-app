import React,{useState} from 'react'
import '../App.css';
import Header from './Header'
import Form from './form'
import TodoList from './TodoList';
import Errorboundary from './Errorboundary';
export default function Todoapp() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState(false);

  return (
    <div className="container"> 
      <div className="app-wrapper">
        <div>
          <Errorboundary><Header title="To-do App" status={status} setStatus={setStatus}/>
          <Form input={input} setInputs={setInput} todo={todo} setTodo={setTodo} />
          <TodoList  todos={todo} setTodos={setTodo}/>
          </Errorboundary>
          

    </div>
    </div>
    </div>
  );
}

